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
const {data} = useAuth();
const {data: users} = await useFetch(`https://nuxt-api.dev.codelines.io/users`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${data?.value.user?.accessToken}`,
  },
});
console.log("users", users);

// const {data: users} = await useFetch(`${process.env.API_URL}/users`, 
// {
//   headers: {
//     Authorization: `Bearer ${data.value.user.accessToken}`
//   },
// }
// );

   
</script>
  