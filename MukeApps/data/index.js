
//data : data Service (handles data routes of the whole application) 
(function (data) {
    
    var seedData = require("./seedData");
   
    data.getNoteCategories = function(next){
        next(null, seedData.initialNotes);
    }


})(module.exports);