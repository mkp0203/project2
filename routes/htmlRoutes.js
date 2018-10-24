var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(fitness_db) {
      res.render("index", {
        msg: "Welcome!",
        examples: fitness_db
      });
    });
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  // blog route loads blog.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });




  // Load example page and pass in an example by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(fitness_db) {
      res.render("example", {
        example: fitness_db
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
