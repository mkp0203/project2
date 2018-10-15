$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
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

});