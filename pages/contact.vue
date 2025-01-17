<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-8">Contact Us</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
        <p class="text-lg text-gray-600 mb-8">
          Have questions, ideas, or want to discuss potential collaborations? We'd love to hear from you!
          Reach out through the form or connect with us on social media.
        </p>

        <div class="space-y-6">
          <h3 class="text-xl font-semibold">Connect With Us</h3>
          <div class="space-y-4">
            <a href="#" class="flex items-center text-gray-600 hover:text-indigo-600">
              <span class="mr-2">Twitter</span>
            </a>
            <a href="#" class="flex items-center text-gray-600 hover:text-indigo-600">
              <span class="mr-2">LinkedIn</span>
            </a>
            <a href="#" class="flex items-center text-gray-600 hover:text-indigo-600">
              <span class="mr-2">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div>
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>