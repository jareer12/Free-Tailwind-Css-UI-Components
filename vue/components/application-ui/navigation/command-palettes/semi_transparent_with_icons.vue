<!--
  This example requires Tailwind CSS v3.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''">
    <Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
      </TransitionChild>

      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
        <Combobox as="div" class="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all" @update:modelValue="onSelect">
          <div class="relative">
            <SearchIcon class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40" aria-hidden="true" />
            <ComboboxInput class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:ring-0" placeholder="Search..." @change="query = $event.target.value" />
          </div>

          <ComboboxOptions v-if="query === '' || filteredProjects.length > 0" static class="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto">
            <li class="p-2">
              <h2 v-if="query === ''" class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-900">Recent searches</h2>
              <ul class="text-sm text-gray-700">
                <ComboboxOption v-for="project in query === '' ? recent : filteredProjects" :key="project.id" :value="project" as="template" v-slot="{ active }">
                  <li :class="['flex cursor-default select-none items-center rounded-md px-3 py-2', active && 'bg-gray-900 bg-opacity-5 text-gray-900']">
                    <FolderIcon :class="['h-6 w-6 flex-none text-gray-900 text-opacity-40', active && 'text-opacity-100']" aria-hidden="true" />
                    <span class="ml-3 flex-auto truncate">{{ project.name }}</span>
                    <span v-if="active" class="ml-3 flex-none text-gray-500">Jump to...</span>
                  </li>
                </ComboboxOption>
              </ul>
            </li>
            <li v-if="query === ''" class="p-2">
              <h2 class="sr-only">Quick actions</h2>
              <ul class="text-sm text-gray-700">
                <ComboboxOption v-for="action in quickActions" :key="action.shortcut" :value="action" as="template" v-slot="{ active }">
                  <li :class="['flex cursor-default select-none items-center rounded-md px-3 py-2', active && 'bg-gray-900 bg-opacity-5 text-gray-900']">
                    <component :is="action.icon" :class="['h-6 w-6 flex-none text-gray-900 text-opacity-40', active && 'text-opacity-100']" aria-hidden="true" />
                    <span class="ml-3 flex-auto truncate">{{ action.name }}</span>
                    <span class="ml-3 flex-none text-xs font-semibold text-gray-500">
                      <kbd class="font-sans">⌘</kbd>
                      <kbd class="font-sans">{{ action.shortcut }}</kbd>
                    </span>
                  </li>
                </ComboboxOption>
              </ul>
            </li>
          </ComboboxOptions>

          <div v-if="query !== '' && filteredProjects.length === 0" class="py-14 px-6 text-center sm:px-14">
            <FolderIcon class="mx-auto h-6 w-6 text-gray-900 text-opacity-40" aria-hidden="true" />
            <p class="mt-4 text-sm text-gray-900">We couldn't find any projects with that term. Please try again.</p>
          </div>
        </Combobox>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { DocumentAddIcon, FolderIcon, FolderAddIcon, HashtagIcon, TagIcon } from '@heroicons/vue/outline'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const projects = [
  { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
  // More projects...
]
const recent = [projects[0]]
const quickActions = [
  { name: 'Add new file...', icon: DocumentAddIcon, shortcut: 'N', url: '#' },
  { name: 'Add new folder...', icon: FolderAddIcon, shortcut: 'F', url: '#' },
  { name: 'Add hashtag...', icon: HashtagIcon, shortcut: 'H', url: '#' },
  { name: 'Add label...', icon: TagIcon, shortcut: 'L', url: '#' },
]

export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogOverlay,
    FolderIcon,
    SearchIcon,
    TransitionChild,
    TransitionRoot,
  },
  setup() {
    const open = ref(true)
    const query = ref('')
    const filteredProjects = computed(() =>
      query.value === ''
        ? []
        : projects.filter((project) => {
            return project.name.toLowerCase().includes(query.value.toLowerCase())
          })
    )

    return {
      open,
      query,
      recent,
      quickActions,
      filteredProjects,
      onSelect(item) {
        window.location = item.url
      },
    }
  },
}
</script>