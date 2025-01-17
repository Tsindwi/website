<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-8">Community Applications</h1>

    <div v-if="loading" class="text-center py-12">
      <div class="animate-pulse space-y-4">
        <div v-for="i in 3" :key="i" class="h-24 bg-gray-100 rounded"></div>
      </div>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600">{{ error }}</p>
      <button 
        @click="loadApplications"
        class="mt-4 text-indigo-600 hover:text-indigo-700"
      >
        Try Again
      </button>
    </div>

    <div v-else>
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li v-for="application in applications" :key="application.id" class="p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900">{{ application.name }}</h3>
                <p class="text-sm text-gray-500">{{ application.email }}</p>
                <p class="mt-2 text-sm text-gray-600">{{ application.expertise }}</p>
                <p class="mt-1 text-sm text-gray-600">{{ application.message }}</p>
                <p class="mt-2 text-xs text-gray-400">
                  Applied {{ new Date(application.created_at).toLocaleDateString() }}
                </p>
              </div>
              <div class="flex items-center space-x-4">
                <span 
                  class="px-3 py-1 rounded-full text-sm font-medium"
                  :class="{
                    'bg-yellow-100 text-yellow-800': application.status === 'pending',
                    'bg-green-100 text-green-800': application.status === 'approved',
                    'bg-red-100 text-red-800': application.status === 'rejected'
                  }"
                >
                  {{ application.status }}
                </span>
                <div v-if="application.status === 'pending'" class="flex space-x-2">
                  <button
                    @click="updateStatus(application.id, 'approved')"
                    class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    @click="updateStatus(application.id, 'rejected')"
                    class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const { fetchApplications, updateApplicationStatus } = useSupabase()

const applications = ref([])
const loading = ref(true)
const error = ref(null)

const loadApplications = async () => {
  try {
    loading.value = true
    error.value = null
    applications.value = await fetchApplications()
  } catch (err) {
    console.error('Error fetching applications:', err)
    error.value = 'Failed to load applications'
  } finally {
    loading.value = false
  }
}

const updateStatus = async (id, status) => {
  try {
    await updateApplicationStatus(id, status)
    // Refresh the applications list
    await loadApplications()
  } catch (err) {
    console.error('Error updating application status:', err)
    // Show error toast or notification here
  }
}

onMounted(() => {
  loadApplications()
})
</script>