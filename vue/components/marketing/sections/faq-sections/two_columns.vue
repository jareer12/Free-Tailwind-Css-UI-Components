<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-24 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
      <div class="mt-6 pt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default {
  setup() {
    return {
      faqs,
    }
  },
}
</script>