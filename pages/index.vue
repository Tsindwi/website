<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-indigo-700 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div class="relative z-10">
          <h1 
            class="text-4xl md:text-5xl font-bold mb-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200"
          >
            Fed up with the status quo?<br>
            Let's build something better together.
          </h1>
          <p 
            class="text-xl mb-8 max-w-2xl"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="400"
          >
            Join a community of passionate individuals creating scalable, innovative solutions
            to global challenges through open-source collaboration.
          </p>
          <div 
            class="space-x-4"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="600"
          >
            <NuxtLink
              to="/get-involved"
              class="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Join the Community
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors duration-300 inline-block"
            >
              Explore Our Work
            </NuxtLink>
          </div>
        </div>
        
        <!-- Animated background elements -->
        <ClientOnly>
          <div class="absolute inset-0 overflow-hidden opacity-10">
            <div v-for="(element, index) in backgroundElements" 
                :key="index" 
                class="absolute float-animation"
                :style="{
                  left: `${element.left}%`,
                  top: `${element.top}%`,
                  animationDelay: `${index * 0.5}s`
                }"
            >
              <div class="w-64 h-64 bg-white rounded-full"></div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>

    <!-- Values Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 
        class="text-3xl font-bold text-center mb-12"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
      >
        Our Key Values
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(value, index) in coreValues" 
          :key="value.id"
          class="text-center p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400 + (index * 200)"
        >
          <h3 class="text-xl font-semibold mb-4">{{ value.title }}</h3>
          <p class="text-gray-600">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { fetchValues } = useSupabase()

// Fetch values from Supabase
const coreValues = ref([])
onMounted(async () => {
  try {
    coreValues.value = await fetchValues()
  } catch (error) {
    console.error('Error fetching values:', error)
  }
})

// Pre-compute background element positions
const backgroundElements = [
  { left: 10, top: 20 },
  { left: 30, top: 50 },
  { left: 60, top: 30 },
  { left: 80, top: 60 },
  { left: 90, top: 10 }
]
</script>