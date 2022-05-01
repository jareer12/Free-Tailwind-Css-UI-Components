<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <header class="relative bg-white">
      <nav aria-label="Top" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
          <div class="h-16 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex-1 flex">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="absolute bottom-0 inset-x-0 sm:static sm:flex-1 sm:self-stretch">
              <div class="border-t h-14 px-4 flex space-x-8 overflow-x-auto pb-px sm:h-full sm:border-t-0 sm:justify-center sm:overflow-visible sm:pb-0">
                <Popover v-for="(category, categoryIdx) in navigation.categories" :key="categoryIdx" class="flex" v-slot="{ open }">
                  <div class="relative flex">
                    <PopoverButton :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px']">
                      {{ category.name }}
                    </PopoverButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <PopoverPanel class="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                      <div class="relative bg-white">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div class="grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8">
                            <div class="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8">
                              <div>
                                <p id="clothing-heading" class="font-medium text-gray-900">Clothing</p>
                                <div class="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                  <ul role="list" aria-labelledby="clothing-heading" class="space-y-6 sm:space-y-4">
                                    <li v-for="item in category.clothing[0]" :key="item.name" class="flex">
                                      <a :href="item.href" class="hover:text-gray-800">
                                        {{ item.name }}
                                      </a>
                                    </li>
                                  </ul>
                                  <ul role="list" aria-label="More clothing" class="mt-6 space-y-6 sm:mt-0 sm:space-y-4">
                                    <li v-for="item in category.clothing[1]" :key="item.name" class="flex">
                                      <a :href="item.href" class="hover:text-gray-800">
                                        {{ item.name }}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:gap-x-8">
                              <div>
                                <p id="accessories-heading" class="font-medium text-gray-900">Accessories</p>
                                <ul role="list" aria-labelledby="accessories-heading" class="mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4">
                                  <li v-for="item in category.accessories" :key="item.name" class="flex">
                                    <a :href="item.href" class="hover:text-gray-800">
                                      {{ item.name }}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <p id="categories-heading" class="font-medium text-gray-900">Categories</p>
                                <ul role="list" aria-labelledby="categories-heading" class="mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4">
                                  <li v-for="item in category.categories" :key="item.name" class="flex">
                                    <a :href="item.href" class="hover:text-gray-800">
                                      {{ item.name }}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <a v-for="item in navigation.other" :key="item.name" :href="item.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ item.name }}</a>
              </div>
            </PopoverGroup>

            <div class="flex-1 flex items-center justify-end">
              <!-- Search -->
              <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <SearchIcon class="w-6 h-6" aria-hidden="true" />
              </a>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-8">
                <a href="#" class="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { SearchIcon, ShoppingBagIcon } from '@heroicons/vue/outline'

const navigation = {
  categories: [
    {
      name: 'Women',
      clothing: [
        [
          { name: 'Tops', href: '#' },
          { name: 'Dresses', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'Denim', href: '#' },
          { name: 'Sweaters', href: '#' },
          { name: 'T-Shirts', href: '#' },
        ],
        [
          { name: 'Jackets', href: '#' },
          { name: 'Activewear', href: '#' },
          { name: 'Shorts', href: '#' },
          { name: 'Swimwear', href: '#' },
          { name: 'Browse All', href: '#' },
        ],
      ],
      accessories: [
        { name: 'Shoes', href: '#' },
        { name: 'Jewelry', href: '#' },
        { name: 'Handbags', href: '#' },
        { name: 'Socks', href: '#' },
        { name: 'Hats', href: '#' },
        { name: 'Browse All', href: '#' },
      ],
      categories: [
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
      ],
    },
    {
      name: 'Men',
      clothing: [
        [
          { name: 'Dress Shirts', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'Jackets', href: '#' },
          { name: 'T-Shirts', href: '#' },
          { name: 'Jeans', href: '#' },
          { name: 'Hoodies', href: '#' },
        ],
        [
          { name: 'Vests', href: '#' },
          { name: 'Kilts', href: '#' },
          { name: 'Outdoors', href: '#' },
          { name: 'Capes', href: '#' },
          { name: 'Browse All', href: '#' },
        ],
      ],
      accessories: [
        { name: 'Watches', href: '#' },
        { name: 'Boots', href: '#' },
        { name: 'Fanny Packs', href: '#' },
        { name: 'Sunglasses', href: '#' },
        { name: 'Browse All', href: '#' },
      ],
      categories: [
        { name: 'Just Added', href: '#' },
        { name: 'Clearance', href: '#' },
        { name: 'Graphic Tees', href: '#' },
      ],
    },
  ],
  other: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    SearchIcon,
    ShoppingBagIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>