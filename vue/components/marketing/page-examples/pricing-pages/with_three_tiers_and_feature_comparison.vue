<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <header class="bg-indigo-600">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div class="flex items-center">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="" />
            </a>
            <div class="hidden ml-10 space-x-8 lg:block">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base font-medium text-white hover:text-indigo-50">
                {{ item.name }}
              </a>
            </div>
          </div>
          <div class="ml-10 space-x-4">
            <a href="#" class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
            <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
              <span class="md:hidden">Sign up</span>
              <span class="hidden md:inline lg:hidden">Create account</span>
              <span class="hidden lg:inline">Create an account</span>
            </a>
          </div>
        </div>
        <div class="mt-4 flex justify-center space-x-6 lg:hidden">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base font-medium text-white hover:text-indigo-50">
            {{ item.name }}
          </a>
        </div>
      </nav>
    </header>

    <main>
      <!-- Pricing section -->
      <div>
        <div class="relative bg-indigo-600">
          <!-- Overlapping background -->
          <div aria-hidden="true" class="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block" />

          <div class="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              <span class="block lg:inline">Simple pricing,</span>
              <span class="block lg:inline">no commitment.</span>
            </h1>
            <p class="mt-4 text-xl text-indigo-100">Everything you need, nothing you don't. Pick a plan that best suits your business.</p>
          </div>

          <h2 class="sr-only">Plans</h2>

          <!-- Toggle -->
          <div class="relative mt-12 flex justify-center sm:mt-16">
            <div class="bg-indigo-700 p-0.5 rounded-lg flex">
              <button type="button" class="relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10">Monthly billing</button>
              <button type="button" class="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10">Yearly billing</button>
            </div>
          </div>

          <!-- Cards -->
          <div class="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
            <!-- Decorative background -->
            <div aria-hidden="true" class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block" />

            <div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
              <div v-for="plan in plans" :key="plan.title" :class="[plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-indigo-700 lg:bg-transparent', 'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12']">
                <div>
                  <h3 :class="[plan.featured ? 'text-indigo-600' : 'text-white', 'text-sm font-semibold uppercase tracking-wide']">{{ plan.title }}</h3>
                  <div class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div class="mt-3 flex items-center">
                      <p :class="[plan.featured ? 'text-indigo-600' : 'text-white', 'text-4xl font-extrabold tracking-tight']">${{ plan.priceMonthly }}</p>
                      <div class="ml-4">
                        <p :class="[plan.featured ? 'text-gray-700' : 'text-white', 'text-sm']">USD / mo</p>
                        <p :class="[plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm']">Billed yearly (${{ plan.priceYearly }})</p>
                      </div>
                    </div>
                    <a href="#" :class="[plan.featured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-indigo-600 hover:bg-indigo-50', 'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full']">Buy {{ plan.title }}</a>
                  </div>
                </div>
                <h4 class="sr-only">Features</h4>
                <ul role="list" :class="[plan.featured ? 'border-gray-200 divide-gray-200' : 'border-indigo-500 divide-indigo-500 divide-opacity-75', 'mt-7 border-t divide-y lg:border-t-0']">
                  <li v-for="mainFeature in plan.mainFeatures" :key="mainFeature.id" class="py-3 flex items-center">
                    <CheckIcon :class="[plan.featured ? 'text-indigo-500' : 'text-indigo-200', 'w-5 h-5 flex-shrink-0']" aria-hidden="true" />
                    <span :class="[plan.featured ? 'text-gray-600' : 'text-white', 'ml-4 text-sm font-medium']">{{ mainFeature.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature comparison -->
        <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
          <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

          <div class="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
            <div v-for="(plan, planIndex) in plans" :key="plan.title" class="border-t border-gray-200">
              <div :class="[plan.featured ? 'border-indigo-600' : 'border-transparent', '-mt-px pt-6 border-t-2 sm:w-1/2']">
                <h3 :class="[plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold']">{{ plan.title }}</h3>
                <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
              </div>
              <h4 class="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

              <div class="mt-6 relative">
                <!-- Fake card background -->
                <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
                  <div :class="[plan.featured ? 'shadow-md' : 'shadow', 'absolute right-0 w-1/2 h-full bg-white rounded-lg']" />
                </div>

                <div :class="[plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow', 'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none']">
                  <dl class="divide-y divide-gray-200">
                    <div v-for="feature in features" :key="feature.title" class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2">
                      <dt class="pr-4 text-sm font-medium text-gray-600">{{ feature.title }}</dt>
                      <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                        <span v-if="typeof feature.tiers[planIndex].value === 'string'" :class="[feature.tiers[planIndex].featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ feature.tiers[planIndex].value }}</span>
                        <template v-else>
                          <CheckIcon v-if="feature.tiers[planIndex].value === true" class="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                          <XIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span class="sr-only">{{ feature.tiers[planIndex].value === true ? 'Yes' : 'No' }}</span>
                        </template>
                      </dd>
                    </div>
                  </dl>
                </div>

                <!-- Fake card border -->
                <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
                  <div :class="[plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5', 'absolute right-0 w-1/2 h-full rounded-lg']" />
                </div>
              </div>

              <h4 class="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

              <div class="mt-6 relative">
                <!-- Fake card background -->
                <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
                  <div :class="[plan.featured ? 'shadow-md' : 'shadow', 'absolute right-0 w-1/2 h-full bg-white rounded-lg']" />
                </div>

                <div :class="[plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow', 'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none']">
                  <dl class="divide-y divide-gray-200">
                    <div v-for="perk in perks" :key="perk.title" class="py-3 flex justify-between sm:grid sm:grid-cols-2">
                      <dt class="text-sm font-medium text-gray-600 sm:pr-4">{{ perk.title }}</dt>
                      <dd class="text-center sm:px-4">
                        <CheckIcon v-if="perk.tiers[planIndex].value === true" class="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                        <XIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span class="sr-only">{{ perk.tiers[planIndex].value === true ? 'Yes' : 'No' }}</span>
                      </dd>
                    </div>
                  </dl>
                </div>

                <!-- Fake card border -->
                <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
                  <div :class="[plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5', 'absolute right-0 w-1/2 h-full rounded-lg']" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="comparison-heading" class="hidden lg:block">
          <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

          <div class="mt-24 max-w-7xl mx-auto px-8">
            <div class="w-full border-t border-gray-200 flex items-stretch">
              <div class="-mt-px w-1/4 py-6 pr-4 flex items-end">
                <h3 class="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
              </div>
              <div v-for="(plan, index) in plans" :key="plan.title" aria-hidden="true" :class="[index === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4']">
                <div :class="[plan.featured ? 'border-indigo-600' : 'border-transparent', 'py-6 border-t-2']">
                  <p :class="[plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold']">{{ plan.title }}</p>
                  <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
                </div>
              </div>
            </div>

            <div class="relative">
              <!-- Fake card backgrounds -->
              <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                <div class="w-1/4 pr-4" />
                <div class="w-1/4 px-4">
                  <div class="w-full h-full bg-white rounded-lg shadow" />
                </div>
                <div class="w-1/4 px-4">
                  <div class="w-full h-full bg-white rounded-lg shadow-md" />
                </div>
                <div class="w-1/4 pl-4">
                  <div class="w-full h-full bg-white rounded-lg shadow" />
                </div>
              </div>

              <table class="relative w-full">
                <caption class="sr-only">
                  Business feature comparison
                </caption>
                <thead>
                  <tr class="text-left">
                    <th scope="col">
                      <span class="sr-only">Feature</span>
                    </th>
                    <th v-for="plan in plans" :key="plan.title" scope="col">
                      <span class="sr-only">{{ plan.title }} plan</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="(feature, featureIndex) in features" :key="featureIndex">
                    <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">{{ feature.title }}</th>
                    <td v-for="(tier, index) in feature.tiers" :key="tier.title" :class="[index === feature.tiers.length - 1 ? 'pl-4' : 'px-4', 'relative w-1/4 py-0 text-center']">
                      <span class="relative w-full h-full py-3">
                        <span v-if="typeof tier.value === 'string'" :class="[tier.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ tier.value }}</span>
                        <template v-else>
                          <CheckIcon v-if="tier.value === true" class="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                          <XIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span class="sr-only">{{ tier.value === true ? 'Yes' : 'No' }}</span>
                        </template>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Fake card borders -->
              <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                <div class="w-1/4 pr-4" />
                <div class="w-1/4 px-4">
                  <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
                <div class="w-1/4 px-4">
                  <div class="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                </div>
                <div class="w-1/4 pl-4">
                  <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
              </div>
            </div>

            <h3 class="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

            <div class="mt-6 relative">
              <!-- Fake card backgrounds -->
              <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                <div class="w-1/4 pr-4" />
                <div class="w-1/4 px-4">
                  <div class="w-full h-full bg-white rounded-lg shadow" />
                </div>
                <div class="w-1/4 px-4">
                  <div class="w-full h-full bg-white rounded-lg shadow-md" />
                </div>
                <div class="w-1/4 pl-4">
                  <div class="w-full h-full bg-white rounded-lg shadow" />
                </div>
              </div>

              <table class="relative w-full">
                <caption class="sr-only">
                  Perk comparison
                </caption>
                <thead>
                  <tr class="text-left">
                    <th scope="col">
                      <span class="sr-only">Perk</span>
                    </th>
                    <th v-for="plan in plans" :key="plan.title" scope="col">
                      <span class="sr-only">{{ plan.title }} plan</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="perk in perks" :key="perk.title">
                    <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">{{ perk.title }}</th>
                    <td v-for="(tier, index) in perk.tiers" :key="tier.title" :class="[index === perk.tiers.length - 1 ? 'pl-4' : 'px-4', 'relative w-1/4 py-0 text-center']">
                      <span class="relative w-full h-full py-3">
                        <CheckIcon v-if="tier.value === true" class="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                        <XIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span class="sr-only">{{ tier.value === true ? 'Yes' : 'No' }}</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Fake card borders -->
              <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                <div class="w-1/4 pr-4" />
                <div class="w-1/4 px-4">
                  <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
                <div class="w-1/4 px-4">
                  <div class="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                </div>
                <div class="w-1/4 pl-4">
                  <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Logo cloud -->
      <div class="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
          </div>
          <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
          </div>
          <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
          </div>
          <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
          </div>
          <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
          </div>
        </div>
      </div>

      <!-- FAQs -->
      <section aria-labelledby="faq-heading" class="bg-gray-900">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="max-w-2xl lg:mx-auto lg:text-center">
            <h2 id="faq-heading" class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
            <p class="mt-4 text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
          </div>
          <div class="mt-20">
            <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
              <div v-for="faq in faqs" :key="faq.id">
                <dt class="font-semibold text-white">
                  {{ faq.question }}
                </dt>
                <dd class="mt-3 text-gray-400">
                  {{ faq.answer }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="space-y-8 xl:col-span-1">
              <img class="h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Company name" />
              <p class="text-gray-500 text-base">Making the world a better place through constructing elegant hierarchies.</p>
              <div class="flex space-x-6">
                <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">{{ item.name }}</span>
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-semibold tracking-wider uppercase text-gray-900">Solutions</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in footerNavigation.solutions" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-sm font-semibold tracking-wider uppercase text-gray-900">Support</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in footerNavigation.support" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-semibold tracking-wider uppercase text-gray-900">Company</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in footerNavigation.company" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-sm font-semibold tracking-wider uppercase text-gray-900">Legal</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li v-for="item in footerNavigation.legal" :key="item.name">
                      <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 border-t border-gray-200 pt-8">
            <p class="text-base text-gray-400 xl:text-center">&copy; 2021 Workflow, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
import { defineComponent, h } from 'vue'
import { CheckIcon, XIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
]
const plans = [
  {
    title: 'Starter',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
    ],
  },
  {
    title: 'Scale',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Advanced invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
      { id: 5, value: 'VAT & VATMOSS filing' },
      { id: 6, value: 'Free bank transfers' },
    ],
  },
  {
    title: 'Growth',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
    ],
  },
]
const features = [
  {
    title: 'Tax Savings',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Easy to use accounting',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Multi-accounts',
    tiers: [
      { title: 'starter', value: '3 accounts' },
      { title: 'popular', featured: true, value: 'Unlimited accounts' },
      { title: 'intermediate', value: '7 accounts' },
    ],
  },
  {
    title: 'Invoicing',
    tiers: [
      { title: 'starter', value: '3 invoices' },
      { title: 'popular', featured: true, value: 'Unlimited invoices' },
      { title: 'intermediate', value: '10 invoices' },
    ],
  },
  {
    title: 'Exclusive offers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: '6 months free advisor',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Mobile and web access',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
]
const perks = [
  {
    title: '24/7 customer support',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Instant notifications',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Budgeting tools',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Digital receipts',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Pots to separate money',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Free bank transfers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
  {
    title: 'Business debit card',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}

export default {
  components: {
    CheckIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
      plans,
      features,
      perks,
      faqs,
      footerNavigation,
    }
  },
}
</script>