const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      displayName: Joi.string(),
      avatar: Joi.string(),
      password: Joi.string().regex(new RegExp()),
      confirmPassword: Joi.string().regex(new RegExp())
    }

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: "Votre adresse email n'est pas valide"
          })
          break
        case 'password':
          res.status(400).send({
            error: `Votre mot de passe ne répond pas aux règles suivantes:
              <br>
              1. Il doit contenir que les caractères suivant: majuscule, minuscule, chiffre;<br>
              2. Il doit contenir entre 8 et 32 caractères`
          })
          break
        default:
          res.status(400).res({
            error: `Nous avons recontré un problème lors de l'enregistrement de votre utilisateur!`
          })
      }
    } else {
      next()
    }
  }
}
