export default function dropdownModule() {
  $(document).ready(function () {
    var hamburger = $(".mobile-menu"), // mobile-menu
      menu = $(".header-link"); //menu

    hamburger.on("click", function () {
      menu.slideToggle();
      $(this).toggleClass("active");
    });
    $(".menu-mobile").click(function (e) {
      $(".menu > ul").toggleClass("show-on-mobile");
      e.preventDefault();
    });
    $(".menu > ul > li").click(function () {
      if ($(window).width() <= 1120) {
        $(this).children("ul").fadeToggle("");
      }
    });
  });
}
