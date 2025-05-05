<!-- src/components/SocialLinks.vue -->
<template>
  <div class="flex gap-4">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      class="text-white hover:text-purple-400 transition-colors"
      :title="link.name"
    >
      <component :is="link.icon" class="w-8 h-8" />
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'GithubIcon'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'LinkedinIcon'
  }
])
</script> 