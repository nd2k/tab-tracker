<template>
  <v-card>
    <div class="white elevation-2">
      <v-toolbar flat dense dark class="cyan">
        <v-toolbar-title>Rechercher</v-toolbar-title>
      </v-toolbar>
    </div>
    <v-container>
      <v-text-field
        label="Rechercher par titre, album, ou genre"
        v-model="search">
      </v-text-field>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search(value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$router.query.search': {
      immediate: true,
      handler(value) {
        this.search = value
      }
    }
  }
}
</script>

<style>
</style>
