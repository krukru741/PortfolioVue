<!-- src/components/PageLayout.vue -->
<!-- 
  PageLayout.vue - Main layout component
  This component serves as the base layout for all pages in the portfolio.
  It provides consistent styling, navigation, footer, and background effects.
-->
<template>
  <!-- Main container with full height and padding -->
  <div 
    class="min-h-screen flex flex-col py-20 px-4 relative"
  >
    <!-- Background Layer: Fixed background with gradient overlay -->
    <div class="fixed inset-0 z-0">
      <!-- Background image container -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('/src/assets/bg-dark.png')"
      ></div>
      <!-- Gradient overlay with blur effect for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-purple-900/80 backdrop-blur-sm"></div>
    </div>

    <!-- Main Content Area -->
    <div class="container relative z-10 flex-grow">
      <!-- Navigation: Back to Home button (hidden on home page) -->
      <router-link 
        v-if="!isHomePage"
        to="/" 
        class="absolute left-0 top-0 flex items-center text-purple-400 hover:text-purple-300 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </router-link>

      <!-- Page Title (if provided) -->
      <h1 v-if="title" class="text-4xl md:text-5xl font-bold text-center mb-16">{{ title }}</h1>
      
      <!-- Content Container with customizable max-width -->
      <div :class="['mx-auto', maxWidth]">
        <slot></slot>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="relative z-10 mt-20 border-t border-purple-500/20">
      <div class="container mx-auto px-4">
        <div class="py-12">
          <!-- Footer Grid Layout -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- About Section -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-purple-400">About Me</h3>
              <p class="text-gray-300 leading-relaxed">
                Dedicated professional with expertise in web development and IT support. Known for adaptability, collaborative spirit, and commitment to driving organizational success through technology.
              </p>
              <!-- Location Information -->
              <div class="flex items-center space-x-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Camp IV, Talisay City, Cebu - 6045</span>
              </div>
            </div>

            <!-- Contact Information Section -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-purple-400">Contact Me</h3>
              <div class="space-y-3">
                <!-- Email Link -->
                <a 
                  href="mailto:albengacayan456@gmail.com" 
                  class="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>albengacayan456@gmail.com</span>
                </a>
                <!-- Phone Link -->
                <a 
                  href="tel:09621526219" 
                  class="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0962 152 6219</span>
                </a>
              </div>
            </div>

            <!-- Education & Certifications Section -->
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-purple-400">Education</h3>
              <div class="space-y-3">
                <!-- Degree Information -->
                <p class="text-gray-300">
                  Bachelor of Science in Information Technology (2019 - 2023)
                  <span class="block text-sm text-purple-400">University of the Visayas</span>
                </p>
                <!-- Certifications List -->
                <div class="text-gray-300 mt-4">
                  <p class="font-semibold text-purple-400">Certifications:</p>
                  <ul class="text-sm space-y-1 mt-2">
                    <li>• Game Development using Unity (February 2019)</li>
                    <li>• Introduction to UI/UX Design (June 2023)</li>
                    <li>• Creative Web Design (December 2022 - March 2023)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills Tags Section -->
          <div class="mt-12 pt-8 border-t border-purple-500/20">
            <div class="flex flex-wrap gap-2 justify-center">
              <span 
                v-for="skill in skills" 
                :key="skill"
                class="px-3 py-1 bg-purple-500/10 rounded-full text-sm text-purple-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Languages Section -->
          <div class="mt-8 text-center">
            <p class="text-gray-300">
              Languages: 
              <span class="text-purple-400">Cebuano, Tagalog, English</span>
            </p>
          </div>

          <!-- Copyright Section -->
          <div class="mt-8 pt-8 border-t border-purple-500/20 text-center">
            <p class="text-gray-400">
              © {{ new Date().getFullYear() }} Alben N. Gacayan. All rights reserved.
            </p>
            <p class="text-gray-500 text-sm mt-2">
              Crafted with 
              <span class="text-purple-400">♥</span> 
              using Vue.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Decorative Background Elements -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- Animated Purple Glow -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px] animate-pulse"></div>
      <!-- Animated Blue Glow with Delay -->
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
    </div>
  </div>
</template>

<script setup>
// Import required Vue composables and components
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import SocialLinks from './SocialLinks.vue'

// Route handling for conditional rendering
const route = useRoute()
const isHomePage = computed(() => route.path === '/')

// Skills list for the footer section
const skills = [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Vue.js',
  'Network Setup',
  'Hardware & Software Troubleshooting',
  'Operating Systems: Windows',
  'System Installation & Configuration',
  'Remote Support & Diagnostics',
  'Technical Support & Assistance',
  'Problem-Solving',
  'Customer Service',
  'Adaptability',
  'Continuous Learning'
]

// Component props definition
defineProps({
  // Page title (optional)
  title: {
    type: String,
    required: true
  },
  // Maximum width class for content container
  maxWidth: {
    type: String,
    default: 'max-w-4xl'
  }
})
</script>

<style scoped>
/* Custom animation for background glow effects */
@keyframes slow-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

/* Slower pulse animation for background elements */
.animate-pulse {
  animation: slow-pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Animation delay for second glow effect */
.delay-1000 {
  animation-delay: 1s;
}
</style> 