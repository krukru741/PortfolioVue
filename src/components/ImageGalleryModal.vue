<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div 
      class="absolute inset-0 bg-black/90 backdrop-blur-sm"
      @click="close"
    ></div>
    
    <!-- Gallery Content -->
    <div class="relative z-10 w-full max-w-2xl mx-auto">
      <!-- Close Button -->
      <button 
        @click="close"
        class="absolute -top-3 -right-3 text-white/80 hover:text-white z-20 bg-purple-600 hover:bg-purple-700 rounded-full p-1.5 shadow-lg transition-all duration-200 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Main Image -->
      <div class="relative bg-gray-900/90 rounded-xl overflow-hidden shadow-2xl border border-purple-500/20">
        <img 
          :src="currentImage" 
          :alt="'Project image ' + (currentIndex + 1)"
          class="w-full h-full object-contain max-h-[50vh]"
        >
        
        <!-- Navigation Buttons -->
        <button 
          v-if="images.length > 1"
          @click="prevImage" 
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-purple-700 text-white p-1 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          v-if="images.length > 1"
          @click="nextImage" 
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-purple-700 text-white p-1 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Image Counter -->
        <div class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>

      <!-- Thumbnails -->
      <div v-if="images.length > 1" class="flex justify-center gap-1.5 mt-2">
        <button 
          v-for="(image, index) in images" 
          :key="index"
          @click="currentIndex = index"
          class="w-10 h-10 rounded-lg overflow-hidden transition-all duration-200 hover:scale-110 shadow-md"
          :class="{ 'ring-2 ring-purple-500 scale-110': currentIndex === index }"
        >
          <img 
            :src="image" 
            :alt="'Thumbnail ' + (index + 1)"
            class="w-full h-full object-cover"
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['close'])

const currentIndex = ref(0)
const currentImage = ref(props.images[0])

// Watch for modal open/close to handle body scroll
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    // Reset image index and prevent body scroll
    currentIndex.value = 0
    currentImage.value = props.images[0]
    document.body.style.overflow = 'hidden'
  } else {
    // Re-enable body scroll when modal closes
    document.body.style.overflow = ''
  }
})

watch(currentIndex, (newValue) => {
  currentImage.value = props.images[newValue]
})

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const close = () => {
  emit('close')
}

// Cleanup when component is unmounted
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fixed {
  position: fixed !important;
}
</style> 