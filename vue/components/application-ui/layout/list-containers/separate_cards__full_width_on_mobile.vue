<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ul role="list" class="space-y-3">
    <li v-for="item in items" :key="item.id" class="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
      <!-- Your content -->
    </li>
  </ul>
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