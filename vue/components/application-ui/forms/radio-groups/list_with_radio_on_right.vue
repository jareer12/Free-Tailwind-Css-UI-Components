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
    <h2 class="text-lg leading-6 font-medium text-gray-900">Transfer funds</h2>
    <p class="mt-1 text-sm text-gray-500">Transfer your balance to your bank account.</p>
    <fieldset class="mt-2">
      <legend class="sr-only">Bank account</legend>
      <div class="divide-y divide-gray-200">
        <div v-for="(account, accountIdx) in accounts" :key="accountIdx" class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm">
            <label :for="`account-${account.id}`" class="font-medium text-gray-700">{{ account.name }}</label>
            <p :id="`account-${account.id}-description`" class="text-gray-500">{{ account.description }}</p>
          </div>
          <div class="ml-3 flex items-center h-5">
            <input :id="`account-${account.id}`" :aria-describedby="`account-${account.id}-description`" name="account" type="radio" :checked="account.id === 'checking'" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]

export default {
  setup() {
    return {
      accounts,
    }
  },
}
</script>