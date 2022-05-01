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
        <Combobox as="div" class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" @update:modelValue="onSelect">
          <div class="relative">
            <SearchIcon class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" aria-hidden="true" />
            <ComboboxInput class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0" placeholder="Search..." @change="query = $event.target.value" />
          </div>

          <ComboboxOptions v-if="filteredItems.length > 0" static class="max-h-96 scroll-py-3 overflow-y-auto p-3">
            <ComboboxOption v-for="item in filteredItems" :key="item.id" :value="item" as="template" v-slot="{ active }">
              <li :class="['flex cursor-default select-none rounded-xl p-3', active && 'bg-gray-100']">
                <div :class="['flex h-10 w-10 flex-none items-center justify-center rounded-full', active ? 'bg-gray-700' : 'bg-gray-500']">
                  <img :src="item.imageUrl" alt="" class="h-8 w-8" />
                </div>
                <div class="ml-4 flex-auto">
                  <p :class="['text-sm font-medium', active ? 'text-gray-900' : 'text-gray-700']">
                    {{ item.name }}
                  </p>
                  <p :class="['text-sm', active ? 'text-gray-700' : 'text-gray-500']">
                    {{ item.description }}
                  </p>
                </div>
              </li>
            </ComboboxOption>
          </ComboboxOptions>

          <div v-if="query !== '' && filteredItems.length === 0" class="py-14 px-6 text-center text-sm sm:px-14">
            <ExclamationCircleIcon type="outline" name="exclamation-circle" class="mx-auto h-6 w-6 text-gray-400" />
            <p class="mt-4 font-semibold text-gray-900">No results found</p>
            <p class="mt-2 text-gray-500">No components found for this search term. Please try again.</p>
          </div>
        </Combobox>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { ExclamationCircleIcon } from '@heroicons/vue/outline'
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

const items = [
  {
    id: 1,
    name: 'Sliders',
    description: 'A collection of sliders for selecting a range of values.',
    url: '#',
    imageUrl: 'https://tailwindui.com/img/component-images/icon-sliders.png',
  },
  // More items...
]

export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogOverlay,
    SearchIcon,
    TransitionChild,
    TransitionRoot,
    ExclamationCircleIcon,
  },
  setup() {
    const open = ref(true)
    const query = ref('')
    const filteredItems = computed(() =>
      query.value === ''
        ? []
        : items.filter((item) => {
            return item.name.toLowerCase().includes(query.value.toLowerCase())
          })
    )

    return {
      open,
      query,
      filteredItems,
      onSelect(item) {
        window.location = item.url
      },
    }
  },
}
</script>