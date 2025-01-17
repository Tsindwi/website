<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <NuxtLink 
              to="/" 
              class="flex items-center"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :enter="{ opacity: 1, x: 0 }"
              :delay="200"
            >
              <span class="text-xl font-bold text-indigo-600">Kuyesela</span>
            </NuxtLink>
          </div>
          <div class="hidden sm:flex sm:space-x-8 items-center">
            <NuxtLink 
              v-for="(link, index) in ['Home', 'About', 'Projects', 'Community', 'Get Involved', 'Contact']"
              :key="link"
              :to="link === 'Home' ? '/' : '/' + link.toLowerCase().replace(' ', '-')"
              class="text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              v-motion
              :initial="{ opacity: 0, y: -20 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="300 + (index * 100)"
            >
              {{ link }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="pt-16">
      <NuxtPage />
    </main>

    <footer class="bg-gray-800 text-white mt-12">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div 
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          <div>
            <h3 class="text-lg font-semibold mb-4">Kuyesela Community</h3>
            <p class="text-gray-300">Making Earth better for everyone</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors duration-300">About Us</NuxtLink></li>
              <li><NuxtLink to="/projects" class="text-gray-300 hover:text-white transition-colors duration-300">Projects</NuxtLink></li>
              <li><NuxtLink to="/get-involved" class="text-gray-300 hover:text-white transition-colors duration-300">Get Involved</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Connect</h3>
            <p class="text-gray-300">Join us in building scalable solutions for global challenges.</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p class="text-gray-300">&copy; {{ new Date().getFullYear() }} Kuyesela Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}
</style>