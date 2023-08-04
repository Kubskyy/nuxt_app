<template>
    <tr id="item">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{user.first_name}} {{user.last_name}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{user.email_address}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{user.phone_number}}</td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
            <NuxtLink :to="`/user/edit/${user.id}`" class="text-indigo-600 hover:text-indigo-900" >
                Edit
                <span class="sr-only">, {{user.first_name}}</span>
            </NuxtLink>
        </td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
            <button v-if="!(data.user.user.email_address == user.email_address)" @click="deleteUser(user.id)" class="text-red-400 hover:text-red-900" >
                Delete
                <span class="sr-only">, {{user.first_name}}</span>
            </button>
        </td>
    </tr>
</template>

<script setup>
defineProps({
  user: Object,
})

import { useToast } from "vue-toastification";
const toast = useToast();
const {data} = useAuth();
const deleteUser = async(id) => {
  await useFetchApi().destroy(`/users/${id}`, {
    server:false,
  })
  const element = document.getElementById('item');
  element.remove();
toast.success("Successfully deleted user");


}

</script>
