<template>
  <NuxtLayout>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div class="max-w-lg w-full text-center">
        <h1 
          class="text-6xl font-bold text-indigo-600 mb-8"
          v-motion
          :initial="{ opacity: 0, scale: 0.5 }"
          :enter="{ opacity: 1, scale: 1 }"
        >
          {{ error?.statusCode || '404' }}
        </h1>
        <p 
          class="text-xl text-gray-600 mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          {{ error?.statusCode === 404 ? 
            "Oops! The page you're looking for doesn't exist." : 
            "Something went wrong. Please try again later." 
          }}
        </p>
        <button
          @click="handleError"
          class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Back to Home
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>