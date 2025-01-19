<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-8">Get Involved</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-2xl font-bold mb-6">How to Join</h2>
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-indigo-600">1</div>
            <div class="ml-3">
              <h3 class="font-semibold">Fill out the form</h3>
              <p class="text-gray-600">Complete our community join form with your details and interests.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-indigo-600">2</div>
            <div class="ml-3">
              <h3 class="font-semibold">Application Review</h3>
              <p class="text-gray-600">Our team will review your application within 48 hours.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="flex-shrink-0 h-6 w-6 text-indigo-600">3</div>
            <div class="ml-3">
              <h3 class="font-semibold">Start contributing</h3>
              <p class="text-gray-600">Once approved, you'll receive an email with next steps.</p>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-6">FAQs</h2>
          <div class="space-y-6">
            <div v-for="faq in faqs" :key="faq.id">
              <h3 class="font-semibold">{{ faq.question }}</h3>
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-6">Join Our Community</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Area of Expertise/Interest</label>
            <select
              v-model="form.expertise"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select an option</option>
              <option>Development</option>
              <option>Business Analysis</option>
              <option>Quality assurance</option>
              <option>Project Management</option>
              <option>Research</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              v-model="form.message"
              rows="4"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div v-if="error" class="text-red-600 text-sm">
            {{ error }}
          </div>
          <div v-if="success" class="text-green-600 text-sm">
            {{ success }}
          </div>
          <button
            type="submit"
            :disabled="submitting"
            class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <span v-if="submitting">Submitting...</span>
            <span v-else>Submit Application</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const { submitApplication, fetchFaqs } = useSupabase()

const form = ref({
  name: '',
  email: '',
  expertise: '',
  message: ''
})

const faqs = ref([])
const submitting = ref(false)
const error = ref(null)
const success = ref(null)

onMounted(async () => {
  try {
    faqs.value = await fetchFaqs()
  } catch (err) {
    console.error('Error fetching FAQs:', err)
  }
})

const submitForm = async () => {
  try {
    submitting.value = true
    error.value = null
    success.value = null
    
    await submitApplication({
      name: form.value.name,
      email: form.value.email,
      expertise: form.value.expertise,
      message: form.value.message
    })

    success.value = 'Application submitted successfully! We will review it and get back to you soon.'
    form.value = {
      name: '',
      email: '',
      expertise: '',
      message: ''
    }
  } catch (err) {
    console.error('Error submitting application:', err)
    error.value = 'Failed to submit application. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>