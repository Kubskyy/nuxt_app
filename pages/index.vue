
<template>
  <div >
    <Navbar />
    <UserTable />
  </div>
 
  
  </template>

<script setup>
definePageMeta({middleware: 'auth'})



   
</script>
  