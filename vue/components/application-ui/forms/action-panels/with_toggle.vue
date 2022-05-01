<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow sm:rounded-lg">
    <SwitchGroup as="div" class="px-4 py-5 sm:p-6">
      <SwitchLabel as="h3" class="text-lg leading-6 font-medium text-gray-900" passive> Renew subscription automatically </SwitchLabel>
      <div class="mt-2 sm:flex sm:items-start sm:justify-between">
        <div class="max-w-xl text-sm text-gray-500">
          <SwitchDescription> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum. </SwitchDescription>
        </div>
        <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <Switch v-model="enabled" :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
            <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
          </Switch>
        </div>
      </div>
    </SwitchGroup>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'

export default {
  components: {
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
  },
  setup() {
    const enabled = ref(false)

    return {
      enabled,
    }
  },
}
</script>