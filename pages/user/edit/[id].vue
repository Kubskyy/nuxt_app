<template>
  <Navbar />
  <EditForm />

</template>

<script setup>
  definePageMeta({middleware: 'auth'})
  

</script>