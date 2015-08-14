/* Expand Reviews*/


/*Expand review 1  large when small clicked*/

$(function() {

    $("#small_review_1").click(function(){
        $("#full_review").fadeIn(1000, function(){
            $("#full_review");
        });
    });
});
/*Expand review 2  large when small clicked*/


$(function() {

    $("#small_review_2").click(function(){
        $("#full_review_2").fadeIn(1000, function(){
            $("#full_review_2");
        });
    });
});
/*Expand review 3  large when small clicked*/


$(function() {

    $("#small_review_3").click(function(){
        $("#full_review_3").fadeIn(1000, function(){
            $("#full_review_3");
        });
    });
});
/*Expand review 4 large when small clicked */


$(function() {

    $("#small_review_4").click(function(){
        $("#full_review_4").fadeIn(1000, function(){
            $("#full_review_4");
        });
    });
});







/* close when others smalls are clicked */


$(function() {

    $("#small_review_1").click(function(){
        $("#full_review_2, #full_review_3, #full_review_4").hide(1, function(){
            $("#full_review_2, #full_review_3, #full_review_4");
        });
    });
});


$(function() {

    $("#small_review_2").click(function(){
        $("#full_review, #full_review_3, #full_review_4").hide(1, function(){
            $("#full_review, #full_review_3, #full_review_4");
        });
    });
});


$(function() {

    $("#small_review_3").click(function(){
        $("#full_review, #full_review_2, #full_review_4").hide(1, function(){
            $("#full_review, #full_review_2, #full_review_4");
        });
    });
});


$(function() {

    $("#small_review_4").click(function(){
        $("#full_review, #full_review_2, #full_review_3").hide(1, function(){
            $("#full_review, #full_review_2, #full_review_3");
        });
    });
});



/* hide own small self when clicked */



$(function() {

    $("#small_review_1").click(function(){
        $("#small_review_1").hide(1);
    });
});

$(function() {

    $("#small_review_2").click(function(){
        $("#small_review_2").hide(1);
    });
});


$(function() {

    $("#small_review_3").click(function(){
        $("#small_review_3").hide(1);
    });
});



$(function() {

    $("#small_review_4").click(function(){
        $("#small_review_4").hide(1);
    });
});


/*make replacement appear when close small self*/



$(function() {

    $("#small_review_1").click(function(){
        $("#small_review_2, #small_review_3, #small_review_4").fadeIn(2, function(){
            $("#small_review_2");
        });
    });
});


$(function() {

    $("#small_review_2").click(function(){
        $("#small_review_1, #small_review_3, #small_review_4").fadeIn(2, function(){
            $("#small_review_1");
        });
    });
});


$(function() {

    $("#small_review_3").click(function(){
        $("#small_review_1, #small_review_2, #small_review_4").fadeIn(2, function(){
            $("#small_review_2");
        });
    });
});


$(function() {

    $("#small_review_4").click(function(){
        $("#small_review_1, #small_review_2, #small_review_3").fadeIn(2, function(){
            $("#small_review_3");
        });
    });
});















