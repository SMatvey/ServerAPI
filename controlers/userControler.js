const mongoose = require("mongoose"),
    user = mongoose.model("Users");

exports.getListOfUsers = function (req, res) {
    user.find((err, users) => {
      if (err) res.send(err);

      res.json(users);
    });
}

exports.getUserByName = function(req,res) {
    user.find(
        {
            name: {$regex: req.params.name, $options:"i" }
        },
        (err, users) => {
            if (err) res.send(err);
            res.json(users);
        }
    );
}

exports.addUser = function(req,res) {
    let newUser = new user(req.body);
    newUser.save((err, user) => {
        if (err) res.send(err);
        res.json(users);
    })
};