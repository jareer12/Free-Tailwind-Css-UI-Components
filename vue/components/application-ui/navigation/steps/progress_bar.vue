<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="">
    <h4 class="sr-only">Status</h4>
    <p class="text-sm font-medium text-gray-900">Migrating MySQL database...</p>
    <div class="mt-6" aria-hidden="true">
      <div class="bg-gray-200 rounded-full overflow-hidden">
        <div class="h-2 bg-indigo-600 rounded-full" style="width: 37.5%" />
      </div>
      <div class="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
        <div class="text-indigo-600">Copying files</div>
        <div class="text-center text-indigo-600">Migrating database</div>
        <div class="text-center">Compiling assets</div>
        <div class="text-right">Deployed</div>
      </div>
    </div>
  </div>
</template>
