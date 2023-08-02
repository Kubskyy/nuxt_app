<template>
  <div >
    <Navbar />
    <UserTable />
  </div>
 
  
  </template>

<script setup>
definePageMeta({middleware: 'auth'})
const {data} = useAuth();


   
</script>
  