
//homeController : RoutesConfig (handles routes of the whole application) 
(function (homeController) {

    homeController.init = function (app) {

        app.get("/", function (req, res) {
            
            res.render("index", { title : "Express + Vash" });
        });
    };


})(module.exports);