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
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg" alt="Workflow" />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <div class="space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
                    <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-4 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
                <div class="mt-10">
                  <p class="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Projects</p>
                  <div class="mt-2 space-y-1">
                    <a v-for="project in projects" :key="project.id" :href="project.href" class="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 text-base font-medium rounded-md">
                      <span class="truncate">{{ project.name }}</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-64 lg:fixed lg:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0">
        <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-rose-500-mark-white-text.svg" alt="Workflow" />
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto bg-gray-800">
          <nav class="flex-1 px-2 py-4">
            <div class="space-y-1">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                {{ item.name }}
              </a>
            </div>
            <div class="mt-10">
              <p class="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Projects</p>
              <div class="mt-2 space-y-1">
                <a v-for="project in projects" :key="project.id" :href="project.href" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700">
                  <span class="truncate">
                    {{ project.name }}
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="lg:pl-64 flex flex-col w-0 flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
        <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex lg:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search" />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center lg:ml-6">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Create</button>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-8 xl:py-10">
          <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
            <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
              <div>
                <div>
                  <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                    <div>
                      <h1 class="text-2xl font-bold text-gray-900">ARIA attribute misspelled</h1>
                      <p class="mt-2 text-sm text-gray-500">
                        #400 opened by
                        {{ ' ' }}
                        <a href="#" class="font-medium text-gray-900">Hilary Mahy</a>
                        {{ ' ' }}
                        in
                        {{ ' ' }}
                        <a href="#" class="font-medium text-gray-900">Customer Portal</a>
                      </p>
                    </div>
                    <div class="mt-4 flex space-x-3 md:mt-0">
                      <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <PencilIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Edit</span>
                      </button>
                      <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <BellIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </div>
                  <aside class="mt-8 xl:hidden">
                    <h2 class="sr-only">Details</h2>
                    <div class="space-y-5">
                      <div class="flex items-center space-x-2">
                        <LockOpenIcon class="h-5 w-5 text-green-500" aria-hidden="true" />
                        <span class="text-green-700 text-sm font-medium">Open Issue</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span class="text-gray-900 text-sm font-medium">4 comments</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span class="text-gray-900 text-sm font-medium">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
                      </div>
                    </div>
                    <div class="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                      <div>
                        <h2 class="text-sm font-medium text-gray-500">Assignees</h2>
                        <ul role="list" class="mt-3 space-y-3">
                          <li class="flex justify-start">
                            <a href="#" class="flex items-center space-x-3">
                              <div class="flex-shrink-0">
                                <img class="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                              </div>
                              <div class="text-sm font-medium text-gray-900">Eduardo Benz</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                        <ul role="list" class="mt-2 leading-8">
                          <li class="inline">
                            <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                              <div class="absolute flex-shrink-0 flex items-center justify-center">
                                <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                              </div>
                              <div class="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                            </a>
                            {{ ' ' }}
                          </li>
                          <li class="inline">
                            <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                              <div class="absolute flex-shrink-0 flex items-center justify-center">
                                <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                              </div>
                              <div class="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                            </a>
                            {{ ' ' }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  <div class="py-3 xl:pt-6 xl:pb-0">
                    <h2 class="sr-only">Description</h2>
                    <div class="prose max-w-none">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque similique id tempora molestiae deserunt at suscipit, dolor voluptatem, numquam, harum consequatur laboriosam voluptas tempore aut voluptatum alias?</p>
                      <ul role="list">
                        <li>Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate fermentum id facilisis nam pharetra. Aliquet leo tellus.</li>
                        <li>Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.</li>
                        <li>Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut tellus in sed dignissim.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <section aria-labelledby="activity-title" class="mt-8 xl:mt-10">
                <div>
                  <div class="divide-y divide-gray-200">
                    <div class="pb-4">
                      <h2 id="activity-title" class="text-lg font-medium text-gray-900">Activity</h2>
                    </div>
                    <div class="pt-6">
                      <!-- Activity feed-->
                      <div class="flow-root">
                        <ul role="list" class="-mb-8">
                          <li v-for="(item, itemIdx) in activity" :key="item.id">
                            <div class="relative pb-8">
                              <span v-if="itemIdx !== activity.length - 1" class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                              <div class="relative flex items-start space-x-3">
                                <template v-if="item.type === 'comment'">
                                  <div class="relative">
                                    <img class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" :src="item.imageUrl" alt="" />

                                    <span class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                                      <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                  </div>
                                  <div class="min-w-0 flex-1">
                                    <div>
                                      <div class="text-sm">
                                        <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                      </div>
                                      <p class="mt-0.5 text-sm text-gray-500">Commented {{ item.date }}</p>
                                    </div>
                                    <div class="mt-2 text-sm text-gray-700">
                                      <p>
                                        {{ item.comment }}
                                      </p>
                                    </div>
                                  </div>
                                </template>
                                <template v-else-if="item.type === 'assignment'" condition="item.type === 'assignment'">
                                  <div>
                                    <div class="relative px-1">
                                      <div class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                        <UserCircleIconSolid class="h-5 w-5 text-gray-500" aria-hidden="true" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="min-w-0 flex-1 py-1.5">
                                    <div class="text-sm text-gray-500">
                                      <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                      {{ ' ' }}
                                      assigned
                                      {{ ' ' }}
                                      <a :href="item.assigned.href" class="font-medium text-gray-900">{{ item.assigned.name }}</a>
                                      {{ ' ' }}
                                      <span class="whitespace-nowrap">{{ item.date }}</span>
                                    </div>
                                  </div>
                                </template>
                                <template v-else>
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
                                        <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                        {{ ' ' }}
                                        added tags
                                      </span>
                                      {{ ' ' }}
                                      <span class="mr-0.5">
                                        <template v-for="tag in item.tags" :key="tag.name">
                                          <a :href="tag.href" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                            <span class="absolute flex-shrink-0 flex items-center justify-center">
                                              <span :class="[tag.color, 'h-1.5 w-1.5 rounded-full']" aria-hidden="true" />
                                            </span>
                                            <span class="ml-3.5 font-medium text-gray-900">{{ tag.name }}</span>
                                          </a>
                                          {{ ' ' }}
                                        </template>
                                      </span>
                                      <span class="whitespace-nowrap">{{ item.date }}</span>
                                    </div>
                                  </div>
                                </template>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6">
                        <div class="flex space-x-3">
                          <div class="flex-shrink-0">
                            <div class="relative">
                              <img class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />

                              <span class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                                <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                              </span>
                            </div>
                          </div>
                          <div class="min-w-0 flex-1">
                            <form action="#">
                              <div>
                                <label for="comment" class="sr-only">Comment</label>
                                <textarea id="comment" name="comment" rows="3" class="shadow-sm block w-full focus:ring-gray-900 focus:border-gray-900 sm:text-sm border border-gray-300 rounded-md" placeholder="Leave a comment" />
                              </div>
                              <div class="mt-6 flex items-center justify-end space-x-4">
                                <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                  <CheckCircleIcon class="-ml-1 mr-2 h-5 w-5 text-green-500" aria-hidden="true" />
                                  <span>Close issue</span>
                                </button>
                                <button type="submit" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Comment</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <aside class="hidden xl:block xl:pl-8">
              <h2 class="sr-only">Details</h2>
              <div class="space-y-5">
                <div class="flex items-center space-x-2">
                  <LockOpenIcon class="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span class="text-green-700 text-sm font-medium">Open Issue</span>
                </div>
                <div class="flex items-center space-x-2">
                  <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="text-gray-900 text-sm font-medium">4 comments</span>
                </div>
                <div class="flex items-center space-x-2">
                  <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="text-gray-900 text-sm font-medium">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-200 py-6 space-y-8">
                <div>
                  <h2 class="text-sm font-medium text-gray-500">Assignees</h2>
                  <ul role="list" class="mt-3 space-y-3">
                    <li class="flex justify-start">
                      <a href="#" class="flex items-center space-x-3">
                        <div class="flex-shrink-0">
                          <img class="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                        </div>
                        <div class="text-sm font-medium text-gray-900">Eduardo Benz</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                  <ul role="list" class="mt-2 leading-8">
                    <li class="inline">
                      <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                        <div class="absolute flex-shrink-0 flex items-center justify-center">
                          <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                        </div>
                        <div class="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                      </a>
                      {{ ' ' }}
                    </li>
                    <li class="inline">
                      <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                        <div class="absolute flex-shrink-0 flex items-center justify-center">
                          <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                        </div>
                        <div class="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                      </a>
                      {{ ' ' }}
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  ArchiveIcon,
  ClockIcon,
  HomeIcon,
  MenuAlt2Icon,
  UserCircleIcon as UserCircleIconOutline,
  ViewListIcon,
  XIcon,
} from '@heroicons/vue/outline'
import {
  BellIcon,
  CalendarIcon,
  ChatAltIcon,
  CheckCircleIcon,
  LockOpenIcon,
  PencilIcon,
  SearchIcon,
  TagIcon,
  UserCircleIcon as UserCircleIconSolid,
} from '@heroicons/vue/solid'

const navigation = [
  { name: 'All Issues', href: '#', icon: HomeIcon, current: true },
  { name: 'My Issues', href: '#', icon: ViewListIcon, current: false },
  { name: 'Assigned', href: '#', icon: UserCircleIconOutline, current: false },
  { name: 'Closed', href: '#', icon: ArchiveIcon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const projects = [
  { id: 1, name: 'GraphQL API', href: '#' },
  { id: 2, name: 'iOS App', href: '#' },
  { id: 3, name: 'Marketing Site Redesign', href: '#' },
  { id: 4, name: 'Customer Portal', href: '#' },
]
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
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    CalendarIcon,
    ChatAltIcon,
    CheckCircleIcon,
    LockOpenIcon,
    MenuAlt2Icon,
    PencilIcon,
    SearchIcon,
    TagIcon,
    UserCircleIconSolid,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      navigation,
      projects,
      activity,
      sidebarOpen,
    }
  },
}
</script>