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
  <fieldset>
    <legend class="sr-only">Plan</legend>
    <div class="space-y-5">
      <div v-for="plan in plans" :key="plan.id" class="relative flex items-start">
        <div class="flex items-center h-5">
          <input :id="plan.id" :aria-describedby="`${plan.id}-description`" name="plan" type="radio" :checked="plan.id === 'small'" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
        </div>
        <div class="ml-3 text-sm">
          <label :for="plan.id" class="font-medium text-gray-700">{{ plan.name }}</label>
          <span :id="`${plan.id}-description`" class="text-gray-500">{{ plan.description }}</span>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
const plans = [
  { id: 'small', name: 'Small', description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage' },
  { id: 'medium', name: 'Medium', description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage' },
  { id: 'large', name: 'Large', description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage' },
]

export default {
  setup() {
    return {
      plans,
    }
  },
}
</script>