$(".nav-hamb").on("click", function (e) {
  e.preventDefault();
  if ($(this).hasClass("active-nav")) {
    $(this).removeClass("active-nav");
    $(".mobile-nav-list").removeClass("active-nav-list");
  } else {
    $(this).addClass("active-nav");
    $(".mobile-nav-list").addClass("active-nav-list");
  }
});
