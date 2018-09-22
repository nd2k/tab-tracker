<template>
  <v-toolbar 
    class="cyan"
    app
    fixed
    dark
  >
    <v-toolbar-title class="mr-4">
      <v-btn dark flat :to="{name: 'home'}">TabTrackers</v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn dark flat :to="{name: 'songs'}">Bibliothèque</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn dark flat :to="{name: 'login'}">Connection</v-btn>
      <v-btn dark flat :to="{name: 'register'}">Enregistrez-vous</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-btn dark flat @click="logout">Déconnection</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.pust({
        name: 'home'
      })
    }
  }
}
</script>


<style>
.v-toolbar__title {
  color: white;
}
</style>


