<!-- src/views/Contact.vue -->
<template>
  <PageLayout title="Get in Touch" max-width="max-w-3xl">
    <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="Your name"
            >
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="your.email@example.com"
            >
          </div>
        </div>

        <!-- Subject -->
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
          <input
            id="subject"
            v-model="formData.subject"
            type="text"
            required
            class="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="What's this about?"
          >
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            rows="6"
            class="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting">Sending...</span>
            <span v-else>Send Message</span>
          </button>
        </div>
      </form>
    </div>

    <!-- Alternative Contact Methods -->
    <div class="mt-12 text-center">
      <h3 class="text-xl font-semibold text-purple-400 mb-6">Other Ways to Reach Me</h3>
      <div class="flex justify-center">
        <SocialLinks />
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue'
import PageLayout from '../components/PageLayout.vue'
import SocialLinks from '../components/SocialLinks.vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Implement your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    alert('Message sent successfully!')
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    alert('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script> 