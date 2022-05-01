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
          sky: colors.sky,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <Disclosure as="nav" class="bg-sky-500" aria-label="Global" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-white.svg" alt="Workflow" />
          </div>
          <div class="hidden lg:ml-8 lg:flex lg:space-x-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-sky-400">
              {{ item.name }}
            </a>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative text-white focus-within:text-gray-400">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              </div>
              <input id="search" name="search" class="block w-full bg-sky-400 border-transparent py-2 pl-10 pr-3 text-base leading-5 placeholder-white focus:outline-none focus:bg-white focus:ring-0 focus:border-white focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm rounded-md" placeholder="Search" type="search" />
            </div>
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-sky-200 hover:text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <button type="button" class="flex-shrink-0 bg-sky-500 p-1 text-sky-200 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white">
            <span class="sr-only">Notificaitons</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-4 relative flex-shrink-0">
            <div>
              <MenuButton class="bg-sky-500 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="pt-2 pb-3 px-2 space-y-1">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" class="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-sky-400">{{ item.name }}</DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-sky-500">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">{{ user.name }}</div>
            <div class="text-sm font-medium text-sky-200">{{ user.email }}</div>
          </div>
          <button type="button" class="ml-auto flex-shrink-0 bg-sky-500 rounded-full p-1 text-sky-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 px-2">
          <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:text-white hover:bg-sky-400">{{ item.name }}</DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <!-- Breadcrumb -->
  <nav class="hidden bg-white border-b border-gray-200 lg:flex" aria-label="Breadcrumb">
    <ol role="list" class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
      <li class="flex">
        <div class="flex items-center">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li v-for="item in breadcrumbs" :key="item.name" class="flex">
        <div class="flex items-center">
          <svg class="flex-shrink-0 w-6 h-full text-gray-200" preserveAspectRatio="none" viewBox="0 0 24 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a :href="item.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
        </div>
      </li>
    </ol>
  </nav>

  <main class="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
    <form>
      <div class="space-y-6">
        <div>
          <h1 class="text-lg leading-6 font-medium text-gray-900">Project Settings</h1>
          <p class="mt-1 text-sm text-gray-500">Let’s get started by filling in the information below to create your new project.</p>
        </div>

        <div>
          <label for="project-name" class="block text-sm font-medium text-gray-700"> Project Name </label>
          <div class="mt-1">
            <input type="text" name="project-name" id="project-name" class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md" value="Project Nero" />
          </div>
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700"> Description </label>
          <div class="mt-1">
            <textarea id="description" name="description" rows="3" class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border border-gray-300 rounded-md" />
          </div>
        </div>

        <div class="space-y-2">
          <div class="space-y-1">
            <label for="add-team-members" class="block text-sm font-medium text-gray-700"> Add Team Members </label>
            <p id="add-team-members-helper" class="sr-only">Search by email address</p>
            <div class="flex">
              <div class="flex-grow">
                <input type="text" name="add-team-members" id="add-team-members" class="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md" placeholder="Email address" aria-describedby="add-team-members-helper" />
              </div>
              <span class="ml-3">
                <button type="button" class="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                  <PlusIcon class="-ml-2 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span>Add</span>
                </button>
              </span>
            </div>
          </div>

          <div class="border-b border-gray-200">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="person in team" :key="person.email" class="py-4 flex">
                <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
                <div class="ml-3 flex flex-col">
                  <span class="text-sm font-medium text-gray-900">{{ person.name }}</span>
                  <span class="text-sm text-gray-500">{{ person.email }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <RadioGroup v-model="selected">
          <RadioGroupLabel class="text-sm font-medium text-gray-900"> Privacy </RadioGroupLabel>

          <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
            <RadioGroupOption as="template" v-for="(setting, settingIdx) in settings" :key="setting.name" :value="setting" v-slot="{ checked, active }">
              <div :class="[settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-sky-50 border-sky-200 z-10' : 'border-gray-200', 'relative border p-4 flex cursor-pointer focus:outline-none']">
                <span :class="[checked ? 'bg-sky-600 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-sky-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center']" aria-hidden="true">
                  <span class="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div class="ml-3 flex flex-col">
                  <RadioGroupLabel as="span" :class="[checked ? 'text-sky-900' : 'text-gray-900', 'block text-sm font-medium']">
                    {{ setting.name }}
                  </RadioGroupLabel>
                  <RadioGroupDescription as="span" :class="[checked ? 'text-sky-700' : 'text-gray-500', 'block text-sm']">
                    {{ setting.description }}
                  </RadioGroupDescription>
                </div>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>

        <div>
          <label for="tags" class="block text-sm font-medium text-gray-700"> Tags </label>
          <input type="text" name="tags" id="tags" class="mt-1 block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div class="flex justify-end">
          <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Cancel</button>
          <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">Create this project</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import { HomeIcon, PlusIcon, SearchIcon } from '@heroicons/vue/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

const user = {
  name: 'Floyd Miles',
  email: 'floydmiles@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const breadcrumbs = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const team = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bessie Richards',
    email: 'bessie.richards@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Black',
    email: 'floyd.black@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link' },
  { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
  { name: 'Private to you', description: 'You are the only one able to access this project' },
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    BellIcon,
    HomeIcon,
    MenuIcon,
    PlusIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const selected = ref(settings[0])

    return {
      user,
      navigation,
      breadcrumbs,
      userNavigation,
      team,
      settings,
      selected,
    }
  },
}
</script>