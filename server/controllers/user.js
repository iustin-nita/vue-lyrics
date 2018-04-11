const Model = require('../model');
const { User, Song } = Model;

const userController = {
  all(req, res) {
    // Returns all users
    User.find({})
      // alongside it's manufacturer
      // information
      .populate('song')
      .exec((err, users) => res.json(users))
  },
  byId(req, res) {
    const idParam = req.params.id;
    // Returns a single user
    // based on the passed in ID parameter
    User
      .findOne({ _id: idParam })
      // as well as it's manufacturer
      .populate('manufacturer')
      .exec((err, user) => res.json(user));
  },
  create(req, res) {
    const requestBody = req.body;
    // Creates a new record from a submitted form
    const newUser = new User(requestBody);
    // and saves the record to
    // the data base
    newUser.save((err, user) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log('success', res);
        res.send(user);
      }
    });
  },
  update(req, res) {
    const idParam = req.params.id;
    let user = req.body;
    // Finds a user to be updated
    User.findOne({ _id: idParam }, (err, data) => {
      // Updates the user payload
      data.email = user.email;
      data.username = user.username;
      data.password = user.password;
      data.song = user.song;
      // Saves the user
      data.save((err, updated) => res.json(updated));
    })
  },
  remove(req, res) {
    const idParam = req.params.id;
    // Removes a user
    User.findOne({ _id: idParam }).remove((err, removed) => res.json(idParam))
  }
};

module.exports = userController;
