import { getToken } from '#auth'
import { useRequestHeaders } from 'nuxt/app';

export default defineEventHandler(async (event: any) => {
    const token = await getToken({ event })
    console.log(token);
    if (token) {
      const result = await $fetch(`${process.env.API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      }) as any
      return result.data
    } else {
      throw createError({
        statusCode: 403, 
        statusMessage: 'Token is missing'
      })
    }
  })