$(document).ready(function (){
    // how to use with button
    // $("#show-answers").click(function(){
    //     var currentVisibility = $("dd").css("visibility");
    //     // alert(currentVisibility);
    //     if (currentVisibility === "hidden") {
    //         $("dd").css("visibility", "visible");
    //     } else {
    //         $("dd").css("visibility", "hidden");
    //     }
    // });
    //show answers with link
    $("a").click(function () {
        $("dd").toggleClass("invisible")
    })

    //highlight questions
    $(".highlight").click(function () {
        var currentBackground = $(this).css("background-color");
        // alert(currentBackground);
        if (currentBackground === "rgba(0, 0, 0, 0)") {
            $(this).css("background-color", "hotpink")
        } else {
            $(this).css("background-color", "rgba(0, 0, 0, 0)")
            console.log("hello")
        }
    });
    // $("dt").click(function() {
    //     $(this).toggleClass("highlightOne");
    //
    // });

    //Traversing code

    $("h3").click(function () {
        $(this).next().first().css("font-weight", "bold");
    });
    // $('h3').click(function () {
    //     $(this).next().children().css('font-weight', 'bold');
    // })

    $('#highlight-last').click(function (event) {
        $('ul li:last-child').each(function (index) {
            $(this).css('background-color', '#FF0');
        });
    });
    $('ul').click(function () {
        $(this).children().first().css('color', 'blue');

    });

    //toggle facts
    $("#yellowstone-facts-toggle").click(function (){
        $("#yellowstone-facts").toggle()
    });

    $("#channel-islands-toggle").click(function (){
       $("#channel-island-facts").fadeToggle(1500)
    });

    $("#redwood-toggle").click(function (){
       $("#redwood-facts").slideToggle()
    });

    //Basic animation with jquery
    $("#animation").click(function(){
        $("#animation-div").animate({"left": "+=250px", "top":"+=250px"}, 300)
    });
});
