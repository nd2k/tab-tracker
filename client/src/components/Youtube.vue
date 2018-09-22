<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <div class="white elevation-2">
          <v-toolbar flat dense dark class="cyan">
            <v-toolbar-title>Youtube Video</v-toolbar-title>
          </v-toolbar>
        </div>
        <v-container>
          <v-layout align-center>
            <youtube 
              :video-id="youtubeId"
              :player-width="700"
              :player-height="320"
              @ready="ready">
            </youtube>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>      
</template>

<script>
export default {
  methods: {
    ready(event) {
      this.player = event.target
    }
  },
  props: ['youtubeId']
}
</script>
