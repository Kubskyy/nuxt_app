import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'


// const getUserData = async (token: string): Promise<{
//   id: number,
//   email_address: string,
//   first_name: string,
//   last_name: string,
// }> => {
//   const user = await $fetch(`${process.env.API_URL}/users/5`, {
//       headers: {
//           Authorization: `Bearer ${token}`,
//       },
//   });
//   // @ts-ignore
//   if (!user) {
//       throw createError({
//           message: "User not found",
//           statusCode: 404,
//       });
//   }

//   // @ts-ignore
//   return user;
// };

export default NuxtAuthHandler({
    pages: {
        signIn: '/login',
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: process.env.GITHUB_CLIENT_ID,
           clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialsProvider.default({
            name: "Credentials",
            async authorize(credentials: any) {
              try {
                const payload = {
                  email_address: credentials.email,
                  password: credentials.password,
                };
                console.log(payload);
                const res = await $fetch<{
                    token: string;
                } | null>(`${process.env.API_URL}/users/login`, {
                  method: "POST",
                  body: payload,
                });
                if (res?.token) {
                  return{
                    accessToken: res.token,
                    status: undefined,
                  };
                }
              } catch (error: any) {
                console.log("Error in NuxtAuthHandler", error.message);
                throw createError({
                  message: error.message,
                  statusCode: error.status,
                });
              }
            },
    
        //     async authorize(credentials: any) {
        //       try {
        //         const payload = {
        //           email_address: credentials.email,
        //           password: credentials.password,
        //         };
        //         console.log(payload);
        //         const userTokens = await $fetch<{
        //           data: { access_token: string };
        //         } | null>(`${process.env.API_URL}/users/login`, {
        //           method: "POST",
        //           body: payload,
        //           headers: {
        //             "Content-Type": "application/json",
        //           },
        //         });
        //         // const userDetails = await $fetch<{
        //         //   data: {
        //         //     id: string;
        //         //     email: string;
        //         //     first_name: string;
        //         //     last_name: string;
        //         //     phone?: string;
        //         //   };
        //         // } | null>(`${process.env.API_URL}/users/5`, {
        //         //   method: "GET",
        //         //   headers: {
        //         //     "Content-Type": "application/json",
        //         //     Authorization: `Bearer ${userTokens?.data?.access_token}`,
        //         //   },
        //         // });
        //         // if (!userTokens || !userTokens.data || !userDetails || !userDetails.data) {
        //         //   throw createError({
        //         //     statusCode: 500,
        //         //     statusMessage: "Next auth failed",
        //         //   });
        //         // }
        //         const user = {
        //           // id: userDetails.data.id,
        //           // email: userDetails.data.email,
        //           // firstName: userDetails.data.first_name,
        //           // lastName: userDetails.data.last_name,  
        //           // phone: userDetails.data.phone,
        //           accessToken: userTokens?.data.access_token,
        //         };
        //         return user;
        //   } catch (error) {
        //     console.warn("Error logging in", error);
        //     return null;
        //   }
        // }, 
      }),
     ],
    session:{
      strategy: "jwt",
    },
    callbacks: {
      async jwt({ token, user, account }) {
        if (account && user) {
          console.warn("JWT callback", { token, user, account });
          return {
            ...token,
            ...user,
          };
        }
        return token;   
      },
      async session({ session, token }) {
        session.user = {
          ...session.user,
          ...token,
        };
        return session;
      },
    //   async session({session, token, user}){
    //     try {
    //       const newData = await getUserData(token.accessToken as string);
    //       session.user = {
    //           ...session.user,
    //           ...token,
    //           ...newData,
    //       };
    //       // return null;
    //       return session;
    //   } catch (err: any) {
    //       console.log(err.message)
         
    //   }
    // },
  },
});