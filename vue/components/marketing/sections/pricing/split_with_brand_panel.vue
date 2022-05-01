<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white">
    <div class="absolute inset-0" aria-hidden="true">
      <div class="absolute inset-y-0 right-0 w-1/2 bg-indigo-700" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
      <div class="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
        <div class="max-w-lg mx-auto lg:mx-0">
          <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Full-featured</h2>
          <p class="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Everything you need to talk with your customers</p>
          <dl class="mt-12 space-y-10">
            <div v-for="feature in features" :key="feature.name" class="relative">
              <dt>
                <div class="absolute h-12 w-12 flex items-center justify-center bg-indigo-500 rounded-md">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-indigo-700 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
        <div class="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
          <div>
            <h2 class="sr-only">Price</h2>
            <p class="relative grid grid-cols-2">
              <span class="flex flex-col text-center">
                <span class="text-5xl font-extrabold text-white tracking-tight">$99</span>
                <span class="mt-2 text-base font-medium text-indigo-200">Setup fee</span>
                <span class="sr-only">plus</span>
              </span>
              <span class="pointer-events-none absolute h-12 w-full flex items-center justify-center" aria-hidden="true">
                <PlusIcon class="h-6 w-6 text-indigo-300" aria-hidden="true" />
              </span>
              <span>
                <span class="flex flex-col text-center">
                  <span class="text-5xl font-extrabold text-white tracking-tight">$4</span>
                  <span class="mt-2 text-base font-medium text-indigo-200">Per month</span>
                </span>
              </span>
            </p>
          </div>
          <ul role="list" class="rounded overflow-hidden grid gap-px sm:grid-cols-2">
            <li v-for="item in checklist" :key="item" class="bg-indigo-800 bg-opacity-50 py-4 px-4 flex items-center space-x-3 text-base text-white">
              <CheckIcon class="h-6 w-6 text-indigo-300" aria-hidden="true" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <a href="#" class="bg-white border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-indigo-600 hover:bg-indigo-50 md:px-10"> Get started today </a>
          <a href="#" class="block text-center text-base font-medium text-indigo-200 hover:text-white"> Try Workflow Lite for free </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarIcon, CheckIcon, PlusIcon, UsersIcon, ViewBoardsIcon, ViewListIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'List view',
    icon: ViewListIcon,
    description:
      'Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.',
  },
  {
    name: 'Boards',
    icon: ViewBoardsIcon,
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
  },
  {
    name: 'Calendar',
    icon: CalendarIcon,
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
  },
  {
    name: 'Teams',
    icon: UsersIcon,
    description:
      'Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.',
  },
]
const checklist = [
  'Unlimited projects',
  'No per user fees',
  'Unlimited storage',
  '24/7 support',
  'Cancel any time',
  '14 days free',
]

export default {
  components: {
    CheckIcon,
    PlusIcon,
  },
  setup() {
    return {
      features,
      checklist,
    }
  },
}
</script>