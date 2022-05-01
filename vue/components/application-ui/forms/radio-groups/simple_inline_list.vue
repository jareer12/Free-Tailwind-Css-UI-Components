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
    <label class="text-base font-medium text-gray-900">Notifications</label>
    <p class="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>
    <fieldset class="mt-4">
      <legend class="sr-only">Notification method</legend>
      <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
        <div v-for="notificationMethod in notificationMethods" :key="notificationMethod.id" class="flex items-center">
          <input :id="notificationMethod.id" name="notification-method" type="radio" :checked="notificationMethod.id === 'email'" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
          <label :for="notificationMethod.id" class="ml-3 block text-sm font-medium text-gray-700">
            {{ notificationMethod.title }}
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default {
  setup() {
    return {
      notificationMethods,
    }
  },
}
</script>