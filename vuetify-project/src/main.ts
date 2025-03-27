/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

// Vuetify
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#4f46e5',
          'primary-lighten-5': '#eef2ff',
          'primary-darken-2': '#3730a3',
          surface: '#ffffff',
          'surface-variant': '#f8fafc',
          background: '#ffffff',
          'on-background': '#1e293b',
          'on-surface': '#1e293b',
          'on-primary': '#ffffff',
          border: '#e2e8f0',
          'text-primary': '#1e293b',
          'text-secondary': '#475569'
        }
      }
    }
  },
  defaults: {
    VCard: {
      elevation: 0,
      rounded: 'lg'
    },
    VBtn: {
      rounded: 'pill',
      elevation: 0
    }
  }
})

const app = createApp(App)
app.use(vuetify)

registerPlugins(app)

app.mount('#app')
