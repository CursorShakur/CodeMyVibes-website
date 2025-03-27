<template>
  <v-container fluid class="problem-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center mb-16">
          <h2 class="section-title">
            Turn Expertise into Action, Without Technical Bottlenecks
          </h2>
          <p class="section-subtitle">
            Does your organization struggle to translate deep domain knowledge into the custom tools and automated workflows needed to stay competitive? Relying on overburdened IT departments or costly external developers creates delays, stifles innovation, and leaves your subject-matter experts unable to fully leverage their insights. You need a way for your experts to directly drive the creation of solutions they need.
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card class="problem-card" height="100%" elevation="0">
            <v-card-item>
              <v-icon size="42" color="primary" class="mb-6">mdi-account-group</v-icon>
              <v-card-title class="text-h5 font-weight-bold pb-4">
                Skills Gap & Resource Strain
              </v-card-title>
              <v-card-text class="text-body-1 text-secondary">
                Your IT team is stretched thin, and specialized AI talent is scarce. With AI developers commanding $150K+ salaries and 6-month hiring cycles, the cost of delay compounds while your innovation backlog grows.
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card class="problem-card" height="100%" elevation="0">
            <v-card-item>
              <v-icon size="42" color="primary" class="mb-6">mdi-clock-outline</v-icon>
              <v-card-title class="text-h5 font-weight-bold pb-4">
                Slow Development Cycles
              </v-card-title>
              <v-card-text class="text-body-1 text-secondary">
                Watch weeks turn into months as your innovative ideas get stuck in development queues, losing competitive advantage with each passing day. Every delay means missed opportunities and market share.
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card class="problem-card" height="100%" elevation="0">
            <v-card-item>
              <v-icon size="42" color="primary" class="mb-6">mdi-lightbulb-outline</v-icon>
              <v-card-title class="text-h5 font-weight-bold pb-4">
                Underutilized Expertise
              </v-card-title>
              <v-card-text class="text-body-1 text-secondary">
                Your experts know exactly what solutions they need, but are forced to wait on technical teams – turning their innovative ideas into frustrating bottlenecks. Stop letting valuable insights get lost in translation.
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.problem-section {
  background-color: var(--v-surface-variant-base);
  position: relative;
}

.problem-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--v-border-base) 50%, transparent);
}

.problem-card {
  background-color: var(--v-surface-base) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.problem-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
}

.text-secondary {
  color: var(--v-text-secondary) !important;
}
</style> 