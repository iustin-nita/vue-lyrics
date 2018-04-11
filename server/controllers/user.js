const Model = require('../model');
const { User, Song } = Model;

const userController = {
  all(req, res) {
    // Returns all users
    User.find({})
      // alongside it's songs
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
      // as well as it's songs
      .populate('song')
      .exec((err, user) => res.json(user));
  },
  create(req, res) {
    const requestBody = req.body;
    // if (requestBody.email && requestBody.username && requestBody.password) {
      // Creates a new record from a submitted form
      const newUser = new User(requestBody);
      // and saves the record to
      // the data base
      newUser.save((user, err) => {
        console.log(user, err);
        if (err) {
          console.log(newUser);
          console.log(err.errmsg);
          res.send(err.errmsg);
        } else {
          console.log('success', res);
          res.send(user);
        }
      });
    // } else {
      // res.send({
        // throw: new Error()
      // });
    // }
  },
  update(req, res) {
    const idParam = req.params.id;
    let user = req.body;
    // Finds a user to be updated
    User.findOne({ _id: idParam }, (err, data) => {
      // Updates the user payload
      data.email = user.email;
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
