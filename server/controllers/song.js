const Model = require('../model');
const { Song } = Model;

const songController = {
  all(req, res) {
    // Returns all songs
    Song.find({})
      .exec((err, songs) => res.json(songs))
  }
};

module.exports = songController;
