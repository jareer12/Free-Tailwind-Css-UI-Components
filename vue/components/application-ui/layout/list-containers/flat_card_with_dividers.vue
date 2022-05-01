<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white border border-gray-300 overflow-hidden rounded-md">
    <ul role="list" class="divide-y divide-gray-300">
      <li v-for="item in items" :key="item.id" class="px-6 py-4">
        <!-- Your content -->
      </li>
    </ul>
  </div>
</template>

<script>
const items = [
  { id: 1 },
  // More items...
]

export default {
  setup() {
    return {
      items,
    }
  },
}
</script>