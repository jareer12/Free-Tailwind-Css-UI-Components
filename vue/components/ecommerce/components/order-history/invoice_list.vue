<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-4xl mx-auto py-16 sm:px-6 sm:py-24">
      <div class="px-4 sm:px-0">
        <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
        <p class="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and download invoices.</p>
      </div>

      <div class="mt-16">
        <h2 class="sr-only">Recent orders</h2>

        <div class="space-y-16 sm:space-y-24">
          <div v-for="order in orders" :key="order.number">
            <h3 class="sr-only">
              Order placed on <time :datetime="order.datetime">{{ order.date }}</time>
            </h3>

            <div class="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
              <dl class="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                <div class="flex justify-between md:block">
                  <dt class="font-medium text-gray-900">Order number</dt>
                  <dd class="md:mt-1">
                    {{ order.number }}
                  </dd>
                </div>
                <div class="flex justify-between pt-4 md:block md:pt-0">
                  <dt class="font-medium text-gray-900">Date placed</dt>
                  <dd class="md:mt-1">
                    <time :datetime="order.datetime">{{ order.date }}</time>
                  </dd>
                </div>
                <div class="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
                  <dt>Total amount</dt>
                  <dd class="md:mt-1">
                    {{ order.total }}
                  </dd>
                </div>
              </dl>
              <div class="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                <a :href="order.href" class="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto">
                  View Order
                  <span class="sr-only">{{ order.number }}</span>
                </a>
                <a :href="order.invoiceHref" class="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto">
                  View Invoice
                  <span class="sr-only">for order {{ order.number }}</span>
                </a>
              </div>
            </div>

            <div class="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
              <div class="-my-6 divide-y divide-gray-200 sm:-my-10">
                <div v-for="product in order.products" :key="product.id" class="flex py-6 sm:py-10">
                  <div class="min-w-0 flex-1 lg:flex lg:flex-col">
                    <div class="lg:flex-1">
                      <div class="sm:flex">
                        <div>
                          <h4 class="font-medium text-gray-900">{{ product.name }}</h4>
                          <p class="hidden mt-2 text-sm text-gray-500 sm:block">{{ product.description }}</p>
                        </div>
                        <p class="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">{{ product.price }}</p>
                      </div>
                      <div class="mt-2 flex text-sm font-medium sm:mt-4">
                        <a :href="product.href" class="text-indigo-600 hover:text-indigo-500">View Product</a>
                        <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                          <a href="#" class="text-indigo-600 hover:text-indigo-500">Buy Again</a>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 font-medium">
                      <div v-if="product.status === 'delivered'" class="flex space-x-2">
                        <CheckIcon class="flex-none w-6 h-6 text-green-500" aria-hidden="true" />
                        <p>
                          Delivered<span class="hidden sm:inline">
                            on <time :datetime="product.datetime">{{ product.date }}</time></span
                          >
                        </p>
                      </div>
                      <p v-else-if="product.status === 'out-for-delivery'">Out for delivery</p>
                      <p v-else-if="product.status === 'cancelled'" class="text-gray-500">Cancelled</p>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'

const orders = [
  {
    number: 'WU88191111',
    date: 'January 22, 2021',
    datetime: '2021-01-22',
    href: '#',
    invoiceHref: '#',
    total: '$302.00',
    products: [
      {
        id: 1,
        name: 'Nomad Tumbler',
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: '#',
        price: '$35.00',
        status: 'out-for-delivery',
        date: 'January 5, 2021',
        datetime: '2021-01-05',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      // More products...
    ],
  },
  // More orders...
]

export default {
  components: {
    CheckIcon,
  },
  setup() {
    return {
      orders,
    }
  },
}
</script>