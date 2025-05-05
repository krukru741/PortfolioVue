<!-- src/views/Home.vue -->
<template>
  <PageLayout title="" max-width="max-w-5xl">
    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 -mt-8">
      <!-- Profile Image -->
      <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
        <img
          src="/assets/gacayan alben.jpg"
          alt="Alben N. Gacayan"
          class="w-full h-full object-cover"
        >
      </div>

      <!-- Content -->
      <div class="text-center md:text-left">
        <!-- Social Links -->
        <div class="flex justify-center md:justify-start mb-4">
          <SocialLinks />
        </div>

        <!-- Name and Title -->
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Alben N. Gacayan</h1>
        <h2 class="text-2xl md:text-3xl text-purple-400 mb-6">Web Developer & IT Support Specialist</h2>
        
        <!-- Brief Introduction -->
        <p class="text-gray-300 text-lg mb-8 max-w-2xl">
          Dedicated professional with expertise in web development and IT support. 
          Specializing in creating user-friendly web applications and providing robust technical support solutions.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="/assets/resume/Alben N. Gacayan - Resume.pdf"
            target="_blank"
            class="group px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg hover:shadow-purple-500/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <router-link
            to="/projects"
            class="group px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg hover:shadow-purple-500/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18" transform="rotate(90 12 12)" />
            </svg>
            View Projects
          </router-link>
          <router-link
            to="/contact"
            class="group px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-purple-400 rounded-full hover:from-purple-500/10 hover:to-purple-500/20 transition-all duration-300 transform hover:scale-105 flex items-center border border-purple-500/50 shadow-lg hover:shadow-purple-500/25"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            Get in Touch
          </router-link>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue'
import PageLayout from '../components/PageLayout.vue'
import SocialLinks from '../components/SocialLinks.vue'
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 