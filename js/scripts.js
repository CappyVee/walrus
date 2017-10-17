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
});
