<template>
  <v-container py-10 px-4>
    <h1>All People</h1>
    <v-list three-line>
      <template v-for="(people, index) in allPeople.people">
        <v-divider :key="index"></v-divider>

        <v-list-item :key="people.id">
          <v-list-item-content>
            <v-list-item-title
              v-html="people.name"
              class="title"
            ></v-list-item-title>
            <v-list-item-subtitle v-html="people.gender"></v-list-item-subtitle>
            <v-list-item-subtitle
              class="text--primary"
              v-if="people.species"
              v-html="people.species.name"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import gql from 'graphql-tag'
// import fetchPersonQuery from '../graphql/querys/person.graphql'

@Component({
  apollo: {
    allPeople: {
      query: gql`
        query {
          allPeople {
            totalCount
            people {
              id
              name
              gender
              species {
                name
              }
            }
          }
        }
      `
    }
  }
})
export default class AllPeople extends Vue {
  // data
  allPeople: {
    totalCount: number
    people: {
      id: string
      name: string
      gender: string
      species: { name: string }
    }[]
  } = {
    totalCount: 0,
    people: []
  }
  mounted() {
    console.log(this)
  }
}
</script>
