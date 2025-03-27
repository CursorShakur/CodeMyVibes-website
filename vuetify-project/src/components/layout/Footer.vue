<template>
  <v-footer class="footer">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="4" class="text-center text-md-left">
          <p class="text-body-2">© 2025 Leigh Versatile. All rights reserved.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <p class="text-body-2">Serving the DMV (DC, Maryland, Virginia) Region.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-md-right">
          <v-btn text class="text-none mr-2">Home</v-btn>
          <v-btn text class="text-none mr-2">Services</v-btn>
          <v-btn text class="text-none">Contact</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.footer {
  background-color: var(--v-surface-base);
  border-top: 1px solid var(--v-border-base);
}
</style> 