$(document).ready(function () {    
    $('#Menulinks').mouseenter(
        function () {
            $('ul').slideDown(200);
        },
    });
    $('#Menulinks').mouseleave(
        function () {
            $('ul').slideUp(200);            
    });
});

