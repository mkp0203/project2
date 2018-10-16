$(document).ready(function() {
    var counter = 0;

    $("#addrow").on("click", function() {
        var newRow = $("<tr>");
        newRow.addClass("row");
        var cols = "";

        cols += '<td class="col-sm-3"><input type="text" class="form-control" name="food' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control" name="protein' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control" name="fat' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control" name="carbs' + counter + '"/></td>';
        cols += '<td class="col-sm-2"><input type="text" class="form-control" name="fiber' + counter + '"/></td>';
        cols += '<td class="col-sm-1"><span id="clickFA"><i class="ibtnDel fas fa-trash-alt fa-2x"></span></td>';
        newRow.append(cols);

        $("table.order-list").append(newRow);
        counter++;
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });

    var count = 1;

    $("#submit").on("click", function () {

        var $header = $("<h5>Meal " + count++ + "</h5><br>");
        $("#meals").append($header);

        var newfood = $("#foodname").val().trim();
        var newprotein = $("#protein").val().trim();
        var newfat = $("#fat").val().trim();
        var newcarbs = $("#carbs").val().trim();
        var newfiber = $("#fiber").val().trim();

        $(".card-body").append("<tr><td>" + newfood + "</td><td>" + newprotein + "</td><td>" + newfat + "</td><td>" + newcarbs + "</td><td>" + newfiber + "</td>");

    });
});