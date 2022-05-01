<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="activityItem in activityItems" :key="activityItem.id" class="py-4">
        <div class="flex space-x-3">
          <img class="h-6 w-6 rounded-full" :src="activityItem.person.imageUrl" alt="" />
          <div class="flex-1 space-y-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium">{{ activityItem.person.name }}</h3>
              <p class="text-sm text-gray-500">{{ activityItem.time }}</p>
            </div>
            <p class="text-sm text-gray-500">Deployed {{ activityItem.project }} ({{ activityItem.commit }} in master) to {{ activityItem.environment }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const people = [
  {
    name: 'Lindsay Walton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  // More people...
]
const activityItems = [
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  // More items...
]

export default {
  setup() {
    return {
      people,
      activityItems,
    }
  },
}
</script>