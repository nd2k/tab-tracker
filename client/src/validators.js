export const notEmptyRules = [v => !!v || 'Le champ est obligatoire']
export const passwordRules = [
  v => !!v || 'Le champ est obligatoire',
  v => v.length >= 8 || 'Le champ doit contenir au moins 8 caractères'
]
