<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-lg mx-auto">
    <h2 class="text-lg font-medium text-gray-900">Create your first project</h2>
    <p class="mt-1 text-sm text-gray-500">Get started by selecting a template or start from an empty project.</p>
    <ul role="list" class="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
      <li v-for="(item, itemIdx) in items" :key="itemIdx">
        <div class="relative group py-4 flex items-start space-x-3">
          <div class="flex-shrink-0">
            <span :class="[item.iconColor, 'inline-flex items-center justify-center h-10 w-10 rounded-lg']">
              <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-sm font-medium text-gray-900">
              <a :href="item.href">
                <span class="absolute inset-0" aria-hidden="true" />
                {{ item.name }}
              </a>
            </div>
            <p class="text-sm text-gray-500">{{ item.description }}</p>
          </div>
          <div class="flex-shrink-0 self-center">
            <ChevronRightIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
          </div>
        </div>
      </li>
    </ul>
    <div class="mt-6 flex">
      <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Or start from an empty project<span aria-hidden="true"> &rarr;</span></a>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'
import { CalendarIcon, SpeakerphoneIcon, TerminalIcon } from '@heroicons/vue/outline'

const items = [
  {
    name: 'Marketing Campaign',
    description: 'I think the kids call these memes these days.',
    href: '#',
    iconColor: 'bg-pink-500',
    icon: SpeakerphoneIcon,
  },
  {
    name: 'Engineering Project',
    description: 'Something really expensive that will ultimately get cancelled.',
    href: '#',
    iconColor: 'bg-purple-500',
    icon: TerminalIcon,
  },
  {
    name: 'Event',
    description: 'Like a conference all about you that no one will care about.',
    href: '#',
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
]

export default {
  components: {
    ChevronRightIcon,
  },
  setup() {
    return {
      items,
    }
  },
}
</script>