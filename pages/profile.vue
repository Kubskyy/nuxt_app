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
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{userData.first_name}} {{ userData.last_name }}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{userData.email_address}}</dd>
            </div>
            </dl>
        </div>
    </div>

</template>

<script setup>
    definePageMeta({middleware: 'auth'})
    const {data} = useAuth();
    const userData = ref(data.value.user.user);
    
</script>

<style lang="scss" scoped>

</style>