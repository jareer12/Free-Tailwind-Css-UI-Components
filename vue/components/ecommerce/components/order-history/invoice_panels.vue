<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto sm:px-2 lg:px-8">
        <div class="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
          <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
          <p class="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
        </div>
      </div>

      <div class="mt-16">
        <h2 class="sr-only">Recent orders</h2>
        <div class="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div class="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div v-for="order in orders" :key="order.number" class="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border">
              <h3 class="sr-only">
                Order placed on <time :datetime="order.createdDatetime">{{ order.createdDate }}</time>
              </h3>

              <div class="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                <dl class="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                  <div>
                    <dt class="font-medium text-gray-900">Order number</dt>
                    <dd class="mt-1 text-gray-500">
                      {{ order.number }}
                    </dd>
                  </div>
                  <div class="hidden sm:block">
                    <dt class="font-medium text-gray-900">Date placed</dt>
                    <dd class="mt-1 text-gray-500">
                      <time :datetime="order.createdDatetime">{{ order.createdDate }}</time>
                    </dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-900">Total amount</dt>
                    <dd class="mt-1 font-medium text-gray-900">
                      {{ order.total }}
                    </dd>
                  </div>
                </dl>

                <Menu as="div" class="relative flex justify-end lg:hidden">
                  <div class="flex items-center">
                    <MenuButton class="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Options for order {{ order.number }}</span>
                      <DotsVerticalIcon class="w-6 h-6" aria-hidden="true" />
                    </MenuButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <a :href="order.href" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"> View </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <a :href="order.invoiceHref" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"> Invoice </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>

                <div class="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                  <a :href="order.href" class="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span>View Order</span>
                    <span class="sr-only">{{ order.number }}</span>
                  </a>
                  <a :href="order.invoiceHref" class="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span>View Invoice</span>
                    <span class="sr-only">for order {{ order.number }}</span>
                  </a>
                </div>
              </div>

              <!-- Products -->
              <h4 class="sr-only">Items</h4>
              <ul role="list" class="divide-y divide-gray-200">
                <li v-for="product in order.products" :key="product.id" class="p-4 sm:p-6">
                  <div class="flex items-center sm:items-start">
                    <div class="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                      <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="flex-1 ml-6 text-sm">
                      <div class="font-medium text-gray-900 sm:flex sm:justify-between">
                        <h5>
                          {{ product.name }}
                        </h5>
                        <p class="mt-2 sm:mt-0">
                          {{ product.price }}
                        </p>
                      </div>
                      <p class="hidden text-gray-500 sm:block sm:mt-2">
                        {{ product.description }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-6 sm:flex sm:justify-between">
                    <div class="flex items-center">
                      <CheckCircleIcon class="w-5 h-5 text-green-500" aria-hidden="true" />
                      <p class="ml-2 text-sm font-medium text-gray-500">
                        Delivered on <time :datetime="order.deliveredDatetime">{{ order.deliveredDate }}</time>
                      </p>
                    </div>

                    <div class="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                      <div class="flex-1 flex justify-center">
                        <a :href="product.href" class="text-indigo-600 whitespace-nowrap hover:text-indigo-500">View product</a>
                      </div>
                      <div class="flex-1 pl-4 flex justify-center">
                        <a href="#" class="text-indigo-600 whitespace-nowrap hover:text-indigo-500">Buy again</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { DotsVerticalIcon } from '@heroicons/vue/outline'
import { CheckCircleIcon } from '@heroicons/vue/solid'

const orders = [
  {
    number: 'WU88191111',
    href: '#',
    invoiceHref: '#',
    createdDate: 'Jul 6, 2021',
    createdDatetime: '2021-07-06',
    deliveredDate: 'July 12, 2021',
    deliveredDatetime: '2021-07-12',
    total: '$160.00',
    products: [
      {
        id: 1,
        name: 'Micro Backpack',
        description:
          'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
        href: '#',
        price: '$70.00',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
        imageAlt:
          'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
      },
      // More products...
    ],
  },
  // More orders...
]

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    CheckCircleIcon,
    DotsVerticalIcon,
  },
  setup() {
    return {
      orders,
    }
  },
}
</script>