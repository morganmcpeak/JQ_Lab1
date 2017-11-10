$(document).ready(function(){
var name;
var container; 
var name;
var phone;
var partySize;
var text;

$(".container").on("mouseenter",function(event) {
    name = $(this).attr("name");
    partySize = $(this).attr("partysize");
    text = $(this).text();
    if($(this).hasClass("reserved")){
    $(this).text("Name: " + name + " Party Size: " + partySize);
    return text;
    }

}).on("mouseleave", function(event){
    $(this).text(text);
});

$(".container").on("click", function(event){
    container = $(this);
    $(".form").fadeIn(500);
});
$("#save").on("click", function(event){
    name = $("#name").val();
    $("#name").val("");
    container.attr("name",name);
    phone = $("#phone").val();
    $("#phone").val("");
    container.attr("phone", phone);
    partySize = $("#partysize").val();
    $("#partysize").val("");
    container.attr("partysize", partySize);
    container.addClass("reserved");
    $(".form").hide();
    $(".reserved").off("click");
});

$("#x").on("click", function(){
    $(".form").hide();
});

});