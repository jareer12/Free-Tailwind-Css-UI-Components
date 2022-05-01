<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="z-0 relative" v-slot="{ open }">
    <div class="relative z-10 bg-white shadow">
      <div class="max-w-7xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8">
        <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
          <span>Solutions</span>
          <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
        </PopoverButton>
      </div>
    </div>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
      <PopoverPanel class="absolute z-10 inset-x-0 transform shadow-lg">
        <div class="absolute inset-0 flex" aria-hidden="true">
          <div class="bg-white w-1/2" />
          <div class="bg-gray-50 w-1/2" />
        </div>
        <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12" aria-labelledby="solutions-heading">
            <h2 id="solutions-heading" class="sr-only">Solutions menu</h2>
            <div>
              <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>
              <ul role="list" class="mt-5 space-y-6">
                <li v-for="item in company" :key="item.name" class="flow-root">
                  <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span class="ml-4">{{ item.name }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Resources</h3>
              <ul role="list" class="mt-5 space-y-6">
                <li v-for="item in resources" :key="item.name" class="flow-root">
                  <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150">
                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span class="ml-4">{{ item.name }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
            <div>
              <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">From the blog</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li v-for="post in blogPosts" :key="post.id" class="flow-root">
                  <a :href="post.href" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">
                    <div class="hidden sm:block flex-shrink-0">
                      <img class="w-32 h-20 object-cover rounded-md" :src="post.imageUrl" alt="" />
                    </div>
                    <div class="min-w-0 flex-1 sm:ml-8">
                      <h4 class="text-base font-medium text-gray-900 truncate">
                        {{ post.name }}
                      </h4>
                      <p class="mt-1 text-sm text-gray-500">
                        {{ post.preview }}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-6 text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">View all posts <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/vue/outline'

const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      company,
      resources,
      blogPosts,
    }
  },
}
</script>