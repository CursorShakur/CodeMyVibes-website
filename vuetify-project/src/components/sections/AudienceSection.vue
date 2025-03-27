<template>
  <v-container fluid class="audience-section py-16">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-6">
          Specialized AI Enablement for DMV's Leading Sectors
        </h2>
        <p class="text-h6">
          We partner with Small and Medium-sized Businesses across the Washington DC, Maryland, and Virginia (DMV) region, providing targeted AI enablement for domain experts in sectors such as:
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto audience-card" flat>
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-dna</v-icon>
            <div class="text-h6">Biotechnology & Life Sciences</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto audience-card" flat>
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-shield-lock</v-icon>
            <div class="text-h6">Cybersecurity</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto audience-card" flat>
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-office-building</v-icon>
            <div class="text-h6">Government Contracting</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto audience-card" flat>
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-briefcase</v-icon>
            <div class="text-h6">Professional Services</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto audience-card" flat>
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-school</v-icon>
            <div class="text-h6">Research Institutions & Education</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto audience-card" flat>
          <v-card-text class="text-center">
            <v-icon size="48" color="primary" class="mb-4">mdi-handshake</v-icon>
            <div class="text-h6">Non-Profits & Associations</div>
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
.audience-section {
  background: linear-gradient(135deg, var(--v-primary-lighten5), var(--v-background-base));
}

.audience-card {
  transition: transform 0.3s ease;
  background-color: transparent !important;
}

.audience-card:hover {
  transform: translateY(-8px);
}
</style> 