<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="border-b border-gray-200">
    <div class="sm:flex sm:items-baseline">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Issues</h3>
      <div class="mt-4 sm:mt-0 sm:ml-10">
        <nav class="-mb-px flex space-x-8">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']" :aria-current="tab.current ? 'page' : undefined">
            {{ tab.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
const tabs = [
  { name: 'Open', href: '#', current: true },
  { name: 'Closed', href: '#', current: false },
]

export default {
  setup() {
    return {
      tabs,
    }
  },
}
</script>