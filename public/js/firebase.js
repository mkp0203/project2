$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDyiqkF5Gzz8iiU6peXp_75PPmqVT8PozM",
        authDomain: "project-2-95dad.firebaseapp.com",
        databaseURL: "https://project-2-95dad.firebaseio.com",
        projectId: "project-2-95dad",
        storageBucket: "project-2-95dad.appspot.com",
        messagingSenderId: "410873755961"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    // On Submit
    $("#submit").on("click", function (event) {

        event.preventDefault();

        var food = $("#foodName").val().trim();
        var calories = $("#calories").val().trim();
        var protein = $("#protein").val().trim();
        var fat = $("#fat").val().trim();
        var carbs = $("#carbs").val().trim();

        var mealEntry = {
            food: food,
            calories: calories,
            protein: protein,
            fat: fat,
            carbs: carbs
        };

        database.ref().push(mealEntry);

        $("#foodName").val("");
        $("#calories").val("");
        $("#protein").val("");
        $("#fat").val("");
        $("#carbs").val("");

    });

    // ???
    database.ref().on("child_added", function (childSnapshot) {

        var food = childSnapshot.val().food;
        var calories = childSnapshot.val().calories;
        var protein = childSnapshot.val().protein;
        var fat = childSnapshot.val().fat;
        var carbs = childSnapshot.val().carbs;

        $("#meals").prepend("<tr><td>" + food + "</td><td>" + calories + "</td><td>" + protein + "</td><td>" + fat + "</td><td>" + carbs + "</td></tr>");

    });

    // Add Row
    var counter = 1;
    $("#addRow").on("click", function () {
        var newRow = $("<tr>");
        newRow.addClass("row");
        newRow.attr("id", "row" + counter);

        var cols = "";
        cols += '<td class="col-sm-3"><input type="text" class="form-control" id="foodName' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control" id="calories' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control" id="protein' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control" id="fat' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control" id="carbs' + counter + '"/></td>';
        cols += '<td class="col-sm-1"><span id="clickFA"><i class="ibtnDel fas fa-trash-alt fa-2x"></span></td>';
        newRow.append(cols);

        $("#inputTable").append(newRow);
        counter++;
    });

    // Trash Can
    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1;
    });
});