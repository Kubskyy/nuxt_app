<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{user.name}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{user.title}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{user.email}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{user.role}}</td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
            <NuxtLink :to="`/user/edit/${user.id}`" >
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, {{user.name}}</span></a>
            </NuxtLink>
        </td>
    </tr>
</template>

<script setup>
defineProps({
  user: Object,
})

</script>
