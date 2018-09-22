<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center class="ma-5">
        <v-flex xs12 md6 lg4 >
          <v-alert
            :value="error"
            type="error"
            v-html="error"
          >
          </v-alert>
          <v-card>
            <div class="white elevation-2">
              <v-toolbar flat dense dark class="cyan">
                <v-toolbar-title>Connectez-vous</v-toolbar-title>
              </v-toolbar>
            </div>
            <v-container>
              <div>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="email"
                    :rules="notEmptyRules"
                    label="Votre adresse email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Votre mot de passe"
                    type="password"
                    :counter="8"
                    required
                  ></v-text-field>                
                  <v-btn
                    class="cyan"
                    id="register"
                    :disabled="!valid"
                    @click="login"
                  >
                    Connectez-vous
                  </v-btn>
                  <v-btn @click="clear">clear</v-btn>
                </v-form>
              </div>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import { notEmptyRules, passwordRules } from '@/validators'

export default {
  data: () => ({
    valid: false,
    email: '',
    displayName: '',
    avatar: '',
    password: '',
    confirmPassword: '',
    error: null,
    notEmptyRules,
    passwordRules
  }),
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    clear() {
      this.email = this.displayName = this.avatar = this.password = this.confirmPassword =
        ''
    }
  }
}
</script>

<style scoped>
</style>

