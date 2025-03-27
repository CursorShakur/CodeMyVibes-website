<template>
  <v-container fluid class="process-section py-16">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-6">
          Our AI Enablement Process
        </h2>
        <p class="text-h6">
          We guide your team through our structured methodology – Visualize, Instruct, Build, Enhance – enabling them to leverage AI effectively using natural language, or "vibe coding".
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto process-card" height="100%">
          <v-card-title class="text-h5 font-weight-bold d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-lightbulb-outline</v-icon>
            Visualize
          </v-card-title>
          <v-card-text>
            Collaboratively define clear objectives and requirements, capturing the expert's vision for the solution.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto process-card" height="100%">
          <v-card-title class="text-h5 font-weight-bold d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-pencil-outline</v-icon>
            Instruct
          </v-card-title>
          <v-card-text>
            Systematically translate requirements into precise, effective natural language prompts optimized for AI generation, incorporating foundational principles as needed.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto process-card" height="100%">
          <v-card-title class="text-h5 font-weight-bold d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-code-braces</v-icon>
            Build
          </v-card-title>
          <v-card-text>
            Guide AI tools to generate functional code iteratively, with expert validation and refinement loops.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="mx-auto process-card" height="100%">
          <v-card-title class="text-h5 font-weight-bold d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-rocket-launch-outline</v-icon>
            Enhance
          </v-card-title>
          <v-card-text>
            Apply expert review and structured testing to optimize, secure, and ensure the usability of the AI-generated solution.
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
.process-section {
  background-color: var(--v-background-base);
}

.process-card {
  transition: transform 0.3s ease;
  border-top: 4px solid var(--v-primary-base);
}

.process-card:hover {
  transform: translateY(-8px);
}
</style> 