<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
      <!-- xs to lg -->
      <div class="max-w-2xl mx-auto space-y-16 lg:hidden">
        <section v-for="(tier, tierIdx) in tiers" :key="tier.name">
          <div class="px-4 mb-8">
            <h2 class="text-lg leading-6 font-medium text-gray-900">{{ tier.name }}</h2>
            <p class="mt-4">
              <span class="text-4xl font-extrabold text-gray-900">${{ tier.priceMonthly }}</span>
              {{ ' ' }}
              <span class="text-base font-medium text-gray-500">/mo</span>
            </p>
            <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
            <a :href="tier.href" class="mt-6 block border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy {{ tier.name }}</a>
          </div>

          <table v-for="section in sections" :key="section.name" class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
              {{
                section.name
              }}
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="feature in section.features" :key="feature.name" class="border-t border-gray-200">
                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">{{ feature.name }}</th>
                <td class="py-5 pr-4">
                  <span v-if="typeof feature.tiers[tier.name] === 'string'" class="block text-sm text-gray-700 text-right">{{ feature.tiers[tier.name] }}</span>
                  <template v-else>
                    <CheckIcon v-if="feature.tiers[tier.name] === true" class="ml-auto h-5 w-5 text-green-500" aria-hidden="true" />
                    <MinusIcon v-else class="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Yes' : 'No' }}</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>

          <div :class="[tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5', 'border-t border-gray-200 px-4']">
            <a :href="tier.href" class="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy {{ tier.name }}</a>
          </div>
        </section>
      </div>

      <!-- lg+ -->
      <div class="hidden lg:block">
        <table class="w-full h-px table-fixed">
          <caption class="sr-only">
            Pricing plan comparison
          </caption>
          <thead>
            <tr>
              <th class="pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                <span class="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              <th v-for="tier in tiers" :key="tier.name" class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">{{ tier.name }}</th>
            </tr>
          </thead>
          <tbody class="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th class="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top" scope="row">Pricing</th>
              <td v-for="tier in tiers" :key="tier.name" class="h-full py-8 px-6 align-top">
                <div class="relative h-full table">
                  <p>
                    <span class="text-4xl font-extrabold text-gray-900">${{ tier.priceMonthly }}</span>
                    {{ ' ' }}
                    <span class="text-base font-medium text-gray-500">/mo</span>
                  </p>
                  <p class="mt-4 mb-16 text-sm text-gray-500">{{ tier.description }}</p>
                  <a :href="tier.href" class="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy {{ tier.name }}</a>
                </div>
              </td>
            </tr>
            <template v-for="section in sections" :key="section.name">
              <tr>
                <th class="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left" colspan="4" scope="colgroup">{{ section.name }}</th>
              </tr>
              <tr v-for="feature in section.features" :key="feature.name">
                <th class="py-5 px-6 text-sm font-normal text-gray-500 text-left" scope="row">{{ feature.name }}</th>
                <td v-for="tier in tiers" :key="tier.name" class="py-5 px-6">
                  <span v-if="typeof feature.tiers[tier.name] === 'string'" class="block text-sm text-gray-700">{{ feature.tiers[tier.name] }}</span>
                  <template v-else>
                    <CheckIcon v-if="feature.tiers[tier.name] === true" class="h-5 w-5 text-green-500" aria-hidden="true" />
                    <MinusIcon v-else class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Included' : 'Not included' }} in {{ tier.name }}</span>
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr class="border-t border-gray-200">
              <th class="sr-only" scope="row">Choose your plan</th>
              <td v-for="tier in tiers" :key="tier.name" class="pt-5 px-6">
                <a :href="tier.href" class="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Buy {{ tier.name }}</a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon, MinusIcon } from '@heroicons/vue/solid'

const tiers = [
  { name: 'Basic', href: '#', priceMonthly: 9, description: 'Quis suspendisse ut fermentum neque vivamus non tellus.' },
  {
    name: 'Essential',
    href: '#',
    priceMonthly: 29,
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 59,
    description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
  },
]
const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Molestie lobortis massa.', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Urna purus felis.', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Tellus pulvinar sit dictum.', tiers: { Essential: true, Premium: true } },
      { name: 'Convallis.', tiers: { Essential: 'Up to 20 users', Premium: 'Up to 50 users' } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Adipiscing.', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Eget risus integer.', tiers: { Essential: true, Premium: true } },
      { name: 'Gravida leo urna velit.', tiers: { Premium: true } },
      { name: 'Elementum ut dapibus mi feugiat cras nisl.', tiers: { Premium: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: 'Sit dignissim.', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Congue at nibh et.', tiers: { Essential: true, Premium: true } },
      { name: 'Volutpat feugiat mattis.', tiers: { Essential: true, Premium: true } },
      { name: 'Tristique pellentesque ornare diam sapien.', tiers: { Premium: true } },
    ],
  },
]

export default {
  components: {
    CheckIcon,
    MinusIcon,
  },
  setup() {
    return {
      tiers,
      sections,
    }
  },
}
</script>