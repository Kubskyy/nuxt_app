<template>
    <Navbar />
    <div class="max-w-screen-xl mx-auto px-4">
        <div class=" px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-7 text-gray-900">Profile Information</h3>
        </div>
        <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{token.name || "Not given"}} </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{token.email}}</dd>
            </div>
            </dl>
        </div>
    </div>

</template>

<script setup>
    definePageMeta({middleware: 'auth'})
    const headers = useRequestHeaders(['cookie'])
    const { data: token } = await useFetch('/api/token', { headers })
    
</script>

<style lang="scss" scoped>

</style>