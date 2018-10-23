var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(fitness_db) {
      res.json(fitness_db);
    });
  });
  // Find one example
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Nutrition]
    }).then(function(fitness_db) {
      res.json(fitness_db);
    });
  });
  //Spoonacular API
  app.get("/api/recipes", function(req, res) {
    
  })

  // Create a new example
  app.post("/api/user", function(req, res) {
    console.log(req);
    db.User.create({name: req.body.name, email: req.body.email, password: req.body.password}).then(function(fitness_db) {
      res.json(fitness_db);
    });
  });

  // Delete an example by id
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(fitness_db) {
      res.json(fitness_db);
    });
  });
};
