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
        // console.log("yo");
        event.preventDefault();
        // alert("test");

        var $header = $("<h5 class='text-left' style='font-weight: bold;'>Meal " + count++ + "</h5>");
        $("#meals").append($header);

        var food = $("#foodName").val().trim();
        var calories = $("#calories").val().trim();
        var protein = $("#protein").val().trim();
        var fat = $("#fat").val().trim();
        var carbs = $("#carbs").val().trim();

        var dynamic = $(".dynamic").val().trim();

        var firstRow = {
            food: food,
            calories: calories,
            protein: protein,
            fat: fat,
            carbs: carbs
        };

        var dynamicRows = {
            dynamic: dynamic
        };

        database.ref().push(firstRow);
        database.ref().push(dynamicRows);

        $("#meals").append("<tr class='row text-center'><td class='col-sm-3'>" + food + "</td><td class='col-sm-2'>" + calories + "</td><td class='col-sm-2'>" + protein + "</td><td class='col-sm-2'>" + fat + "</td><td class='col-sm-2'>" + carbs + "</td><br>");

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

    var counter = 1;

    $("#addRow").on("click", function () {
        var newRow = $("<tr>");
        newRow.addClass("row dynamicRow");
        console.log(newRow);

        var cols = "";
        cols += '<td class="col-sm-3"><input type="text" class="form-control dynamic" id="foodName' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control dynamic" id="calories' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control dynamic" id="protein' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control dynamic" id="fat' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control dynamic" id="carbs' + counter + '"/></td>';
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