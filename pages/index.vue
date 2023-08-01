<template>
  <div >
    <Navbar />
    <UserTable />
  </div>
  <pre>
    {{ data }}
    {{ users }}
  </pre>
  
  </template>

<script setup>
const {data} = useAuth()

const {data: users} = await useFetch(`${process.env.API_URL}/users`, 
{
  headers: {
    Authorization: `Bearer ${data.value.user.accessToken}`
  },
}
);

   
</script>
  