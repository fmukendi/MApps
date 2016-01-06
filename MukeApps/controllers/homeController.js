
//homeController : RoutesConfig (handles routes of the whole application) 
(function (homeController) {
    
    var data = require("../data");

    homeController.init = function (app) {

        app.get("/", function (req, res) { // this is a call back. // it only success when it has res.render
            
            data.getNoteCategories(function (err, results) {

                res.render("index", {
                    title : "Express + Vash",
                    error: err,
                    categories: results
                });
            });

            
        });
    };


})(module.exports);