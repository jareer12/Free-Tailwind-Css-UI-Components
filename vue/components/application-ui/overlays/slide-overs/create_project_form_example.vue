<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="open = false">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 pl-16 max-w-full right-0 flex">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-md">
              <form class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                <div class="flex-1 h-0 overflow-y-auto">
                  <div class="py-6 px-4 bg-indigo-700 sm:px-6">
                    <div class="flex items-center justify-between">
                      <DialogTitle class="text-lg font-medium text-white"> New Project </DialogTitle>
                      <div class="ml-3 h-7 flex items-center">
                        <button type="button" class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div class="mt-1">
                      <p class="text-sm text-indigo-300">Get started by filling in the information below to create your new project.</p>
                    </div>
                  </div>
                  <div class="flex-1 flex flex-col justify-between">
                    <div class="px-4 divide-y divide-gray-200 sm:px-6">
                      <div class="space-y-6 pt-6 pb-5">
                        <div>
                          <label for="project-name" class="block text-sm font-medium text-gray-900"> Project name </label>
                          <div class="mt-1">
                            <input type="text" name="project-name" id="project-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                          </div>
                        </div>
                        <div>
                          <label for="description" class="block text-sm font-medium text-gray-900"> Description </label>
                          <div class="mt-1">
                            <textarea id="description" name="description" rows="4" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" />
                          </div>
                        </div>
                        <div>
                          <h3 class="text-sm font-medium text-gray-900">Team Members</h3>
                          <div class="mt-2">
                            <div class="flex space-x-2">
                              <a v-for="person in team" :key="person.email" :href="person.href" class="rounded-full hover:opacity-75">
                                <img class="inline-block h-8 w-8 rounded-full" :src="person.imageUrl" :alt="person.name" />
                              </a>
                              <button type="button" class="flex-shrink-0 bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span class="sr-only">Add team member</span>
                                <PlusSmIcon class="h-5 w-5" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <fieldset>
                          <legend class="text-sm font-medium text-gray-900">Privacy</legend>
                          <div class="mt-2 space-y-5">
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input id="privacy-public" name="privacy" aria-describedby="privacy-public-description" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked="" />
                              </div>
                              <div class="pl-7 text-sm">
                                <label for="privacy-public" class="font-medium text-gray-900"> Public access </label>
                                <p id="privacy-public-description" class="text-gray-500">Everyone with the link will see this project.</p>
                              </div>
                            </div>
                            <div>
                              <div class="relative flex items-start">
                                <div class="absolute flex items-center h-5">
                                  <input id="privacy-private-to-project" name="privacy" aria-describedby="privacy-private-to-project-description" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                </div>
                                <div class="pl-7 text-sm">
                                  <label for="privacy-private-to-project" class="font-medium text-gray-900"> Private to project members </label>
                                  <p id="privacy-private-to-project-description" class="text-gray-500">Only members of this project would be able to access.</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="relative flex items-start">
                                <div class="absolute flex items-center h-5">
                                  <input id="privacy-private" name="privacy" aria-describedby="privacy-private-to-project-description" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                </div>
                                <div class="pl-7 text-sm">
                                  <label for="privacy-private" class="font-medium text-gray-900"> Private to you </label>
                                  <p id="privacy-private-description" class="text-gray-500">You are the only one able to access this project.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div class="pt-4 pb-6">
                        <div class="flex text-sm">
                          <a href="#" class="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900">
                            <LinkIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" aria-hidden="true" />
                            <span class="ml-2"> Copy link </span>
                          </a>
                        </div>
                        <div class="mt-4 flex text-sm">
                          <a href="#" class="group inline-flex items-center text-gray-500 hover:text-gray-900">
                            <QuestionMarkCircleIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                            <span class="ml-2"> Learn more about sharing </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0 px-4 py-4 flex justify-end">
                  <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="open = false">Cancel</button>
                  <button type="submit" class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import { LinkIcon, PlusSmIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

const team = [
  {
    name: 'Tom Cook',
    email: 'tomcook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitneyfrancis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonardkrasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floydmiles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emilyselman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    LinkIcon,
    PlusSmIcon,
    QuestionMarkCircleIcon,
    XIcon,
  },
  setup() {
    const open = ref(true)

    return {
      team,
      open,
    }
  },
}
</script>