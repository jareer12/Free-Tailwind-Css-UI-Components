<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <nav class="flex justify-center" aria-label="Progress">
      <ol role="list" class="space-y-6">
        <li v-for="step in steps" :key="step.name">
          <a v-if="step.status === 'complete'" :href="step.href" class="group">
            <span class="flex items-start">
              <span class="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                <CheckCircleIcon class="h-full w-full text-indigo-600 group-hover:text-indigo-800" aria-hidden="true" />
              </span>
              <span class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span>
            </span>
          </a>
          <a v-else-if="step.status === 'current'" :href="step.href" class="flex items-start" aria-current="step">
            <span class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
              <span class="absolute h-4 w-4 rounded-full bg-indigo-200" />
              <span class="relative block w-2 h-2 bg-indigo-600 rounded-full" />
            </span>
            <span class="ml-3 text-sm font-medium text-indigo-600">{{ step.name }}</span>
          </a>
          <a v-else :href="step.href" class="group">
            <div class="flex items-start">
              <div class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
                <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400" />
              </div>
              <p class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</p>
            </div>
          </a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/solid'

const steps = [
  { name: 'Create account', href: '#', status: 'complete' },
  { name: 'Profile information', href: '#', status: 'current' },
  { name: 'Theme', href: '#', status: 'upcoming' },
  { name: 'Preview', href: '#', status: 'upcoming' },
]

export default {
  components: {
    CheckCircleIcon,
  },
  setup() {
    return {
      steps,
    }
  },
}
</script>