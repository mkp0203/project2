$(document).ready(function () {
    function biteTrack() {
        var inputIng = $("#food-input").val().trim();

        for (var a = 0; a < inputIng.length; a++) {

            // str = str.replace(" ", "+");
            inputIng = inputIng.replace(",", "%2C").replace(" ", "+");
            console.log(inputIng);

        } 

        // var token = "&xwyQnFHOjImshE8jffE6KJ5B2lWvp1yOKb7jsn0NmkoK8oUAJR";
        var apiKey = "e937f9c4ad832a5dc4d955c79942eb8c";
        var api_id = "65c13410";
        // var ingredient = $("#food-input").val().trim();
        // var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=charlotte" + token;
        // var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1" + token;
        var queryURL2 = "https://api.edamam.com/search?q=" + inputIng + "&app_id=" + api_id + "&app_key=" + apiKey + "&";
        console.log(queryURL2);

        

        $.ajax({
            // url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1",
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            
            for (var i = 0; i < 50; i++) {
                // console.log(response.hits.recipe);
                var recipeName = response.hits[i].recipe.label;
                console.log(recipeName);
                var recipeImage = response.hits[i].recipe.image;
                console.log(recipeImage);
                var recipeURL = response.hits[i].recipe.url;
                console.log(recipeURL);
                var recipeYield = response.hits[i].recipe.yield;
                console.log(recipeYield)
                var healthLabels = response.hits[i].recipe.healthLabels;
                console.log(healthLabels)
                var ingredientList = response.hits[i].recipe.ingredientLines;
                console.log(ingredientList);

                // $("#food-div").append("<div class='col-md-8'><div class='column'><img src=" + recipeImage + " href=" + recipeURL + " class='img-thumbnail'></div></div>");
                // <ahref="https://amylynnandrews.com/how-to-start-a-blog/"><img src="https://FileURL" /></a>
//first link
                // $("#food-div").append("<div class='column'><a href='" + recipeURL + "' target='_blank'><img src='" + recipeImage + "'></a></div></div>");

                $("#food-div").append("<div class='column' style='margin-left:20px;margin-right:20px;'><div class='card bg-light mb-3' style='max-width: 18rem;'><a href='" + recipeURL + "' target='_blank'><div class='card-header'></div> <div class='card-body' style='padding-left:40px;' ><img style='width:200px;height:200px;' src='" + recipeImage + "'><h5 class='card-title'>"+ recipeName + "</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>  </div></div>");
                //  style='background-image: url('" + recipeImage + "'); width:300px;height:300px;'></a></div></div>");

            

            }

            // // }
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
    $("#food-input").val(" ");
}