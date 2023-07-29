<template>
<Login />
</template>

<script setup>

definePageMeta({
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})


</script>

<style lang="scss" scoped>

</style>