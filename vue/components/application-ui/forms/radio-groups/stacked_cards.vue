<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only"> Server size </RadioGroupLabel>
    <div class="space-y-4">
      <RadioGroupOption as="template" v-for="plan in plans" :key="plan.name" :value="plan" v-slot="{ checked, active }">
        <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-indigo-500' : '', 'relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none']">
          <div class="flex items-center">
            <div class="text-sm">
              <RadioGroupLabel as="p" class="font-medium text-gray-900">
                {{ plan.name }}
              </RadioGroupLabel>
              <RadioGroupDescription as="div" class="text-gray-500">
                <p class="sm:inline">{{ plan.ram }} / {{ plan.cpus }}</p>
                {{ ' ' }}
                <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
                {{ ' ' }}
                <p class="sm:inline">{{ plan.disk }}</p>
              </RadioGroupDescription>
            </div>
          </div>
          <RadioGroupDescription as="div" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900">{{ plan.price }}</div>
            <div class="ml-1 text-gray-500 sm:ml-0">/mo</div>
          </RadioGroupDescription>
          <div :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']" aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import { ref } from 'vue'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const plans = [
  { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
  { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
  { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
  { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
]

export default {
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
  },
  setup() {
    const selected = ref(plans[0])

    return {
      plans,
      selected,
    }
  },
}
</script>