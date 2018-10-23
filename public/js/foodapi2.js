unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1")
.header("X-Mashape-Key", "5NBPpBVV7kmshyKAODAKElI55Zwpp1E1b6UjsnaqJBbXCmunLN")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});