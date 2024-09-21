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

//tabs

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

// Add click event to all tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    // Prevent default action of <a> (navigation)
    event.preventDefault();

    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active-tab-type1"));

    // Add active class to the clicked tab
    tab.classList.add("active-tab-type1");

    // Get the corresponding content ID
    const tabId = tab.getAttribute("data-tab");

    // Hide all contents by removing active-content class
    contents.forEach((content) => content.classList.remove("active-content"));

    // Show the content that matches the clicked tab by adding active-content class
    document.getElementById(`tab-${tabId}`).classList.add("active-content");
  });
});
