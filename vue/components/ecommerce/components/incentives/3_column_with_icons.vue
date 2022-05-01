<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <h2 class="sr-only">Why you should buy from us</h2>
    <div class="flex overflow-x-auto">
      <div class="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
        <div v-for="incentive in incentives" :key="incentive.name" class="flex items-center text-sm font-medium text-indigo-600">
          <component :is="incentive.icon" class="mr-2 flex-none w-6 h-6" aria-hidden="true" />
          <p>{{ incentive.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BadgeCheckIcon, CalendarIcon, TruckIcon } from '@heroicons/vue/outline'

const incentives = [
  { name: 'Free, contactless delivery', icon: TruckIcon },
  { name: 'No questions asked returns', icon: BadgeCheckIcon },
  { name: '2-year warranty', icon: CalendarIcon },
]

export default {
  setup() {
    return {
      incentives,
    }
  },
}
</script>