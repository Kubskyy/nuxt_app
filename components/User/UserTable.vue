<template>
    <div class="mt-8 max-w-screen-xl mx-auto px-4 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone number</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <UserListItem v-for="user in users" :key="user.id" :user="user" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script setup>
defineProps({
  users: Object
})
const {data} = useAuth();
const {data: users} = await useFetch(`https://nuxt-api.dev.codelines.io/users`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${data?.value.user?.accessToken}`,
  },
});
    //const response = await useFetch('/api/users')
    
  //const UserList = ref(response.data._rawValue.users)
</script>

<style lang="scss" scoped>

</style>