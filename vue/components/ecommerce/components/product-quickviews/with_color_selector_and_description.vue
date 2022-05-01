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
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95" enter-to="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 md:scale-100" leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
          <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
            <div class="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8" @click="open = false">
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                <div class="sm:col-span-4 lg:col-span-5">
                  <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="object-center object-cover" />
                  </div>
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">{{ product.name }}</h2>

                  <section aria-labelledby="information-heading" class="mt-3">
                    <h3 id="information-heading" class="sr-only">Product information</h3>

                    <p class="text-2xl text-gray-900">{{ product.price }}</p>

                    <!-- Reviews -->
                    <div class="mt-3">
                      <h4 class="sr-only">Reviews</h4>
                      <div class="flex items-center">
                        <div class="flex items-center">
                          <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-gray-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                        </div>
                        <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                      </div>
                    </div>

                    <div class="mt-6">
                      <h4 class="sr-only">Description</h4>

                      <p class="text-sm text-gray-700">
                        {{ product.description }}
                      </p>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" class="mt-6">
                    <h3 id="options-heading" class="sr-only">Product options</h3>

                    <form>
                      <!-- Colors -->
                      <div>
                        <h4 class="text-sm text-gray-600">Color</h4>

                        <RadioGroup v-model="selectedColor" class="mt-2">
                          <RadioGroupLabel class="sr-only"> Choose a color </RadioGroupLabel>
                          <div class="flex items-center space-x-3">
                            <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                              <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                                <RadioGroupLabel as="p" class="sr-only">
                                  {{ color.name }}
                                </RadioGroupLabel>
                                <span aria-hidden="true" :class="[color.bgColor, 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                              </div>
                            </RadioGroupOption>
                          </div>
                        </RadioGroup>
                      </div>

                      <div class="mt-6">
                        <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to bag</button>
                      </div>

                      <p class="absolute top-4 left-4 text-center sm:static sm:mt-6">
                        <a :href="product.href" class="font-medium text-indigo-600 hover:text-indigo-500">View full details</a>
                      </p>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/solid'

const product = {
  name: 'Zip Tote Basket',
  price: '$220',
  rating: 3.9,
  href: '#',
  description:
    'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
  imageAlt: 'Back angled view with bag open and handles to the side.',
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
}

export default {
  components: {
    Dialog,
    DialogOverlay,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    TransitionChild,
    TransitionRoot,
    StarIcon,
    XIcon,
  },
  setup() {
    const open = ref(false)
    const selectedColor = ref(product.colors[0])

    return {
      product,
      open,
      selectedColor,
    }
  },
}
</script>