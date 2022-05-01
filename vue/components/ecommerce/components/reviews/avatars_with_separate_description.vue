<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div>
      <h2 id="reviews-heading" class="sr-only">Reviews</h2>

      <div class="space-y-10">
        <div v-for="review in reviews" :key="review.id" class="flex flex-col sm:flex-row">
          <div class="mt-6 order-2 sm:mt-0 sm:ml-16">
            <h3 class="text-sm font-medium text-gray-900">{{ review.title }}</h3>
            <p class="sr-only">{{ review.rating }} out of 5 stars</p>

            <div class="mt-3 space-y-6 text-sm text-gray-600" v-html="review.content" />
          </div>

          <div class="order-1 flex items-center sm:flex-col sm:items-start">
            <img :src="review.avatarSrc" :alt="`${review.author}.`" class="h-12 w-12 rounded-full" />

            <div class="ml-4 sm:ml-0 sm:mt-4">
              <p class="text-sm font-medium text-gray-900">{{ review.author }}</p>
              <div class="mt-2 flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[review.rating > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/solid'

const reviews = [
  {
    id: 1,
    title: 'This is the best white t-shirt out there',
    rating: 5,
    content: `
      <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: 'Mark Edwards',
    avatarSrc:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    title: 'Adds the perfect variety to my wardrobe',
    rating: 4,
    content: `
      <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
    `,
    author: 'Blake Reid',
    avatarSrc:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
  {
    id: 3,
    title: 'All good things come in 6-Packs',
    rating: 5,
    content: `
      <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
    `,
    author: 'Ben Russel',
    avatarSrc:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default {
  components: {
    StarIcon,
  },
  setup() {
    return {
      reviews,
    }
  },
}
</script>