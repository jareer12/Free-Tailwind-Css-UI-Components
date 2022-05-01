<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="max-w-md mx-auto sm:max-w-3xl">
    <div>
      <div class="text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <h2 class="mt-2 text-lg font-medium text-gray-900">Add team members</h2>
        <p class="mt-1 text-sm text-gray-500">You haven’t added any team members to your project yet.</p>
      </div>
      <form class="mt-6 sm:flex sm:items-center" action="#">
        <label for="emails" class="sr-only">Email addresses</label>
        <div class="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          <input type="text" name="emails" id="emails" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-32 sm:text-sm border-gray-300 rounded-md" placeholder="Enter an email" />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <span class="h-4 w-px bg-gray-200" aria-hidden="true" />
            <label for="role" class="sr-only">Role</label>
            <select id="role" name="role" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-4 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
              <option>Can edit</option>
              <option>Can view</option>
            </select>
          </div>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <button type="submit" class="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send invite</button>
        </div>
      </form>
    </div>
    <div class="mt-10">
      <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recommended team members</h3>
      <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li v-for="(person, personIdx) in people" :key="personIdx">
          <button type="button" class="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="min-w-0 flex-1 flex items-center space-x-3">
              <span class="block flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
              </span>
              <span class="block min-w-0 flex-1">
                <span class="block text-sm font-medium text-gray-900 truncate">{{ person.name }}</span>
                <span class="block text-sm font-medium text-gray-500 truncate">{{ person.role }}</span>
              </span>
            </span>
            <span class="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center">
              <PlusIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/solid'

const people = [
  {
    name: 'Lindsay Walton',
    handle: 'lindsaywalton',
    email: 'lindsaywalton@example.com',
    role: 'Front-end Developer',
    imageId: '1517841905240-472988babdf9',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Courtney Henry',
    handle: 'courtneyhenry',
    email: 'courtneyhenry@example.com',
    role: 'Designer',
    imageId: '1438761681033-6461ffad8d80',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Tom Cook',
    handle: 'tomcook',
    email: 'tomcook@example.com',
    role: 'Director, Product Development',
    imageId: '1472099645785-5658abf4ff4e',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    handle: 'whitneyfrancis',
    email: 'whitneyfrancis@example.com',
    role: 'Copywriter',
    imageId: '1517365830460-955ce3ccd263',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    email: 'leonardkrasner@example.com',
    role: 'Senior Designer',
    imageId: '1519345182560-3f2917c472ef',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    email: 'floydmiles@example.com',
    role: 'Principal Designer',
    imageId: '1463453091185-61582044d556',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default {
  components: {
    PlusIcon,
  },
  setup() {
    return {
      people,
    }
  },
}
</script>