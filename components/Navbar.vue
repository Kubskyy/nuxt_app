<template>
    <nav class="border-gray-200  dark:bg-gray-900">
    <div
      class="max-w-screen-xl w-full flex flex-wrap items-center justify-end mx-auto p-4">
        <ul
          class="font-medium flex items-center border-gray-100 md:flex-row md:space-x-10 md:mt-0 md:border-0 dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/"
              class="block md:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
              aria-current="page"
              >Home
            </NuxtLink>
          </li>
          <li v-if="loggedIn">
            <NuxtLink
              to="/profile"
              class="block  md:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
              aria-current="page"
            >
              Profile
            </NuxtLink>
          </li>

          <li>
            <ButtonPrimary v-if="loggedIn"  @click="signOut()">Sign Out</ButtonPrimary>
            <ButtonPrimary v-else  @click="$router.push('/login')">Sign In</ButtonPrimary>
          </li>
        </ul>
    </div>
  </nav>
</template>

<script setup>
const { status, signOut } = useAuth()
const loggedIn = computed(()=> status.value === 'authenticated')

</script>

<style lang="scss" scoped>

</style>