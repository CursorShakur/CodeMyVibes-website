<template>
  <v-container fluid class="why-us-section py-16">
    <v-row justify="center">
      <v-col cols="12" class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold">
          Why Partner with Leigh Versatile?
        </h2>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto why-us-card" height="100%">
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-rocket-launch</v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">AI Enablement Focus</h3>
            <p class="text-body-1">
              We empower your team, transferring skills and methodology, not just delivering black-box solutions.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto why-us-card" height="100%">
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-check-decagram</v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">Proven Methodology</h3>
            <p class="text-body-1">
              Our unique, structured CodeMyVibe™ process bridges the gap between domain knowledge and AI development.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto why-us-card" height="100%">
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-lightbulb-group</v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">Industry Expertise</h3>
            <p class="text-body-1">
              Deep experience in Biotech and Cybersecurity means we understand your specific challenges.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto why-us-card" height="100%">
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-map-marker</v-icon>
            <h3 class="text-h5 font-weight-bold mb-4">Local DMV Presence</h3>
            <p class="text-body-1">
              Based in the region, we offer accessible partnership and understand the local business landscape.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.why-us-section {
  background-color: var(--v-surface-variant-base);
}

.why-us-card {
  transition: transform 0.3s ease;
}

.why-us-card:hover {
  transform: translateY(-8px);
}
</style> 