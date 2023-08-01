import { getToken } from '#auth'

export default defineEventHandler(async (event: any) => {
    const token = await getToken({ event })
    console.log(token);
    if (token) {
      const result = await $fetch(`${process.env.API_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token.accessToken}`
        }
      }) 
      return result;
    } else {
      throw createError({
        statusCode: 403, 
        statusMessage: 'Token is missing'
      })
    }
  })