import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: '73b6773f4e4a5e8040c2',
           clientSecret: '66418bf61c61b232339601873cdd786d3bfdab2f'
        })
    ]
})