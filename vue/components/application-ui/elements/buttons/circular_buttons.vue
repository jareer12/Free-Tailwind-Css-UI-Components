<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <PlusSmIconSolid class="h-5 w-5" aria-hidden="true" />
  </button>
  <button type="button" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <PlusSmIconSolid class="h-5 w-5" aria-hidden="true" />
  </button>
  <button type="button" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <PlusSmIconSolid class="h-5 w-5" aria-hidden="true" />
  </button>
  <button type="button" class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <PlusSmIconOutline class="h-6 w-6" aria-hidden="true" />
  </button>
  <button type="button" class="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <PlusSmIconOutline class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script>
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/vue/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/vue/outline'

export default {
  components: {
    PlusSmIconOutline,
    PlusSmIconSolid,
  },
}
</script>