<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold mb-8" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }">
      About Kuyesela Community
    </h1>

    <div class="prose max-w-none">
      <p class="text-lg mb-8" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }" :delay="200">
        Kuyesela Community is a platform for individuals who are passionate about creating real change
        and tired of ineffective systems, particularly those government systems that affect masses. We bring together
        technical
        enthusiasts and changemakers to build scalable, innovative solutions to global challenges.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }"
        :delay="400">
        Our Founding Members
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="(member, index) in teamMembers" :key="member.id"
          class="bg-white p-6 rounded-lg shadow transform hover:-translate-y-2 transition-all duration-300" v-motion
          :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }" :delay="600 + (index * 200)">
          <div class="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4">
            <img v-if="member.image_url" :src="member.image_url" :alt="member.name"
              class="w-full h-full object-cover rounded-full" />
          </div>
          <h3 class="text-xl font-semibold text-center">{{ member.name }}</h3>
          <p class="text-gray-600 text-center">{{ member.role }}</p>
          <p v-if="member.bio" class="text-gray-600 text-center mt-2">{{ member.bio }}</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mt-12 mb-6" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }">
        Our Vision
      </h2>
      <p class="text-lg mb-8" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }" :delay="200">
        We envision a world where technology and innovation work together to solve pressing global
        challenges. By keeping our projects open-source, we ensure transparency, collaboration,
        and the ability for anyone to contribute to meaningful change.
      </p>
    </div>
  </div>
</template>

<script setup>
const { fetchTeamMembers } = useSupabase()

const teamMembers = ref([])

onMounted(async () => {
  try {
    teamMembers.value = await fetchTeamMembers()
  } catch (error) {
    console.error('Error fetching team members:', error)
  }
})
</script>