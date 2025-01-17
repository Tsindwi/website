<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 
      class="text-4xl font-bold mb-8"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      Our Community
    </h1>

    <div 
      class="mb-12"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="200"
    >
      <h2 class="text-2xl font-bold mb-6">Community Pledges</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4">Commitment to Collaboration</h3>
          <p class="text-gray-600">
            We pledge to foster an environment where ideas are shared freely and everyone's
            contribution is valued.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4">Supporting Innovation</h3>
          <p class="text-gray-600">
            We commit to supporting new ideas and approaches that challenge the status quo
            and drive positive change.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4">Open Source First</h3>
          <p class="text-gray-600">
            All our projects remain open source, ensuring transparency and enabling
            collaboration across the global community.
          </p>
        </div>
      </div>
    </div>

    <div 
      class="mb-12"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="400"
    >
      <h2 class="text-2xl font-bold mb-6">Active Members</h2>
      <div v-if="loading" class="text-center py-12">
        <div class="animate-pulse flex justify-center space-x-8">
          <div v-for="i in 4" :key="i" class="space-y-3">
            <div class="w-24 h-24 bg-gray-200 rounded-full"></div>
            <div class="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
            <div class="h-3 bg-gray-200 rounded w-16 mx-auto"></div>
          </div>
        </div>
      </div>
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">{{ error }}</p>
        <button 
          @click="loadMembers"
          class="mt-4 text-indigo-600 hover:text-indigo-700"
        >
          Try Again
        </button>
      </div>
      <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div 
          v-for="member in activeMembers" 
          :key="member.id" 
          class="text-center transform hover:scale-105 transition-transform duration-300"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="600"
        >
          <div class="w-24 h-24 mx-auto mb-2">
            <img 
              v-if="member.image_url" 
              :src="member.image_url" 
              :alt="member.name"
              class="w-full h-full object-cover rounded-full shadow-md"
            />
            <div 
              v-else 
              class="w-full h-full bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md"
            >
              <span class="text-2xl text-white font-semibold">{{ member.name.charAt(0) }}</span>
            </div>
          </div>
          <p class="font-medium text-gray-900">{{ member.name }}</p>
          <p class="text-sm text-gray-500">{{ member.role }}</p>
        </div>
      </div>
    </div>

    <div 
      class="bg-indigo-50 rounded-lg p-8 text-center"
      v-motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :enter="{ opacity: 1, scale: 1 }"
      :delay="800"
    >
      <h2 class="text-2xl font-bold mb-4">Join Our Community</h2>
      <p class="text-lg mb-6">
        Ready to be part of something bigger? Join our community of changemakers and
        help us build a better future.
      </p>
      <NuxtLink
        to="/get-involved"
        class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
      >
        Join Now
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { fetchTeamMembers } = useSupabase()

const activeMembers = ref([])
const loading = ref(true)
const error = ref(null)

const loadMembers = async () => {
  try {
    loading.value = true
    error.value = null
    activeMembers.value = await fetchTeamMembers()
  } catch (err) {
    console.error('Error fetching team members:', err)
    error.value = 'Failed to load community members'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadMembers()
})
</script>