<template>
  <v-app>
    <AppBarAndDrawer>
      <v-content>
        <router-view />
      </v-content>
    </AppBarAndDrawer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppBarAndDrawer from '@/components/organisms/AppBarAndDrawer.vue'

@Component({
  components: {
    AppBarAndDrawer
  }
})
export default class App extends Vue {}
</script>
