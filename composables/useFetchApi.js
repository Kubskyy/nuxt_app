export default () => {

    const config = useRuntimeConfig();
    const BASE_URL = config.public.apiUrl;
    const headers = {};
    if (process.client) {
        const { data } = useAuth();
        const user = data.value?.user;
        console.log("user", user);
        if (user?.accessToken) {
            headers["Authorization"] = `Bearer ${user.accessToken}`;
        }
    }

    const get = async (endpoint, options) => {
        console.log(BASE_URL, endpoint);
        return useFetch(endpoint, {
            baseURL: BASE_URL,
            method: "GET",
            ...options,
            headers,
        });
    };

    const rawFetch = async (endpoint, options) => {
        return $fetch(endpoint, {
            baseURL: BASE_URL,
            headers,
            ...options,
        });
    };
    const postCurry = (method) => {
        return async (endpoint, body, options) => {
            console.log("url", BASE_URL, endpoint, body, options);
            return $fetch(endpoint, {
                baseURL: BASE_URL,
                method,
                body,
                ...options,
                headers,
            });
        };
    };
    const post = postCurry("POST");
    const put = postCurry("PUT");
    const destroy = postCurry("DELETE");
    return {
        get,
        rawFetch,
        post,
        put,
        destroy,
    };
}