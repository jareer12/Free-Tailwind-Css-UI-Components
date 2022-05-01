<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          rose: colors.rose,
        },
      },
    },
  }
  ```
-->
<template>
  <div class="flow-root">
    <ul role="list" class="-mb-8">
      <li v-for="(activityItem, activityItemIdx) in activity" :key="activityItem.id">
        <div class="relative pb-8">
          <span v-if="activityItemIdx !== activity.length - 1" class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex items-start space-x-3">
            <template v-if="activityItem.type === 'comment'">
              <div class="relative">
                <img class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" :src="activityItem.imageUrl" alt="" />

                <span class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                  <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <div>
                  <div class="text-sm">
                    <a :href="activityItem.person.href" class="font-medium text-gray-900">{{ activityItem.person.name }}</a>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">Commented {{ activityItem.date }}</p>
                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <p>
                    {{ activityItem.comment }}
                  </p>
                </div>
              </div>
            </template>
            <template v-else-if="activityItem.type === 'assignment'" condition="activityItem.type === 'assignment'">
              <div>
                <div class="relative px-1">
                  <div class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                    <UserCircleIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div class="min-w-0 flex-1 py-1.5">
                <div class="text-sm text-gray-500">
                  <a :href="activityItem.person.href" class="font-medium text-gray-900">{{ activityItem.person.name }}</a>
                  {{ ' ' }}
                  assigned
                  {{ ' ' }}
                  <a :href="activityItem.assigned.href" class="font-medium text-gray-900">{{ activityItem.assigned.name }}</a>
                  {{ ' ' }}
                  <span class="whitespace-nowrap">{{ activityItem.date }}</span>
                </div>
              </div>
            </template>
            <template v-else-if="activityItem.type === 'tags'" condition="activityItem.type === 'tags'">
              <div>
                <div class="relative px-1">
                  <div class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                    <TagIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div class="min-w-0 flex-1 py-0">
                <div class="text-sm leading-8 text-gray-500">
                  <span class="mr-0.5">
                    <a :href="activityItem.person.href" class="font-medium text-gray-900">{{ activityItem.person.name }}</a>
                    {{ ' ' }}
                    added tags
                  </span>
                  {{ ' ' }}
                  <span class="mr-0.5">
                    <template v-for="tag in activityItem.tags" :key="tag.name">
                      <a :href="tag.href" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                        <span class="absolute flex-shrink-0 flex items-center justify-center">
                          <span :class="[tag.color, 'h-1.5 w-1.5 rounded-full']" aria-hidden="true" />
                        </span>
                        <span class="ml-3.5 font-medium text-gray-900">{{ tag.name }}</span>
                      </a>
                      {{ ' ' }}
                    </template>
                  </span>
                  <span class="whitespace-nowrap">{{ activityItem.date }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/vue/solid'

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'bg-rose-500' },
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]

export default {
  components: {
    ChatAltIcon,
    TagIcon,
    UserCircleIcon,
  },
  setup() {
    return {
      activity,
    }
  },
}
</script>