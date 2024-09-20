$(".nav-hamb").on("click", function (e) {
  e.preventDefault();
  if ($(this).hasClass("active-nav")) {
    $(this).removeClass("active-nav");
    $(".mobile-nav-list").removeClass("active-nav-list");
    $("body").removeClass("disable_scroll");
  } else {
    $(this).addClass("active-nav");
    $(".mobile-nav-list").addClass("active-nav-list");
    $("body").addClass("disable_scroll");
  }
});

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((faqBox) => {
  const answer = faqBox.querySelector(".answer");
  answer.style.height = "0px";
  answer.style.transition = "height 0.3s ease";
  faqBox.addEventListener("click", function () {
    faqBoxes.forEach((otherFaqBox) => {
      const otherAnswer = otherFaqBox.querySelector(".answer");
      if (otherAnswer !== answer && otherAnswer.style.height !== "0px") {
        otherAnswer.style.height = "0px";
      }
    });
    if (answer.style.height === "0px") {
      answer.style.height = `${answer.scrollHeight}px`;
    } else {
      answer.style.height = "0px";
    }
  });
});

$(".xsm-tab").on("click", function (e) {
  e.preventDefault();
  if ($(this).parent().hasClass("active-tab")) {
    $(this).parent().removeClass("active-tab");
  } else {
    $(".active-tab").removeClass("active-tab");
    $(this).parent().addClass("active-tab");
  }
});

$(".dropdown-tag").on("click", function (e) {
  if ($(window).width() < 1024) {
    e.preventDefault();
    if ($(this).parent().hasClass("active-dd-tab")) {
      $(this).parent().removeClass("active-dd-tab");
    } else {
      $(".active-tab").removeClass("active-dd-tab");
      $(this).parent().addClass("active-dd-tab");
    }
  }
});
