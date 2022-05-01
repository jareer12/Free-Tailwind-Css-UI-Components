<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div v-for="person in people" :key="person.email" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
      </div>
      <div class="flex-1 min-w-0">
        <a href="#" class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">
            {{ person.name }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            {{ person.role }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: 'Leslie Alexander',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default {
  setup() {
    return {
      people,
    }
  },
}
</script>