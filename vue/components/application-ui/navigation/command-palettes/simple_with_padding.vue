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
        <Combobox as="div" class="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" @update:modelValue="onSelect">
          <ComboboxInput class="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:ring-0" placeholder="Search..." @change="query = $event.target.value" />

          <ComboboxOptions v-if="filteredPeople.length > 0" static class="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
            <ComboboxOption v-for="person in filteredPeople" :key="person.id" :value="person" as="template" v-slot="{ active }">
              <li :class="['cursor-default select-none rounded-md px-4 py-2', active && 'bg-indigo-600 text-white']">
                {{ person.name }}
              </li>
            </ComboboxOption>
          </ComboboxOptions>

          <div v-if="query !== '' && filteredPeople.length === 0" class="py-14 px-4 text-center sm:px-14">
            <UsersIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
            <p class="mt-4 text-sm text-gray-900">No people found using that search term.</p>
          </div>
        </Combobox>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, ref } from 'vue'
import { UsersIcon } from '@heroicons/vue/outline'
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

const people = [
  { id: 1, name: 'Leslie Alexander', url: '#' },
  // More people...
]

export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogOverlay,
    UsersIcon,
    TransitionChild,
    TransitionRoot,
  },
  setup() {
    const open = ref(true)
    const query = ref('')
    const filteredPeople = computed(() =>
      query.value === ''
        ? []
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.value.toLowerCase())
          })
    )

    return {
      open,
      query,
      filteredPeople,
      onSelect(person) {
        window.location = person.url
      },
    }
  },
}
</script>