<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="pb-16 xl:flex xl:items-center xl:justify-between">
        <div>
          <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
            <span class="text-gray-900">Everything you need for </span>
            <span class="text-indigo-600">$99 a month</span>
          </h1>
          <p class="mt-5 text-xl text-gray-500">Includes every feature we offer plus unlimited projects and unlimited users.</p>
        </div>
        <a href="#" class="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0">Get started today</a>
      </div>
      <div class="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
        <div>
          <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Everything you need</h2>
          <p class="mt-2 text-3xl font-extrabold text-gray-900">All-in-one platform</p>
          <p class="mt-4 text-lg text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
        </div>
        <div class="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
          <ul role="list" class="divide-y divide-gray-200">
            <template v-for="(feature, featureIdx) in features.slice(0, 5)" :key="feature">
              <li v-if="featureIdx === 0" class="py-4 flex md:py-0 md:pb-4">
                <CheckIcon class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
              <li v-else class="py-4 flex">
                <CheckIcon class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
            </template>
          </ul>
          <ul role="list" class="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
            <template v-for="(feature, featureIdx) in features.slice(5)" :key="feature">
              <li v-if="featureIdx === 0" class="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                <CheckIcon class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
              <li v-else class="py-4 flex">
                <CheckIcon class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'

const features = [
  'Vitae in pulvinar odio id utobortis in inter.',
  'Sed sed id viverra viverra augue eget massa.',
  'Urna, gravida amet, a, integer venenatis.',
  'Lobortis sed pharetra amet vitae eleifend.',
  'Ullamcorper blandit a consequat donec elit aoreet.',
  'Dolor quo assumenda.',
  'Esse rerum distinctio maiores maiores.',
  'Eos enim officiis ratione.',
  'Tempore molestiae aliquid excepturi.',
  'Perspiciatis eveniet inventore eum et aliquam.',
]

export default {
  components: {
    CheckIcon,
  },
  setup() {
    return {
      features,
    }
  },
}
</script>