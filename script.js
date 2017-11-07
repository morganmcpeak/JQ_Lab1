$(document).ready(function(){

$(".table1").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 1");

});

$(".table2").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 2");
});
$(".table3").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 3");
});

$(".table4").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 4");
});

$(".table5").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 5");
});

$(".table6").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 6");
});

$(".table7").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 7");
});

$(".table8").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 8");
});

$(".table9").click(function(){
    $(".form").css("display", "block").css("z-index", 1);
    $("p").text("Table 9");
});

$(".form").submit(function(){
    $(this).css("display", "none");
});
$(".table1").on("submit", function(e) {
    $(this).addClass(".reserved");
});













});