$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle(50);
    $("#walrus-hidden").slideToggle(50);
  });
  $(".buffaloclick").click(function() {
    $(".buffalo-showing").fadeToggle(800);
    $(".buffalo-hidden").fadeToggle(800);
  });
  $(".aardvarkclick").click(function() {
    $(".aardvark-showing").toggle();
    $(".aardvark-hidden").toggle();
  });
  $(".bgdark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $(".dark-hidden").toggle();
    $(".dark-showing").toggle();
  });
  $(".bgwhite").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
    $(".dark-hidden").toggle();
    $(".dark-showing").toggle();
  });
  $(".jsborder").click(function() {
    $(".jsborder").toggleClass("dynamicborder");
  });
});
