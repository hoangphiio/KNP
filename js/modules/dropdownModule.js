export default function dropdownModule() {
  $(document).ready(function () {
    const buttons = document.querySelectorAll(".btn-toggle");
    var hamburger = $(".mb-menu"), // mobile-menu
      overlay = $(".overlay"),
      menu = $(".hd-nav"); //menu

    hamburger.on("click", function () {
      menu.toggleClass("active");
      overlay.toggleClass("active");
      $(this).toggleClass("active");
    });
    overlay.on("click", function () {
      $(this).toggleClass("active");
      menu.toggleClass("active");
      hamburger.toggleClass("active");
    });
    $(".menu > ul > li").click(function () {
      if ($(window).innerWidth() <= 1130) {
        $(this).children("ul").slideToggle();
        $(this).toggleClass("active");
        $(this).next(".item-product").stop().slideToggle();
      }
    });

    buttons.forEach((button) => {
      button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
      );
    });
  });
}
