//  1 - 5
$("body").css("text-align", "center");

$("#title h2").text("New title");

$(".subtitle-box").css("background-color", "#8888ff");

$(".temp").hide();

// $(".temp").css("display", "none");

$("div.reason").css("border", "dashed blue 4px");

// 6 - 8
$("ol li").css("font-weight", "bold");

$("#first-list li:last").css("text-decoration", "underline");

// $("#first-list li:eq(1)").css("text-decoration", "line-through");
$("#first-list li:nth-child(2)").css("text-decoration", "line-through");

// 9 - 10
$(".second-list").css("font-style", "italic");

$(".second-list span").css("font-size", "0.5em");

// 11 - 15
$(".unused-box label:eq(0)").remove();

$(".unused-box").append("<p>Second sentence</p>")

//$(".unused-box").prepend("<p>First sentence</p>");

$("<p>First sentence</p>").insertBefore(".unused-box p");

$(".unused-box").attr("class", "used-box");



$(document).ready(() => {
/*     $(".used-box").click(function() {
        $(this).toggleClass("used-boxed-clicked");
    });
 */
    $(".used-box").click(event => {
        $(event.currentTarget).toggleClass("used-boxed-clicked");
    });

/*     $(".used-box").on("click ", () => {
    }); */

});

/* $(() => {

}); */



