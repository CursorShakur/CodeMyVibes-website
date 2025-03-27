<template>
  <v-app>
    <v-main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <ServicesSection />
      <AudienceSection />
      <WhyUsSection />
      <CallToAction />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import ProblemSection from '@/components/sections/ProblemSection.vue'
import SolutionSection from '@/components/sections/SolutionSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import AudienceSection from '@/components/sections/AudienceSection.vue'
import WhyUsSection from '@/components/sections/WhyUsSection.vue'
import CallToAction from '@/components/sections/CallToAction.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style>
:root {
  --v-primary-base: #4f46e5;
  --v-primary-lighten5: #eef2ff;
  --v-primary-darken2: #3730a3;
  --v-surface-base: #ffffff;
  --v-surface-variant-base: #f8fafc;
  --v-background-base: #ffffff;
  --v-border-base: #e2e8f0;
  --v-text-primary: #1e293b;
  --v-text-secondary: #475569;
}

.v-application {
  line-height: 1.6;
  color: var(--v-text-primary);
}

.text-h2,
.text-h3,
.text-h4,
.text-h5,
.text-h6 {
  font-family: 'Roboto', sans-serif !important;
  letter-spacing: -0.5px;
  color: var(--v-text-primary);
}

.text-body-1,
.text-body-2 {
  font-family: 'Roboto', sans-serif !important;
  color: var(--v-text-secondary);
}

.v-card {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
  border: 1px solid var(--v-border-base) !important;
  border-radius: 12px !important;
}

.v-btn {
  text-transform: none !important;
  letter-spacing: 0 !important;
  font-weight: 500 !important;
}

.v-btn--size-x-large {
  padding: 0 32px !important;
  min-height: 56px !important;
}

.section-title {
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  margin-bottom: 1.5rem !important;
}

.section-subtitle {
  font-size: 1.25rem !important;
  line-height: 1.6 !important;
  color: var(--v-text-secondary) !important;
}
</style>
