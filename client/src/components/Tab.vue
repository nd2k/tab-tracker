<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <div class="white elevation-2">
          <v-toolbar flat dense dark class="cyan">
            <v-toolbar-title>Tab</v-toolbar-title>
          </v-toolbar>
        </div>
        <v-container>
          <textarea
            readonly
            v-model="song.tab">
          </textarea>
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

