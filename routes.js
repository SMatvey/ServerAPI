User = require("./models/UserModels");
userController = require("./controlers/userControler.js")

module.exports = function (app) {
  app.get("/user", userController.getListOfUsers);
  app.get("/user:name", userController.getUserByName);
  app.post("/user", userController.addUser);
  //   res.send(users);
  // });
};
