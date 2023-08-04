
<template>
  <div >
    <Navbar />
    <UserTable :users="users"/>
  </div>
 
  
  </template>

<script setup>
definePageMeta({middleware: 'auth'})
const {data: users} = await useFetchApi().get("/users",{
  server: false
});

console.log(users);



   
</script>
  