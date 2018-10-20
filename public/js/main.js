$(document).ready(function () {

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

    $("#submit").on("click", function (event) {

        event.preventDefault();

        var name = $("#name").val().trim();
        var dest = $("#dest").val().trim();
        var fTrain = $("#fTrain").val().trim();
        var freq = $("#freq").val().trim();

        var newTrain = {
            name: name,
            dest: dest,
            fTrain: fTrain,
            freq: freq
        };

        database.ref().push(newTrain);

        $("#name").val("");
        $("#dest").val("");
        $("#fTrain").val("");
        $("#freq").val("");

    });

    database.ref().on("child_added", function (childSnapshot) {

        var name = childSnapshot.val().name;
        var dest = childSnapshot.val().dest;
        var fTrain = childSnapshot.val().fTrain;
        var freq = childSnapshot.val().freq;

        var convert = moment(fTrain, "HH:mm").subtract(1, "years");
        var diffTime = moment().diff(moment(convert), "minutes");
        var remainder = diffTime % freq;
        var minsToTrain = freq - remainder;
        var nextTrain = (moment().add(minsToTrain, "minutes")).format("hh:mm");

        $("#table > tbody").prepend("<tr><td>" + name + "</td><td>" + dest + "</td><td>" + freq + "</td><td>" + nextTrain + "</td><td>" + minsToTrain + "</td></tr>");

    });

});