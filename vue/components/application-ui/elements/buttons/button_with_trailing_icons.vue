<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Button text
    <MailIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Button text
    <MailIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Button text
    <MailIcon class="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
  </button>
  <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Button text
    <MailIcon class="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
  </button>
</template>

<script>
import { MailIcon } from '@heroicons/vue/solid'

export default {
  components: {
    MailIcon,
  },
}
</script>