$(document).ready(function() {
    var counter = 0;

    $("#goal").hide();

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

    $("#submit").on("click", function (event) {
        event.preventDefault();
        $("#goal").show();
        $(".form-control").empty();

        var $header = $("<h6>Meal " + count++ + "</h6><br>");
        $("#meals").append($header);

        var newfood = $("#foodname").val().trim();
        var newcalories = $("#calories").val().trim();
        var newprotein = $("#protein").val().trim();
        var newfat = $("#fat").val().trim();
        var newcarbs = $("#carbs").val().trim();

        $("#meals").append("<tr class='row text-center'><td class='col-sm-3'>" + newfood + "</td><td class='col-sm-2'>" + newcalories + "</td><td class='col-sm-2'>" + newprotein + "</td><td class='col-sm-2'>" + newfat + "</td><td class='col-sm-2'>" + newcarbs + "</td><br>");

    });
});