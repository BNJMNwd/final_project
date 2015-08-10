/*Expand Gallery */


$(function() {

    $("#show").click(function(){
        $("#portrait_gallery_expand").fadeIn(800, function(){
            $("#portrait_gallery_expand");
        });
    });
});


/*Expand Gallery 2 */

$(function() {

    $("#show_two").click(function(){

        $("#wedding_gallery_expand").fadeIn(800, function(){
            $("#wedding_gallery_expand");
        });
    });
});


/*Expand Gallery 3 */

$(function() {

    $("#show_three").click(function(){

        $("#travel_gallery_expand").fadeIn(800, function(){
            $("#travel_gallery_expand");
        });
    });
});



/*Expand Gallery 4 */

$(function() {

    $("#show_four").click(function(){

        $("#park_gallery_expand").fadeIn(800, function(){
            $("#park_gallery_expand");
        });
    });
});





/*Hide Buttons when you expand gallery */

$(function() {

    $("#show, #show_two, #show_three, #show_four").click(function(){
        $("#show, #show_two, #show_three, #show_four").hide(1);
    });
});





/*close gallery when you click back arrow */

$(function() {

    $(".back_button").click(function(){
        $("#portrait_gallery_expand, #wedding_gallery_expand, #travel_gallery_expand, #park_gallery_expand").fadeOut(10);
    });
});






$(function() {

    $(".back_button").click(function(){
        $("#show, #show_two, #show_three, #show_four").fadeIn(1000);
    });
});
