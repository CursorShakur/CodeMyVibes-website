<template>
  <v-container fluid class="services-section py-16">
    <v-row justify="center">
      <v-col cols="12" class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-6">
          Our CodeMyVibe™ Service Tiers
        </h2>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="mx-auto service-card" height="100%">
          <v-card-title class="text-h4 font-weight-bold primary--text">
            AI Readiness Assessment
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-6">
              Low-friction, AI-reviewed virtual assessments to identify high-impact AI opportunities within your existing workflows. Ideal for getting started.
            </p>
            <h3 class="text-h6 font-weight-bold mb-4">Includes:</h3>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Workflow Analysis</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Opportunity Identification Report</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Basic AI Tool Recommendations</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto service-card" height="100%">
          <v-card-title class="text-h4 font-weight-bold primary--text">
            AI Enablement Training
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-6">
              Hands-on workshops and coaching to empower your domain experts with our methodology and practical "vibe coding" skills.
            </p>
            <h3 class="text-h6 font-weight-bold mb-4">Includes:</h3>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Targeted Skills Workshops</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Guided Project Implementation</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Best Practices & Tooling Setup</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto service-card" height="100%">
          <v-card-title class="text-h4 font-weight-bold primary--text">
            Custom AI Workflow Solutions
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-6">
              End-to-end development of enterprise-grade AI-assisted workflows, integrating custom solutions tailored to your specific business challenges.
            </p>
            <h3 class="text-h6 font-weight-bold mb-4">Includes:</h3>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Deep Dive Requirements Analysis</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Custom Solution Architecture</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Deployment & Ongoing Support</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-12">
      <v-col cols="12" class="text-center">
        <v-btn
          color="primary"
          x-large
          rounded
          class="px-8"
        >
          Learn More About Our Services
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.services-section {
  background-color: var(--v-surface-variant-base);
}

.service-card {
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
}
</style> 