$(document).ready(function () {
    function biteTrack() {

        var token = "&xwyQnFHOjImshE8jffE6KJ5B2lWvp1yOKb7jsn0NmkoK8oUAJR";
        var apiKey = "e937f9c4ad832a5dc4d955c79942eb8c";
        var api_id = "65c13410";
        var ingredient;
        // var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=charlotte" + token;
        // var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1" + token;
        var queryURL2 = "https://api.edamam.com/search?q=" + ingredient + "&app_id=" + api_id + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free";
        console.log(queryURL);

        $.ajax({
            url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1",
            method: "GET"
        }).then(function (response) {

            }
            // }
        });

    };


});

function .header() {

}