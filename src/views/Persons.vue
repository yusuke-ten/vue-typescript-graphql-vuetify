<template>
  <v-container>
    <h1>This is an about page</h1>
    {{ person }}
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import fetchPersonQuery from '../graphql/querys/person.graphql'

@Component({
  apollo: {
    person: fetchPersonQuery
  }
})
export default class Persons extends Vue {}
</script>
