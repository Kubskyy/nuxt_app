<template>
    <section>
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

          <GithubLogin />

          <div class="flex items-center">
            <div class="bg-gray-500 h-[.125rem] w-full"></div>
            <p class="mx-8 text-medium text-gray-500">or</p>
            <div class="bg-gray-500 h-[.125rem] w-full"></div>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>