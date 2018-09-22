<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <div class="white elevation-2">
          <v-toolbar flat dense dark class="cyan">
            <v-toolbar-title>Information à propos du morceau</v-toolbar-title>
          </v-toolbar>
        </div>
        <v-container ma-4>
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
              <div>
                <v-btn class="cyan" dark flat :to="{name: 'song-edit'}">Editer</v-btn>
              </div>
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImage" class="album-image">
              <div class="song-album">
                {{song.album}}
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>      
</template>

<script>
export default {
  props: ['song']
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 26px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 15px;
}
.song-album {
  font-size: 16px;
}
.album-image {
  width: 80%;
  margin: 0 auto;
}
</style>

