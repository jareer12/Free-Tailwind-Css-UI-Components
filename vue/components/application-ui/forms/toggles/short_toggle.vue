<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Switch v-model="enabled" class="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <span class="sr-only">Use setting</span>
    <span aria-hidden="true" class="pointer-events-none absolute bg-white w-full h-full rounded-md" />
    <span aria-hidden="true" :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200']" />
    <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200']" />
  </Switch>
</template>

<script>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

export default {
  components: {
    Switch,
  },
  setup() {
    const enabled = ref(false)

    return {
      enabled,
    }
  },
}
</script>