// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {
  var IDnum = 1;

  // Get all chirps
  app.get("/search", function(req, res) {

    var dbQuery = "SELECT * FROM pets WHERE animal_type = ? AND gender = ? AND age = ?";

    connection.query(dbQuery,[req.query.animal,req.query.gender,req.query.age], function(err, result) {
      if(err){
        console.log(err);
      } else{
      var newresult = result[0];
      // move to html routes
      res.render('search',newresult);
      // console.log(newresult);
    }
    });

  });

  app.get("/search/pets", function(req, res) {

   console.log("animal " + req.query.animal);
   console.log("gender " + req.query.gender);
   console.log("age " + req.query.age);


    var dbQuery = "SELECT * FROM pets WHERE animal_type = ? AND gender = ? AND age = ?";

    connection.query(dbQuery,[req.query.animal,req.query.gender,req.query.age],function(err, result) {
      if (err){
        console.log(err)
      } else {
        console.log(result);
      var newresult = result[0];
      // move to html routes
      
      res.render('search',{ animal: newresult});

      // console.log(newresult);
    }
    });


  



  });
  
};
  // Add a chirp
  // app.post("/api/new", function(req, res) {

  //   console.log("Chirp Data:");
  //   console.log(req.body);

  //   var dbQuery = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";

  //   connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
  //     console.log("Chirp Successfully Saved!");
  //     res.end();
  //   });

  // });


