export default function dropdownModule() {
  $(document).ready(function () {
    const buttons = document.querySelectorAll(".btn-toggle");
    var hamburger = $(".mobile-menu"), // mobile-menu
      menu = $(".header-link"); //menu

    hamburger.on("click", function () {
      menu.toggleClass("active");
      $(this).toggleClass("active");
      $(".overlay").toggleClass("active");
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

    buttons.forEach((button) => {
      button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
      );
    });
  });
}
