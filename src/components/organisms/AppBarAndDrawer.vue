<template>
  <div>
    <v-app-bar
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" link :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class HelloVue extends Vue {
  drawer = true
  items = [
    { icon: 'mdi-contacts', text: 'Contacts', to: { path: '/all-people' } },
    { icon: 'mdi-history', text: 'Frequently contacted', to: { path: '/' } },
    { icon: 'mdi-content-copy', text: 'Duplicates', to: { path: '/' } },
    { icon: 'mdi-settings', text: 'Settings', to: { path: '/' } },
    { icon: 'mdi-message', text: 'Send feedback', to: { path: '/' } },
    { icon: 'mdi-help-circle', text: 'Help', to: { path: '/' } },
    { icon: 'mdi-cellphone-link', text: 'App downloads', to: { path: '/' } },
    { icon: 'mdi-keyboard', text: 'Go to the old version', to: { path: '/' } }
  ]
}
</script>
