<!-- src/views/Projects.vue -->
<template>
  <PageLayout title="Projects" max-width="max-w-6xl">
    <div class="space-y-12">
      <!-- Project Cards -->
      <div 
        v-for="(project, index) in projects" 
        :key="project.title"
        class="project-card bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-500/20 transform transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/40"
      >
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Project Image -->
          <div class="w-full md:w-1/3">
            <div 
              class="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              @click="openGallery(project)"
            >
              <img 
                :src="project.images[0]"
                :alt="project.title"
                class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              >
              <!-- Image Count Badge -->
              <div 
                v-if="project.images.length > 1"
                class="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ project.images.length }}
              </div>
            </div>
          </div>
          <!-- Project Details -->
          <div class="w-full md:w-2/3 space-y-6">
            <div>
              <h3 class="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">{{ project.title }}</h3>
              <p class="text-gray-300 leading-relaxed">{{ project.description }}</p>
            </div>
            
            <!-- Tech Stack -->
            <div>
              <h4 class="text-sm font-semibold text-purple-400 mb-3">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-purple-500/10 rounded-full text-sm text-purple-300 hover:bg-purple-500/20 transition-colors cursor-default"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Key Features -->
            <div>
              <h4 class="text-sm font-semibold text-purple-400 mb-3">Key Features</h4>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li 
                  v-for="feature in project.features" 
                  :key="feature"
                  class="flex items-start space-x-2 text-gray-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Project Links -->
            <div class="flex flex-wrap gap-3 mt-4">
              <a 
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 group"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
              <a 
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Gallery Modal -->
    <ImageGalleryModal
      :is-open="isGalleryOpen"
      :images="selectedProjectImages"
      @close="closeGallery"
    />
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue'
import PageLayout from '../components/PageLayout.vue'
import ImageGalleryModal from '../components/ImageGalleryModal.vue'

// Gallery state
const isGalleryOpen = ref(false)
const selectedProjectImages = ref([])

const openGallery = (project) => {
  selectedProjectImages.value = project.images
  isGalleryOpen.value = true
}

const closeGallery = () => {
  isGalleryOpen.value = false
}

const projects = ref([
  {
    title: 'Mobile-based Online Blood Bank',
    description: 'A comprehensive Android application developed as a thesis project to facilitate blood donation and requests. The app connects blood donors with those in need, streamlining the blood donation process.',
    images: [
      '/image/bloodbank/login.jpg',
      '/image/bloodbank/selectreg.jpg',
      '/image/bloodbank/registerdonor.jpg',
      '/image/bloodbank/resetpass.jpg',
      '/image/bloodbank/request.jpg',
      '/image/bloodbank/navmain.jpg',
      '/image/bloodbank/main.jpg',
      '/image/bloodbank/main2.jpg',

    ],
    github: 'https://github.com/krukru741/BloodBank',
    technologies: [
      'Java',
      'Android Studio',
      'SQLite',
      'XML',
      'Firebase',
      'REST APIs',
      'Git'
    ],
    features: [
      'User registration and authentication system',
      'Real-time blood donation requests',
      'Donor-recipient matching system',
      'Blood bank inventory management',
      'Emergency request notifications'
    ]
  },
  {
    title: 'Account Checker Garena',
    description: 'An educational project developed in Python for automating user account checks on the Garena platform. It hashes passwords, handles captchas, manages logins, retrieves user info, and performs bulk account checks from a file. Results are logged to an output file, with progress displayed using tqdm.',
    images: [
      'https://placehold.co/600x400/1a1a1a/purple?text=Account+Checker',
      'https://placehold.co/600x400/1a1a1a/purple?text=Login+Process',
      'https://placehold.co/600x400/1a1a1a/purple?text=Bulk+Check',
      'https://placehold.co/600x400/1a1a1a/purple?text=Results+View'
    ],
    github: 'https://github.com/krukru741/Acc-Checker',
    demo: null, // Set to null if no demo available
    technologies: [
      'Python',
      'PyQt5',
      'MD5',
      'SHA-256',
      'tqdm',
      'Requests',
      'File I/O'
    ],
    features: [
      'MD5 and SHA-256 password hashing',
      'Automated captcha handling',
      'Session-based login management',
      'User information retrieval',
      'Bulk account verification',
      'Progress tracking with tqdm'
    ]
  },
  {
    title: 'Payroll Management System',
    description: 'A comprehensive desktop application for managing employee information, payroll processing, and HR administration built with Python and Tkinter.',
    images: [
      '/image/payroll/login.png',
      '/image/payroll/EMPLOYEE REGISTRATION FORM.png',
      '/image/payroll/PAYROLL CALCU.png',
      '/image/payroll/PAYSLIP.png',
      '/image/payroll/PAYROLL RECORD.png',
      '/image/payroll/PASSWORD MANAGEMENT.png'
    ],
    github: 'https://github.com/krukru741/payroll-management-system',
    technologies: [
      'Python 3.x',
      'Tkinter',
      'sqlite3',
      'pandas',
      'reportlab',
      'bcrypt',
      'logging'
    ],
    features: [
      'User Authentication System',
      'Employee Profile Management',
      'Government Contribution Calculations',
      'Payslip Generation and Printing',
      'Modern and intuitive UI'
    ]
  }
])
</script>

<style scoped>
.project-card {
  position: relative;
  isolation: isolate;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(147, 51, 234, 0.06),
    transparent 40%
  );
  border-radius: 0.75rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 1;
}
</style>

<script>
// Add this to your component to enable the gradient effect
if (typeof window !== 'undefined') {
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.project-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
</script> 