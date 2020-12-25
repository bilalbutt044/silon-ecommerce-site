$(document).ready(function () {
  $(".mobile-menu-icon").click(function () {
    $("header ul").slideToggle();
    $("header ul").css("display", "block");
  });
});
