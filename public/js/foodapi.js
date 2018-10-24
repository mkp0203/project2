$(document).ready(function () {
    function biteTrack() {
        var inputIng = $("#food-input").val().trim();

        for (var a = 0; a < inputIng.length; a++) {

            // str = str.replace(" ", "+");
            inputIng = inputIng.replace(",", "%2C").replace(" ", "+");
            console.log(inputIng);

        } 

        var apiKey = "e937f9c4ad832a5dc4d955c79942eb8c";
        var api_id = "65c13410";

        var queryURL2 = "https://api.edamam.com/search?q=" + inputIng + "&app_id=" + api_id + "&app_key=" + apiKey + "&to=30";
        console.log(queryURL2);

        

        $.ajax({

            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            
            for (var i = 0; i < 100; i++) {
                // console.log(response.hits.recipe);
                var recipeName = response.hits[i].recipe.label;
                console.log(recipeName);
                var recipeImage = response.hits[i].recipe.image;
                // console.log(recipeImage);
                var recipeURL = response.hits[i].recipe.url;
                console.log(recipeURL);
                var recipeYield = response.hits[i].recipe.yield;
                // console.log(recipeYield)
                var healthLabels = response.hits[i].recipe.healthLabels;
                // console.log(healthLabels)
                var ingredientList = response.hits[i].recipe.ingredientLines;
                var theCount = response.count[i];
                var totalTime =  response.hits[i].recipe.totalTime;
                // console.log(ingredientList);


                $("#food-div").append("<div class='column' style='margin-left:20px;margin-right:20px;'><div class='card bg-light mb-3' style='max-width: 18rem;float: left;'><a href='" + recipeURL + "' target='_blank'><div class='card-header'></div> <div class='card-body' style='padding-left:40px;' ><img style='width:200px;height:200px;' src='" + recipeImage + "'><h6 class='card-title'>"+ recipeName + "</h5><p class='card-text'> Cooks in: " + totalTime + " min.</p></a>  </div></div>");

                if (theCount === 0) {
                    $("#food-div").append("Sorry, no recipes available! Please try again!");
                    console.log("None of that");
                }
            

            }

         
        });

    }
    $("#submit").on("click", function (event) {
        event.preventDefault();


        
        biteTrack();
        $("#food-input").val(" ");
        clearLink();
    });

});

function clearLink() {
    $("#food-div").empty();
    // $("#food-input").val(" ");
}