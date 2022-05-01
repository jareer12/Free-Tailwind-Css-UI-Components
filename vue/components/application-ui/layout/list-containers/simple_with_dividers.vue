<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="item in items" :key="item.id" class="py-4">
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