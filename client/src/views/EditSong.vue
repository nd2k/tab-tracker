<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 v-if="error">
        <v-alert
          :value="error"
          type="error"
          v-html="error"
        >
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs4>
        <v-card>
          <div class="white elevation-2">
            <v-toolbar flat dense dark class="cyan">
              <v-toolbar-title>Information à propos du morceau</v-toolbar-title>
            </v-toolbar>
          </div>
          <v-container>
            <div>
              <v-form>
                <v-text-field
                  v-model="song.title"
                  label="Titre"
                  :rules="notEmptyRules"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="song.artist"
                  label="Artiste"
                  :rules="notEmptyRules"
                ></v-text-field> 
                <v-text-field
                  v-model="song.genre"
                  label="Genre"
                  :rules="notEmptyRules"
                ></v-text-field>
                <v-text-field
                  v-model="song.album"
                  label="Album"
                  :rules="notEmptyRules"
                ></v-text-field> 
                <v-text-field
                  v-model="song.albumImage"
                  label="Image de l'album"
                  :rules="notEmptyRules"
                ></v-text-field> 
                <v-text-field
                  v-model="song.youtubeId"
                  label="Youtube ID"
                  :rules="notEmptyRules"
                ></v-text-field>               
              </v-form>
            </div>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs8 ml-4>
        <v-card>
          <div class="white elevation-2">
            <v-toolbar flat dense dark class="cyan">
              <v-toolbar-title>Données pratiques</v-toolbar-title>
            </v-toolbar>
          </div>
          <v-container>
            <div>
              <v-form>
                <v-textarea
                  solo
                  v-model="song.tab"
                  label="Tab"
                  :rules="notEmptyRules"
                  multi-line>
                </v-textarea>
                <v-textarea
                  solo
                  v-model="song.lyrics"
                  label="Paroles"
                  :rules="notEmptyRules"
                  multi-line>
                </v-textarea>
              </v-form>
            </div>
          </v-container>
        </v-card>
        <v-btn
          class="cyan"
          dark
          @click="save"
        >
          Sauvegader
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import { notEmptyRules } from '@/validators'

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      notEmptyRules,
      error: null
    }
  },
  methods: {
    async save() {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      )
      if (!areAllFieldsFilledIn) {
        this.error = 'Pouvez-vous remplir tous les champs'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted() {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
textarea {
  overflow: hidden;
}
</style>
