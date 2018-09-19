<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center row fill-height>
        <v-flex xs10 md6 lg4 >
          <v-card>
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Enregistrez-vous</span>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container>
              <div>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Votre adresse email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="displayName"
                    :rules="notEmptyRules"
                    label="Votre nom"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="avatar"
                    :rules="notEmptyRules"
                    label="Votre avatar"
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
                  <v-text-field
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    label="Confirmez votre mot de passe"
                    type="password"
                    :counter="8"
                    required
                  ></v-text-field>
                  <v-btn
                    :disabled="!valid"
                    @click="register"
                  >
                    Enregistrez-vous
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
export default {
  data: () => ({
    valid: false,
    email: '',
    displayName: '',
    avatar: '',
    password: '',
    confirmPassword: '',
    emailRules: [
      v => !!v || 'Votre adresse e-mail est obligatoire',
      v => /.+@.+/.test(v) || 'Votre adresse e-mail doit être valide'
    ],
    notEmptyRules: [v => !!v || 'Le champ est obligatoire'],
    passwordRules: [
      v => !!v || 'Le champ est obligatoire',
      v => v.length >= 8 || 'Le champ doit contenir au moins 8 caractères'
    ],
    confirmPasswordRules: [
      v => !!v || 'Le champ est obligatoire',
      v => v.length >= 8 || 'Le champ doit contenir au moins 8 caractères',
      v => v === v.password || 'Les mots de passe ne correspondent pas'
    ]
  }),
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        displayName: this.displayName,
        avatar: this.avatar,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
      console.log(response.data)
    },
    clear() {
      this.email = this.displayName = this.avatar = this.password = this.confirmPassword =
        ''
    }
  }
}
</script>
