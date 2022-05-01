<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="open = false">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="py-6 px-4 bg-indigo-700 sm:px-6">
                  <div class="flex items-center justify-between">
                    <DialogTitle class="text-lg font-medium text-white"> Panel title </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button type="button" class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div class="mt-1">
                    <p class="text-sm text-indigo-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta.</p>
                  </div>
                </div>
                <div class="relative flex-1 py-6 px-4 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="absolute inset-0 py-6 px-4 sm:px-6">
                    <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                  </div>
                  <!-- /End replace -->
                </div>
              </div>
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

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  setup() {
    const open = ref(true)

    return {
      open,
    }
  },
}
</script>