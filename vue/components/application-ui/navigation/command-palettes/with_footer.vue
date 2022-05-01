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
  <TransitionRoot :show="open" as="template" @after-leave="rawQuery = ''">
    <Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
      </TransitionChild>

      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
        <Combobox as="div" class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" @update:modelValue="onSelect">
          <div class="relative">
            <SearchIcon class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" aria-hidden="true" />
            <ComboboxInput class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0" placeholder="Search..." @change="rawQuery = $event.target.value" />
          </div>

          <ComboboxOptions v-if="filteredProjects.length > 0 || filteredUsers.length > 0" static class="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2">
            <li v-if="filteredProjects.length > 0">
              <h2 class="text-xs font-semibold text-gray-900">Projects</h2>
              <ul class="-mx-4 mt-2 text-sm text-gray-700">
                <ComboboxOption v-for="project in filteredProjects" :key="project.id" :value="project" as="template" v-slot="{ active }">
                  <li :class="['flex cursor-default select-none items-center px-4 py-2', active && 'bg-indigo-600 text-white']">
                    <FolderIcon :class="['h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400']" aria-hidden="true" />
                    <span class="ml-3 flex-auto truncate">{{ project.name }}</span>
                  </li>
                </ComboboxOption>
              </ul>
            </li>
            <li v-if="filteredUsers.length > 0">
              <h2 class="text-xs font-semibold text-gray-900">Users</h2>
              <ul class="-mx-4 mt-2 text-sm text-gray-700">
                <ComboboxOption v-for="user in filteredUsers" :key="user.id" :value="user" as="template" v-slot="{ active }">
                  <li :class="['flex cursor-default select-none items-center px-4 py-2', active && 'bg-indigo-600 text-white']">
                    <img :src="user.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full" />
                    <span class="ml-3 flex-auto truncate">{{ user.name }}</span>
                  </li>
                </ComboboxOption>
              </ul>
            </li>
          </ComboboxOptions>

          <div v-if="rawQuery === '?'" class="py-14 px-6 text-center text-sm sm:px-14">
            <SupportIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
            <p class="mt-4 font-semibold text-gray-900">Help with searching</p>
            <p class="mt-2 text-gray-500">Use this tool to quickly search for users and projects across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just users or projects.</p>
          </div>

          <div v-if="query !== '' && rawQuery !== '?' && filteredProjects.length === 0 && filteredUsers.length === 0" class="py-14 px-6 text-center text-sm sm:px-14">
            <ExclamationIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
            <p class="mt-4 font-semibold text-gray-900">No results found</p>
            <p class="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
          </div>

          <div class="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700">
            Type
            <kbd :class="['mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2', rawQuery.startsWith('#') ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900']">#</kbd>
            <span class="sm:hidden">for projects,</span>
            <span class="hidden sm:inline">to access projects,</span>
            <kbd :class="['mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2', rawQuery.startsWith('>') ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900']">&gt;</kbd>
            for users, and
            <kbd :class="['mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2', rawQuery === '?' ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900']">?</kbd>
            for help.
          </div>
        </Combobox>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { ExclamationIcon, FolderIcon, SupportIcon } from '@heroicons/vue/outline'
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
  { id: 1, name: 'Workflow Inc. / Website Redesign', category: 'Projects', url: '#' },
  // More projects...
]

const users = [
  {
    id: 1,
    name: 'Leslie Alexander',
    url: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More users...
]

export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogOverlay,
    ExclamationIcon,
    FolderIcon,
    SearchIcon,
    SupportIcon,
    TransitionChild,
    TransitionRoot,
  },
  setup() {
    const open = ref(true)
    const rawQuery = ref('')
    const query = computed(() => rawQuery.value.toLowerCase().replace(/^[#>]/, ''))
    const filteredProjects = computed(() =>
      rawQuery.value === '#'
        ? projects
        : query.value === '' || rawQuery.value.startsWith('>')
        ? []
        : projects.filter((project) => project.name.toLowerCase().includes(query.value))
    )
    const filteredUsers = computed(() =>
      rawQuery.value === '>'
        ? users
        : query.value === '' || rawQuery.value.startsWith('#')
        ? []
        : users.filter((user) => user.name.toLowerCase().includes(query.value))
    )

    return {
      open,
      rawQuery,
      query,
      filteredProjects,
      filteredUsers,
      onSelect(item) {
        window.location = item.url
      },
    }
  },
}
</script>