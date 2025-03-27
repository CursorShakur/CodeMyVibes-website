<template>
  <v-container fluid class="hero-section pa-0">
    <div class="hero-gradient"></div>
    <v-container class="hero-content">
      <v-row align="center" justify="center" style="min-height: 90vh;">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <div class="headline-wrapper">
            <h1 class="text-h1 font-weight-black" style="font-size: 3.5rem !important; line-height: 1.2 !important;">
              Unlock Your Team's Problem-Solving Power
            </h1>
            <h2 class="rotating-subtitle text-h3 font-weight-medium mb-6">
              <span class="subtitle-container">
                <span class="static-with">With</span>
                <span class="rotating-container">
                  <span class="bracket">[</span>
                  <span class="rotating-text">{{ currentTool }}</span>
                  <span class="bracket">]</span>
                </span>
              </span>
            </h2>
          </div>
          <h2 class="text-h5 mb-6 text-secondary" style="font-weight: 400 !important; line-height: 1.6 !important;">
            Empower your team to build custom solutions without coding. Our CodeMyVibe™ process turns your expertise into productivity tools faster.
          </h2>
          <p class="text-body-1 mb-12 text-secondary" style="max-width: 800px; margin: 0 auto;">
            Based in the DMV region, we help SMBs accelerate innovation by turning expert knowledge into working applications. No traditional coding required.
          </p>
          <v-btn
            color="primary"
            size="x-large"
            rounded
            elevation="2"
            class="px-8 text-white"
          >
            Get Started Today
            <v-icon right class="ml-2">mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const tools = [
  'AI-Powered Tools',
  'LLM Technology',
  'Vibe-Coded Solutions',
  'Natural Language Tools',
  'Smart Automation',
  'Intelligent Workflows'
]

const currentTool = ref(tools[0])
let currentIndex = 0
let intervalId: number | null = null

const rotateTool = () => {
  currentIndex = (currentIndex + 1) % tools.length
  currentTool.value = tools[currentIndex]
}

onMounted(() => {
  intervalId = window.setInterval(rotateTool, 3000)
})

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 150%, var(--v-primary-lighten5) 0%, transparent 50%),
    radial-gradient(circle at 80% -50%, var(--v-primary-lighten5) 0%, transparent 50%),
    linear-gradient(180deg, var(--v-background-base) 0%, var(--v-surface-base) 100%);
  opacity: 0.8;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.text-secondary {
  color: var(--v-text-secondary) !important;
}

:deep(.v-btn) {
  font-size: 1.1rem;
}

.headline-wrapper {
  margin-bottom: 1.5rem;
}

.rotating-subtitle {
  font-size: 2rem !important;
  opacity: 0.9;
  color: var(--v-primary-base);
}

.subtitle-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.static-with {
  display: inline-block;
}

.rotating-container {
  display: inline-flex;
  align-items: center;
  min-width: 300px;
  position: relative;
}

.rotating-text {
  display: inline-block;
  text-align: center;
  min-width: 250px;
  padding: 0 10px;
  transition: opacity 0.3s ease;
}

.bracket {
  font-size: 2.2rem;
  font-weight: 300;
  opacity: 0.7;
  color: var(--v-primary-base);
}
</style> 