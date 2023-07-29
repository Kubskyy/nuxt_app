<template>
  <div >
    <Navbar />
    <UserTable />
  </div>
  
  </template>

<script setup>
const headers = useRequestHeaders(['cookie'])
const { data: token } = await useFetch('/api/token', { headers })
console.log(token);
   const {status, signOut} = useAuth()
   const loggedIn = computed(()=> status.value === 'authenticated')
   
</script>
  