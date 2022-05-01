<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm text-yellow-700">
          You have no credits left.
          {{ ' ' }}
          <a href="#" class="font-medium underline text-yellow-700 hover:text-yellow-600"> Upgrade your account to add more credits. </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ExclamationIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ExclamationIcon,
  },
}
</script>