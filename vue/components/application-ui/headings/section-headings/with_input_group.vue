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
  <div class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
    <h3 class="text-lg leading-6 font-medium text-gray-900">Job Postings</h3>
    <div class="mt-3 sm:mt-0 sm:ml-4">
      <label for="mobile-search-candidate" class="sr-only">Search</label>
      <label for="desktop-search-candidate" class="sr-only">Search</label>
      <div class="flex rounded-md shadow-sm">
        <div class="relative flex-grow focus-within:z-10">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input type="text" name="mobile-search-candidate" id="mobile-search-candidate" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300" placeholder="Search" />
          <input type="text" name="desktop-search-candidate" id="desktop-search-candidate" class="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300" placeholder="Search candidates" />
        </div>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
          <SortAscendingIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span class="ml-2">Sort</span>
          <ChevronDownIcon class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ChevronDownIcon,
    SearchIcon,
    SortAscendingIcon,
  },
}
</script>