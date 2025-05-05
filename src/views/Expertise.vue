<!-- src/views/Expertise.vue -->
<!-- 
  Expertise.vue - Skills and Technologies Component
  This component displays professional skills and technologies used,
  featuring animated progress bars and interactive technology cards.
-->
<template>
  <PageLayout title="Expertise" max-width="max-w-6xl">
    <!-- Skills Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(category, index) in skillCategories" 
        :key="index"
        class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
      >
        <!-- Category Title -->
        <h2 class="text-2xl font-semibold mb-6 text-purple-400">{{ category.title }}</h2>
        <!-- Skills List with Progress Bars -->
        <ul class="space-y-4">
          <li 
            v-for="skill in category.skills" 
            :key="skill.name"
            class="flex items-center"
          >
            <div class="w-full">
              <!-- Skill Name and Percentage -->
              <div class="flex justify-between mb-1">
                <span class="text-white">{{ skill.name }}</span>
                <span class="text-purple-400">{{ skill.level }}%</span>
              </div>
              <!-- Animated Progress Bar -->
              <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-purple-500 rounded-full transition-all duration-1000"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Technologies Section -->
    <div class="mt-20">
      <h2 class="text-3xl font-semibold text-center mb-12">Technologies I Work With</h2>
      <!-- Technology Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="tech in technologies" 
          :key="tech.name"
          class="flex flex-col items-center p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg hover:bg-purple-500/10 transition-colors group"
        >
          <img :src="tech.icon" :alt="tech.name" class="w-8 h-8 mb-2 tech-icon group-hover:scale-110 transition-transform">
          <span class="text-xs text-center text-gray-300">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
// Import required components and composables
import { ref } from 'vue'
import PageLayout from '../components/PageLayout.vue'

// Skill categories with proficiency levels
const skillCategories = ref([
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 35 },
      { name: 'Java', level: 30 },
      { name: 'JavaScript', level: 35 },
      { name: 'SQL', level: 20 },
      { name: 'C#', level: 15 },
    ]
  },
  {
    title: 'Development',
    skills: [
      { name: 'Android Development', level: 25 },
      { name: 'Desktop Applications', level: 10 },
      { name: 'Database Management', level: 15 },
      { name: 'REST APIs', level: 10 }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git Version Control', level: 30 },
      { name: 'VS Code', level: 45 },
      { name: 'Android Studio', level: 30 },
      { name: 'Firebase', level: 30 }
    ]
  }
])

// Technology stack with icons from Simple Icons CDN
const technologies = ref([
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/python.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/java.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/css3.svg' },
  { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/android.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/firebase.svg' },
  { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sqlite.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/git.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg' },
])
</script>

<style scoped>
/* Technology icon styling */
.tech-icon {
  filter: invert(1);      /* Convert black SVG to white */
  opacity: 0.9;           /* Slight transparency by default */
  transition: all 0.3s ease;  /* Smooth transition for hover effects */
}

/* Hover effect for technology icons */
.tech-icon:hover {
  opacity: 1;             /* Full opacity on hover */
  transform: scale(1.1);  /* Slight scale up on hover */
}
</style> 