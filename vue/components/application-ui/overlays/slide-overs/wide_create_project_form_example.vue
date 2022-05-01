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

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-2xl">
              <form class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="flex-1">
                  <!-- Header -->
                  <div class="px-4 py-6 bg-gray-50 sm:px-6">
                    <div class="flex items-start justify-between space-x-3">
                      <div class="space-y-1">
                        <DialogTitle class="text-lg font-medium text-gray-900"> New project </DialogTitle>
                        <p class="text-sm text-gray-500">Get started by filling in the information below to create your new project.</p>
                      </div>
                      <div class="h-7 flex items-center">
                        <button type="button" class="text-gray-400 hover:text-gray-500" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Divider container -->
                  <div class="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                    <!-- Project name -->
                    <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <div>
                        <label for="project-name" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"> Project name </label>
                      </div>
                      <div class="sm:col-span-2">
                        <input type="text" name="project-name" id="project-name" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                      </div>
                    </div>

                    <!-- Project description -->
                    <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <div>
                        <label for="project-description" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"> Description </label>
                      </div>
                      <div class="sm:col-span-2">
                        <textarea id="project-description" name="project-description" rows="3" class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" />
                      </div>
                    </div>

                    <!-- Team members -->
                    <div class="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:px-6 sm:py-5">
                      <div>
                        <h3 class="text-sm font-medium text-gray-900">Team Members</h3>
                      </div>
                      <div class="sm:col-span-2">
                        <div class="flex space-x-2">
                          <a v-for="person in team" :key="person.email" :href="person.href" class="flex-shrink-0 rounded-full hover:opacity-75">
                            <img class="inline-block h-8 w-8 rounded-full" :src="person.imageUrl" :alt="person.name" />
                          </a>

                          <button type="button" class="flex-shrink-0 bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="sr-only">Add team member</span>
                            <PlusSmIcon class="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Privacy -->
                    <fieldset>
                      <div class="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5">
                        <div>
                          <legend class="text-sm font-medium text-gray-900">Privacy</legend>
                        </div>
                        <div class="space-y-5 sm:col-span-2">
                          <div class="space-y-5 sm:mt-0">
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input id="public-access" name="privacy" aria-describedby="public-access-description" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked="" />
                              </div>
                              <div class="pl-7 text-sm">
                                <label for="public-access" class="font-medium text-gray-900"> Public access </label>
                                <p id="public-access-description" class="text-gray-500">Everyone with the link will see this project</p>
                              </div>
                            </div>
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input id="restricted-access" name="privacy" aria-describedby="restricted-access-description" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                              </div>
                              <div class="pl-7 text-sm">
                                <label for="restricted-access" class="font-medium text-gray-900"> Private to Project Members </label>
                                <p id="restricted-access-description" class="text-gray-500">Only members of this project would be able to access</p>
                              </div>
                            </div>
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input id="private-access" name="privacy" aria-describedby="private-access-description" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                              </div>
                              <div class="pl-7 text-sm">
                                <label for="private-access" class="font-medium text-gray-900"> Private to you </label>
                                <p id="private-access-description" class="text-gray-500">You are the only one able to access this project</p>
                              </div>
                            </div>
                          </div>
                          <hr class="border-gray-200" />
                          <div class="flex flex-col space-between space-y-4 sm:flex-row sm:items-center sm:space-between sm:space-y-0">
                            <div class="flex-1">
                              <a href="#" class="group flex items-center text-sm text-indigo-600 hover:text-indigo-900 font-medium space-x-2.5">
                                <LinkIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" aria-hidden="true" />
                                <span> Copy link </span>
                              </a>
                            </div>
                            <div>
                              <a href="#" class="group flex items-center text-sm text-gray-500 hover:text-gray-900 space-x-2.5">
                                <QuestionMarkCircleIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                <span> Learn more about sharing </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                <!-- Action buttons -->
                <div class="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6">
                  <div class="space-x-3 flex justify-end">
                    <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="open = false">Cancel</button>
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create</button>
                  </div>
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