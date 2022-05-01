<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="flex items-center justify-center" aria-label="Progress">
    <p class="text-sm font-medium">Step {{ steps.findIndex((step) => step.status === 'current') + 1 }} of {{ steps.length }}</p>
    <ol role="list" class="ml-8 flex items-center space-x-5">
      <li v-for="step in steps" :key="step.name">
        <a v-if="step.status === 'complete'" :href="step.href" class="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
          <span class="sr-only">{{ step.name }}</span>
        </a>
        <a v-else-if="step.status === 'current'" :href="step.href" class="relative flex items-center justify-center" aria-current="step">
          <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
            <span class="w-full h-full rounded-full bg-indigo-200" />
          </span>
          <span class="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
          <span class="sr-only">{{ step.name }}</span>
        </a>
        <a v-else :href="step.href" class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
          <span class="sr-only">{{ step.name }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
const steps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'current' },
  { name: 'Step 3', href: '#', status: 'upcoming' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
]

export default {
  setup() {
    return {
      steps,
    }
  },
}
</script>