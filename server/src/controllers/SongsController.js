const { Song } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 20
      })
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'Une erreur est apparue'
      })
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'Une erreur est apparue'
      })
    }
  },
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'Une erreur est apparue'
      })
    }
  },
  async put(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (error) {
      res.status(500).send({
        error: 'Une erreur est apparue'
      })
    }
  }
}
