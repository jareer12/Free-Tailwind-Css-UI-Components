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
    <label for="account-number" class="block text-sm font-medium text-gray-700">Account number</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <input type="text" name="account-number" id="account-number" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="000-00-0000" />
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <QuestionMarkCircleIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
  components: {
    QuestionMarkCircleIcon,
  },
}
</script>