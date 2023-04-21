export default function dropdownModule() {
  $(document).ready(function () {
    var hamburger = $(".mobile-menu"), // mobile-menu
      menu = $(".header-link"); //menu

    hamburger.on("click", function () {
      menu.toggle();
      menu.toggleClass("active");
      $(this).toggleClass("active");
    });
    $(".mobile-menu").click(function (e) {
      $(".menu > ul").toggleClass("show-on-mobile");
      e.preventDefault();
    });
    $(".menu > ul > li").click(function () {
      if ($(window).width() <= 1130) {
        $(this).children("ul").fadeToggle();
      }
    });
  });
}
