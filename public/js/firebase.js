$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyB8Tn5CbsysjIlSCe9sfWfDAwKtm3XTIvw",
        authDomain: "test-2cc12.firebaseapp.com",
        databaseURL: "https://test-2cc12.firebaseio.com",
        projectId: "test-2cc12",
        storageBucket: "test-2cc12.appspot.com",
        messagingSenderId: "759222385452"
    };

    firebase.initializeApp(config);
    var database = firebase.database();

    var count = 1;

    // On Submit
    $("#submit").on("click", function (event) {

        event.preventDefault();

        var $header = $("<h5 class='text-left' style='font-weight: bold;'>Meal " + count++ + "</h5>");
        $("#meals").append($header);

        $(".food").each(function () {

            var food = $(this).find(".col1").val().trim();
            var calories = $(this).find(".col2").val().trim();
            var protein = $(this).find(".col3").val().trim();
            var fat = $(this).find(".col4").val().trim();
            var carbs = $(this).find(".col5").val().trim();

            var meal = {
                food: food,
                calories: calories,
                protein: protein,
                fat: fat,
                carbs: carbs
            };

            database.ref().push(meal);

            $("#meals").append("<tr class='row text-center'><td class='col-sm-3'>" + food + "</td><td class='col-sm-2'>" + calories + "</td><td class='col-sm-2'>" + protein + "</td><td class='col-sm-2'>" + fat + "</td><td class='col-sm-2'>" + carbs + "</td><br>");

        });

        $("#foodName").val("");
        $("#calories").val("");
        $("#protein").val("");
        $("#fat").val("");
        $("#carbs").val("");

        $(".dynamic").val("");
        $(".dynamicRow").remove();

    });

    // database.ref().on("child_added", function (childSnapshot) {

    //     var name = childSnapshot.val().name;
    //     var dest = childSnapshot.val().dest;
    //     var fTrain = childSnapshot.val().fTrain;
    //     var freq = childSnapshot.val().freq;
    //     var freq = childSnapshot.val().freq;

    //     $("#table > tbody").prepend("<tr><td>" + name + "</td><td>" + dest + "</td><td>" + freq + "</td><td>" + nextTrain + "</td><td>" + minsToTrain + "</td></tr>");

    // });

    // Add Row Button
    var counter = 1;
    $("#addRow").on("click", function () {
        var newRow = $("<tr>");
        newRow.addClass("row dynamicRow food");

        var cols = "";
        cols += '<td class="col-sm-3"><input type="text" class="form-control col1 dynamic" id="foodName' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control col2 dynamic" id="calories' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control col3 dynamic" id="protein' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control col4 dynamic" id="fat' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control col5 dynamic" id="carbs' + counter + '"/></td>';
        cols += '<td class="col-sm-1 dynamic"><span id="clickFA"><i class="ibtnDel fas fa-trash-alt fa-2x trash"></span></td>';

        newRow.append(cols);
        $("#inputTable").append(newRow);
        counter++;
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1;
    });

});