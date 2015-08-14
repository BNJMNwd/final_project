/*Expand Gallery */


$(function() {

    $("#portrait_h3").click(function(){
        $("#portrait_gallery_expand").fadeIn(800, function(){
            $("#portrait_gallery_expand");
        });
    });
});


/*Expand Gallery 2 */

$(function() {

    $("#wedding_h3").click(function(){

        $("#wedding_gallery_expand").fadeIn(800, function(){
            $("#wedding_gallery_expand");
        });
    });
});


/*Expand Gallery 3 */

$(function() {

    $("#travel_h3").click(function(){

        $("#travel_gallery_expand").fadeIn(800, function(){
            $("#travel_gallery_expand");
        });
    });
});



/*Expand Gallery 4 */

$(function() {

    $("#park_h3").click(function(){

        $("#park_gallery_expand").fadeIn(800, function(){
            $("#park_gallery_expand");
        });
    });
});



/*Hide when you expand gallery */

$(function() {

    $("#portrait_h3, #wedding_h3, #travel_h3, #park_h3").click(function(){
        $("#portrait_h3, #wedding_h3, #travel_h3, #park_h3, #gallery, header, footer, #gallery_sider").hide(1);
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
        $("#portrait_h3, #wedding_h3, #travel_h3, #park_h3, #gallery, header, footer, #gallery_sider").fadeIn(1000);
    });
});
