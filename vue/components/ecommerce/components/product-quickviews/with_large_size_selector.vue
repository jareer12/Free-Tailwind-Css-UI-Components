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
                  <p class="absolute top-4 left-4 text-center sm:static sm:mt-6">
                    <a :href="product.href" class="font-medium text-indigo-600 hover:text-indigo-500">View full details</a>
                  </p>
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">{{ product.name }}</h2>

                  <section aria-labelledby="information-heading" class="mt-4">
                    <h3 id="information-heading" class="sr-only">Product information</h3>

                    <div class="flex items-center">
                      <p class="text-lg text-gray-900 sm:text-xl">{{ product.price }}</p>

                      <div class="ml-4 pl-4 border-l border-gray-300">
                        <h4 class="sr-only">Reviews</h4>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                          </div>
                          <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 flex items-center">
                      <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                      <p class="ml-2 font-medium text-gray-500">In stock and ready to ship</p>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" class="mt-6">
                    <h3 id="options-heading" class="sr-only">Product options</h3>

                    <form>
                      <div class="sm:flex sm:justify-between">
                        <!-- Size selector -->
                        <RadioGroup v-model="selectedSize">
                          <RadioGroupLabel class="block text-sm font-medium text-gray-700"> Size </RadioGroupLabel>
                          <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <RadioGroupOption as="template" v-for="size in product.sizes" :key="size.name" :value="size" v-slot="{ active, checked }">
                              <div :class="[active ? 'ring-2 ring-indigo-500' : '', 'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none']">
                                <RadioGroupLabel as="p" class="text-base font-medium text-gray-900">
                                  {{ size.name }}
                                </RadioGroupLabel>
                                <RadioGroupDescription as="p" class="mt-1 text-sm text-gray-500">
                                  {{ size.description }}
                                </RadioGroupDescription>
                                <div :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']" aria-hidden="true" />
                              </div>
                            </RadioGroupOption>
                          </div>
                        </RadioGroup>
                      </div>
                      <div class="mt-4 flex">
                        <a href="#" class="group flex text-sm text-gray-500 hover:text-gray-700">
                          <span>What size should I buy?</span>
                          <QuestionMarkCircleIcon class="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        </a>
                      </div>
                      <div class="mt-6">
                        <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to bag</button>
                      </div>
                      <div class="mt-6 text-center">
                        <a href="#" class="group inline-flex text-base font-medium">
                          <ShieldCheckIcon class="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                          <span class="text-gray-500 group-hover:text-gray-700">Lifetime Guarantee</span>
                        </a>
                      </div>
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
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ShieldCheckIcon, XIcon } from '@heroicons/vue/outline'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/vue/solid'

const product = {
  name: 'Everyday Ruck Snack',
  price: '$220',
  rating: 3.9,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg',
  imageAlt: 'Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.',
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}

export default {
  components: {
    Dialog,
    DialogOverlay,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    StarIcon,
    XIcon,
  },
  setup() {
    const open = ref(false)
    const selectedSize = ref(product.sizes[0])

    return {
      product,
      open,
      selectedSize,
    }
  },
}
</script>