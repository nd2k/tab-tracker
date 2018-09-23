<template>
  <v-card>
    <div class="white elevation-2">
      <v-toolbar flat dense dark class="cyan">
        <v-toolbar-title>Musiques</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
        @click="navigateTo({ name: 'songs-create'})"
        fab
        medium
        absolute
        right
        bottom
        class="blue-grey lighten-2">
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <v-container>
      <div v-for="song in songs" :key="song.id" class="song">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
            <v-btn
              class="cyan"
              dark
              @click="navigateTo({ name: 'song', params: { songId: song.id}})"
            >
              Détails
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <img :src="song.albumImage" class="album-image">
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data() {
    return {
      songs: []
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>

