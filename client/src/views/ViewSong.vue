<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>
      <v-flex xs6 ml-4>
        <youtube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout> 

    <v-layout row mt-2>
      <v-flex xs6>
        <tab :song="song"/>
      </v-flex>
      <v-flex xs6 ml-4>
        <lyrics :song="song"/>
      </v-flex>
    </v-layout>    
  </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/SongMetadata'
import Youtube from '@/components/Youtube'
import Lyrics from '@/components/Lyrics'
import Tab from '@/components/Tab'

export default {
  data() {
    return {
      song: {}
    }
  },
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tab
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 400px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
