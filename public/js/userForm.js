$(document).ready(function () {

    var count = 1;

    $("#submit").on("click", function (event) {
        event.preventDefault();

        // Creates and appends meal header
        var $header = $("<h5 class='text-left' style='font-weight: bold;'>Meal " + count++ + "</h5>");
        $("#meals").append($header);

        // Assigns all user inputs to variables
        var newfood = $("#foodName").val().trim();
        var newcalories = $("#calories").val().trim();
        var newprotein = $("#protein").val().trim();
        var newfat = $("#fat").val().trim();
        var newcarbs = $("#carbs").val().trim();

        // Appends all user inputs from first row to meal log table
        $("#meals").append("<tr class='row text-center'><td class='col-sm-3'>" + newfood + "</td><td class='col-sm-2'>" + newcalories + "</td><td class='col-sm-2'>" + newprotein + "</td><td class='col-sm-2'>" + newfat + "</td><td class='col-sm-2'>" + newcarbs + "</td><br>");

        // Clears first row of all inputs
        $("#foodName").val("");
        $("#calories").val("");
        $("#protein").val("");
        $("#fat").val("");
        $("#carbs").val("");

        appendDynamicRows();

    });

    var counter = 1;

    $("#addRow").on("click", function () {
        var newRow = $("<tr>");
        newRow.addClass("row dynamicRow");
        // newRow.attr("id", "dynamicRow" + counter);
        console.log(newRow);

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

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1;
    });

});

function appendDynamicRows() {
    var dynamics = $(".dynamicRow");
    for(var i = 0; i < dynamics.length; i++){
        $("#logTable").append(dynamics);
    }
}