<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
      <div class="max-w-xl">
        <h1 id="your-orders-heading" class="text-3xl font-extrabold tracking-tight text-gray-900">Your Orders</h1>
        <p class="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
      </div>

      <div class="mt-12 space-y-16 sm:mt-16">
        <section v-for="order in orders" :key="order.number" :aria-labelledby="`${order.number}-heading`">
          <div class="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
            <h2 :id="`${order.number}-heading`" class="text-lg font-medium text-gray-900 md:flex-shrink-0">Order #{{ order.number }}</h2>
            <div class="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
              <p class="text-sm font-medium text-gray-500">
                {{ order.status }}
              </p>
              <div class="flex text-sm font-medium">
                <a :href="order.href" class="text-indigo-600 hover:text-indigo-500">Manage order</a>
                <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                  <a :href="order.invoiceHref" class="text-indigo-600 hover:text-indigo-500">View Invoice</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
            <div v-for="product in order.products" :key="product.id" class="py-6 sm:flex">
              <div class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48" />
                <div class="pt-1.5 min-w-0 flex-1 sm:pt-0">
                  <h3 class="text-sm font-medium text-gray-900">
                    <a :href="product.href">{{ product.name }}</a>
                  </h3>
                  <p class="text-sm text-gray-500 truncate">
                    <span>{{ product.color }}</span>
                    {{ ' ' }}
                    <span class="mx-1 text-gray-400" aria-hidden="true">&middot;</span>
                    {{ ' ' }}
                    <span>{{ product.size }}</span>
                  </p>
                  <p class="mt-1 font-medium text-gray-900">{{ product.price }}</p>
                </div>
              </div>
              <div class="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                <button type="button" class="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">Buy again</button>
                <button type="button" class="w-full flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">Shop similar</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
const orders = [
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    products: [
      {
        id: 1,
        name: 'Machined Brass Puzzle',
        href: '#',
        price: '$95.00',
        color: 'Brass',
        size: '3" x 3" x 3"',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-07-product-01.jpg',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
      },
      // More products...
    ],
  },
  // More orders...
]

export default {
  setup() {
    return {
      orders,
    }
  },
}
</script>