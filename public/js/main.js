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
