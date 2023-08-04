import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'


const getUserData = async (token: string, id: number): Promise<{
  id: number,
  email_address: string,
  first_name: string,
  last_name: string,
  phone_number: string, 
}> => {
  const user = await $fetch(`${process.env.API_URL}/users/${id}`, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
  // @ts-ignore
  if (!user) {
      throw createError({
          message: "User not found",
          statusCode: 404,
      });
  }

  // @ts-ignore
  return user;
};

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
                    id: number;
                    token: string;
                } | null>(`${process.env.API_URL}/users/login`, {
                  method: "POST",
                  body: payload,
                });
                const newData = await getUserData(res?.token as string, res?.id as number)
                if (res?.token && newData) {
                  return{
                    user:{...newData},
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
      async session({ session, token, user }) {
        session.user = {
          ...session.user,
          ...user,
          ...token,
        };
        return session;
      //   try {
      //     const newData = await getUserData(token.accessToken as string, 24 as number);
      //     console.log("newData", newData);
      //     session.user = {
      //         ...session.user,
      //         ...token,
      //         ...newData,
      //     };
      //     // return null;
      //     return session;
      // } catch (err: any) {
      //     console.log(err.message)
      //     return null;
      // }
      },
  },
});