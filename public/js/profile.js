// $(document).ready(function() {
//     var panels = $('.user-infos');
//     var panelsButton = $('.dropdown-user');
//     panels.hide();

//     //Click dropdown
//     panelsButton.click(function() {
//         //get data-for attribute
//         var dataFor = $(this).attr('data-for');
//         var idFor = $(dataFor);

//         //current button
//         var currentButton = $(this);
//         idFor.slideToggle(400, function() {
//             //Completed slidetoggle
//             if(idFor.is(':visible'))
//             {
//                 currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
//             }
//             else
//             {
//                 currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
//             }
//         })
//     });


//     $('[data-toggle="tooltip"]').tooltip();

//     $('button').click(function(e) {
//         e.preventDefault();
//         alert("This is a demo.\n :-)");
//     });
// });

$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
});