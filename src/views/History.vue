<!-- src/views/History.vue -->
<template>
  <PageLayout title="Professional History" max-width="max-w-4xl">
    <!-- Work Experience -->
    <section class="mb-20">
      <h2 class="text-3xl font-semibold mb-12 text-purple-400">Work Experience</h2>
      <div class="space-y-12">
        <div 
          v-for="(job, index) in experience" 
          :key="index"
          class="relative pl-8 md:pl-0"
        >
          <!-- Timeline for medium and larger screens -->
          <div 
            class="hidden md:block absolute left-1/2 h-full w-0.5 bg-purple-500/30" 
            v-if="index !== experience.length - 1"
          ></div>
          
          <div class="md:grid md:grid-cols-2 md:gap-8 relative">
            <!-- Timeline dot -->
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900"></div>
            
            <!-- Date -->
            <div class="md:text-right mb-4 md:mb-0 md:pr-8">
              <span class="text-purple-400 font-semibold">{{ job.period }}</span>
            </div>

            <!-- Content -->
            <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 class="text-xl font-semibold mb-2">{{ job.title }}</h3>
              <h4 class="text-purple-400 mb-4">{{ job.company }}</h4>
              <ul class="text-gray-300 mb-4 space-y-2">
                <li v-for="(duty, idx) in job.duties" :key="idx" class="flex items-start">
                  <span class="text-purple-400 mr-2">•</span>
                  {{ duty }}
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in job.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section>
      <h2 class="text-3xl font-semibold mb-12 text-purple-400">Education</h2>
      <div class="space-y-8">
        <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 class="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
            <span class="text-purple-400">2019 - 2023</span>
          </div>
          <h4 class="text-lg text-purple-400 mb-4">University of the Visayas</h4>
          <p class="text-gray-300">Thesis: Mobile-Based Online Blood Banking</p>
        </div>

        <!-- Certifications -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-purple-400 mb-6">Certifications</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="cert in certifications" 
              :key="cert.title"
              class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            >
              <h4 class="text-lg font-semibold mb-2">{{ cert.title }}</h4>
              <p class="text-purple-400 text-sm">{{ cert.date }}</p>
              <p class="text-gray-300 mt-2">{{ cert.provider }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue'
import PageLayout from '../components/PageLayout.vue'

const experience = ref([
  {
    period: 'Present',
    title: 'MIS Technician/Support',
    company: 'Diagnostic Services Center, Inc. - Cebu',
    duties: [
      'Diagnose and resolve hardware and software issues to ensure smooth operations.',
      'Maintain and repair computers, printers, and networking equipment.',
      'Perform system installations, updates, and routine maintenance.',
      'Manage database backups and ensure data integrity.',
      'Provide technical support to employees and ensure minimal downtime.'
    ],
    technologies: ['Hardware Troubleshooting', 'Network Setup', 'System Maintenance', 'Technical Support']
  },
  {
    period: 'June 2023',
    title: 'Frontend Developer Intern',
    company: 'Pixels Workspace Manila',
    duties: [
      'Assisted in developing web applications using modern technologies.',
      'Used HTML, CSS, JavaScript, React, and Vue.js to enhance front-end features.',
      'Collaborated with the team using Git for version control.'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Git']
  }
])

const certifications = ref([
  {
    title: 'Game Development using Unity',
    date: 'February 2019',
    provider: 'Training Provider'
  },
  {
    title: 'Introduction to UI/UX Design',
    date: 'June 2023',
    provider: 'Training Provider'
  },
  {
    title: 'Creative Web Design',
    date: 'December 2022 - March 2023',
    provider: 'Call Center Academy Training'
  }
])
</script> 