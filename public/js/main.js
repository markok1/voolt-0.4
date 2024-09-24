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

//tabs

const horizontaltabs = document.querySelectorAll(".horizontal-tab");
const horizontalcontents = document.querySelectorAll(".horizontal-content");

// Add click event to all tabs
horizontaltabs.forEach((horizontaltab) => {
  horizontaltab.addEventListener("click", (event) => {
    // Prevent default action of <a> (navigation)
    event.preventDefault();

    // Remove active class from all tabs
    horizontaltabs.forEach((t) => t.classList.remove("active-horizontal-tab"));

    // Add active class to the clicked tab
    horizontaltab.classList.add("active-horizontal-tab");

    // Get the corresponding content ID
    const tabId = horizontaltab.getAttribute("data-tab");

    // Hide all contents by removing active-content class
    horizontalcontents.forEach((horizontalcontent) =>
      horizontalcontent.classList.remove("active-horizontal")
    );

    // Show the content that matches the clicked tab by adding active-content class
    document
      .getElementById(`h-tab-${tabId}`)
      .classList.add("active-horizontal");
  });
});

$(".playvideo").click(function () {
  $("#60secvideo")[0].play();
  $("#60secvideo").parent().addClass("videoplayed");
});
