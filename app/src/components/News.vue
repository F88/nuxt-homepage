<template>
  <v-row class="pa-5">
    <v-card v-for="article in documents" :key="article.id" class="mx-auto" max-width="300">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ article.title }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">
        {{ article.publishedAt.toDate() }}
      </v-card-subtitle>
      <v-card-text class="text--primary">
        <div>{{ article.body }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" text>
          Share
        </v-btn>
        <v-btn color="orange" text>
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
import firebase from 'assets/firebase.js'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

export const db = firebase.firestore()

export default {
  data () {
    return {
      documents: [
        // { id: '1', title: 'title1', body: 'boby', publishedAt: new Date('2020-01-01T00:00:00').getTime() },
        // { id: '2', title: 'title2', body: 'boby', publishedAt: new Date('2020-01-02T00:00:00').getTime() }
      ]
    }
  },
  firestore: {
    documents: db.collection('news').orderBy('publishedAt', 'desc')
  }
}
</script>
