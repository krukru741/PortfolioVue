<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-[#1C1C1C] to-gray-900 text-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 px-6 py-4 bg-gray-900/80 backdrop-blur-sm">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Theme Toggle -->
        <button @click="toggleTheme" class="text-white hover:text-purple-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-white hover:text-purple-400 transition-colors text-lg"
            active-class="text-purple-400">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Subtle Background Decoration -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-20">
      <div class="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-500/20 rounded-full filter blur-[100px]"></div>
      <div class="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navigation = [
  { name: 'Expertise', href: '/expertise' },
  { name: 'History', href: '/history' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Base styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-[#1C1C1C] text-white;
  font-family: 'Inter', sans-serif;
}

.container {
  @apply max-w-7xl mx-auto px-4;
}
</style> 