$(document).ready(function () {

    var count = 1;

    $("#submit").on("click", function (event) {
        event.preventDefault();
        $(".form-control").empty();

        var $header = $("<h5 class='text-left' style='font-weight: bold;'>Meal " + count++ + "</h5>");
        $("#meals").append($header);

        var newfood = $("#foodName").val().trim();
        var newcalories = $("#calories").val().trim();
        var newprotein = $("#protein").val().trim();
        var newfat = $("#fat").val().trim();
        var newcarbs = $("#carbs").val().trim();

        $("#meals").append("<tr class='row text-center'><td class='col-sm-3'>" + newfood + "</td><td class='col-sm-2'>" + newcalories + "</td><td class='col-sm-2'>" + newprotein + "</td><td class='col-sm-2'>" + newfat + "</td><td class='col-sm-2'>" + newcarbs + "</td><br>");

        $("#foodName").val("");
        $("#calories").val("");
        $("#protein").val("");
        $("#fat").val("");
        $("#carbs").val("");

    });

    var counter = 1;

    $("#addRow").on("click", function () {
            var newRow = $("<tr>");
            newRow.addClass("row");
            newRow.attr("id", "row" + counter);
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