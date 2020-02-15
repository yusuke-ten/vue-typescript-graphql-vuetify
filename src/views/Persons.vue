<template>
  <v-container>
    <h1>This is an about page</h1>
    {{ person }}
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import gql from 'graphql-tag'

@Component({
  apollo: {
    person: gql`
      query {
        person(personID: 4) {
          name
        }
      }
    `
  }
})
export default class Persons extends Vue {}
</script>
