<template>
  <form @submit.prevent="submitHandle" class="max-w-7xl m-auto w-full flex flex-col items-center mt-12 justify-center ">
  <div class="space-y-12">            
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" v-model="first_name" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" v-model="last_name" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input readonly id="email" v-model="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
          <div class="mt-2">
            <input  type="text" v-model="phone_number" name="title" id="title" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <NuxtLink to="/">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    </NuxtLink>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
</template>

<script setup>

const route = useRoute();
const router = useRouter();
const {data} = useAuth();
console.log(route.params.id);
const {data: user} = await useFetch(`https://nuxt-api.dev.codelines.io/users/${route.params.id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${data?.value.user?.accessToken}`,
  },
});

 const first_name = ref(user.value.first_name)
 const last_name = ref(user.value.last_name)
 const phone_number = ref(user.value.phone_number)
 const email = ref(user.value.email_address)

const submitHandle = async() => {
await useFetch(`https://nuxt-api.dev.codelines.io/users/${route.params.id}`, {
  method: "PUT",
  headers: {
    "Access-Control-Allow-Methods" : "PUT",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${data?.value.user?.accessToken}`,
  },
  body:{
    "first_name": first_name,
    "last_name": last_name,
    "phone_number": phone_number,
  }
})
router.push("/");
}

</script>

<style lang="scss" scoped>

</style>