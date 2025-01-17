<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-8" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }">
      Our Projects
    </h1>

    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }"
        :delay="200">
        Featured Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-9 project-card-container">
        <div v-for="(project, index) in featuredProjects" :key="project.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 project-card">
          <!- v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }" :delay="300 + (index * 100)" ->
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex items-center text-sm text-gray-500">
                <span class="mr-4">Status: {{ project.status }}</span>
                <span>Contributors: {{ project.contributors_count }}</span>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="bg-indigo-50 rounded-lg p-8 text-center" v-motion :initial="{ opacity: 0, scale: 0.95 }"
      :enter="{ opacity: 1, scale: 1 }" :delay="800">
      <h2 class="text-2xl font-bold mb-4">Want to Contribute?</h2>
      <p class="text-lg mb-6">
        We welcome contributors of all skill levels. Whether you're a developer, designer,
        or have ideas to share, there's a place for you in our community.
      </p>
      <NuxtLink to="/get-involved"
        class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
        Get Started
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { fetchFeaturedProjects } = useSupabase()

const featuredProjects = ref([])

onMounted(async () => {
  try {
    featuredProjects.value = await fetchFeaturedProjects()
  } catch (error) {
    console.error('Error fetching featured projects:', error)
  }
})
</script>

<style scoped>
.project-card-container {
  perspective: 1000px;
}

.project-card {
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05);
}
</style>