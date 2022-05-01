<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
      <div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Trending products</h2>
        <a href="#" class="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">See everything<span aria-hidden="true"> &rarr;</span></a>
      </div>

      <div class="mt-8 relative">
        <div class="relative w-full pb-6 -mb-6 overflow-x-auto">
          <ul role="list" class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
            <li v-for="product in products" :key="product.id" class="w-64 inline-flex flex-col text-center lg:w-auto">
              <div class="group relative">
                <div class="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                </div>
                <div class="mt-6">
                  <p class="text-sm text-gray-500">
                    {{ product.color }}
                  </p>
                  <h3 class="mt-1 font-semibold text-gray-900">
                    <a :href="product.href">
                      <span class="absolute inset-0" />
                      {{ product.name }}
                    </a>
                  </h3>
                  <p class="mt-1 text-gray-900">
                    {{ product.price }}
                  </p>
                </div>
              </div>

              <h4 class="sr-only">Available colors</h4>
              <ul role="list" class="mt-auto pt-6 flex items-center justify-center space-x-3">
                <li v-for="color in product.availableColors" :key="color.name" class="w-4 h-4 rounded-full border border-black border-opacity-10" :style="{ backgroundColor: color.colorBg }">
                  <span class="sr-only">
                    {{ color.name }}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex px-4 sm:hidden">
        <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">See everything<span aria-hidden="true"> &rarr;</span></a>
      </div>
    </div>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  // More products...
]

export default {
  setup() {
    return {
      products,
    }
  },
}
</script>