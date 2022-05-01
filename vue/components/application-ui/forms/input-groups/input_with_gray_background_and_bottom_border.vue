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
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
    <div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
      <input type="text" name="name" id="name" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm" placeholder="Jane Doe" />
    </div>
  </div>
</template>
