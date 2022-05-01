<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="item in items" :key="item.id" class="px-4 py-4 sm:px-6">
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