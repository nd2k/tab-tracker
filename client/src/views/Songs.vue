<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center class="ma-5">
        <v-flex xs12 md6 lg4 >
          <songs-search-panel />
          <songs-panel class="mt-4"/>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import SongsPanel from '@/components/SongsPanel'
import SongsSearchPanel from '@/components/SongsSearchPanel'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}
</script>


