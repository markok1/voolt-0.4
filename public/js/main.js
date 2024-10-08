document.querySelector(".nav-hamb").addEventListener("click", function (event) {
  event.preventDefault();

  var navHamb = this;
  var mobileNavList = document.querySelector(".mobile-nav-list");
  var scrollednav = document.querySelector(".scrolled-nav");
  var body = document.body;

  if (navHamb.classList.contains("active-nav")) {
    navHamb.classList.remove("active-nav");
    mobileNavList.classList.remove("active-nav-list");
    body.classList.remove("disable_scroll");
  } else {
    navHamb.classList.add("active-nav");
    mobileNavList.classList.add("active-nav-list");
    body.classList.add("disable_scroll");
    scrollednav.classList.remove("scrolled-nav");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled-nav");
  } else {
    navbar.classList.remove("scrolled-nav");
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

document.querySelectorAll(".xsm-tab").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    var parentElement = element.parentNode;

    if (parentElement.classList.contains("active-tab")) {
      parentElement.classList.remove("active-tab");
    } else {
      document.querySelectorAll(".active-tab").forEach(function (activeTab) {
        activeTab.classList.remove("active-tab");
      });
      parentElement.classList.add("active-tab");
    }
  });
});

document.querySelectorAll(".dropdown-tag").forEach(function (element) {
  element.addEventListener("click", function (event) {
    if (window.innerWidth < 1024) {
      event.preventDefault();
      var parentElement = element.parentNode;

      if (parentElement.classList.contains("active-dd-tab")) {
        parentElement.classList.remove("active-dd-tab");
      } else {
        document.querySelectorAll(".active-dd-tab").forEach(function (activeTab) {
          activeTab.classList.remove("active-dd-tab");
        });
        parentElement.classList.add("active-dd-tab");
      }
    }
  });
});
// scroll tab into view
document.querySelectorAll(".tab").forEach(function (tab) {
  tab.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    // Scroll the clicked tab into view
    tab.scrollIntoView({
      behavior: "smooth", // Smooth scroll effect
      block: "nearest", // Aligns the tab to the nearest edge
      inline: "center", // Scrolls horizontally to center the tab
    });

    // Optional: Add active class to the clicked tab and remove from others
    document.querySelectorAll(".tab").forEach(function (t) {
      t.classList.remove("active-tab-type1"); // Remove active class from all tabs
    });
    tab.classList.add("active-tab-type1"); // Add active class to the clicked tab
  });
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
    horizontalcontents.forEach((horizontalcontent) => horizontalcontent.classList.remove("active-horizontal"));

    // Show the content that matches the clicked tab by adding active-content class
    document.getElementById(`h-tab-${tabId}`).classList.add("active-horizontal");
  });
});

document.querySelectorAll(".playvideo").forEach(function (element) {
  element.addEventListener("click", function () {
    var video = document.getElementById("60secvideo");
    video.play();
    video.parentNode.classList.add("videoplayed");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".home")) {
    // Testimonial Swiper
    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
    });

    // HOW IT WORKS SECTION
    var swiperHow;
    var blog;

    // Function to initialize Swiper if the screen is less than 1024px
    function initSwiper() {
      var screenWidth = window.innerWidth;

      if (screenWidth < 1024 && !swiperHow) {
        // Initialize Swiper if not initialized and screen width < 1024px
        swiperHow = new Swiper(".how-it-works-swiper", {
          slidesPerView: 1.1,
          spaceBetween: 16,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
          },
        });
      } else if (screenWidth >= 1024 && swiperHow) {
        // Destroy Swiper if the screen width >= 1024px
        swiperHow.destroy(true, true);
        swiperHow = undefined;
      }

      if (window.innerWidth < 1280 && !blog) {
        // Initialize Swiper if not initialized and screen width < 1024px
        blog = new Swiper(".blog-holder", {
          slidesPerView: 1.1,
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            480: {
              slidesPerView: 1.3,
            },
            600: {
              slidesPerView: 1.6,
            },
            800: {
              slidesPerView: 2.1,
              spaceBetween: 32,
            },
          },
        });
      } else if (screenWidth >= 1280 && blog) {
        // Destroy Swiper if the screen width >= 1024px
        blog.destroy(true, true);
        blog = undefined;
      }
    }

    // Initialize Swiper on page load
    window.addEventListener("load", initSwiper);

    // Reinitialize Swiper on window resize
    window.addEventListener("resize", initSwiper);

    function setTestimonialHeight() {
      var maxHeight = 0;
      var testimonials = document.querySelectorAll(".testimonial");

      testimonials.forEach(function (testimonial) {
        maxHeight = Math.max(maxHeight, testimonial.offsetHeight);
      });

      testimonials.forEach(function (testimonial) {
        testimonial.style.height = maxHeight + "px";
      });
    }

    // Initial setup
    setTestimonialHeight();

    // Resize event handler
    window.addEventListener("resize", function () {
      setTestimonialHeight();
    });

    // Function to equalize the height of all .blog-box elements
    function equalizeBlogBoxHeight() {
      const blogBoxes = document.querySelectorAll(".blog-box");
      let maxHeight = 0;

      // Reset the heights to 'auto' before calculating the new tallest height
      blogBoxes.forEach((box) => {
        box.style.height = "auto";
      });

      // Find the tallest blog-box element
      blogBoxes.forEach((box) => {
        const boxHeight = box.offsetHeight;
        if (boxHeight > maxHeight) {
          maxHeight = boxHeight;
        }
      });

      // Set all blog-box elements to the height of the tallest one
      blogBoxes.forEach((box) => {
        box.style.height = `${maxHeight}px`;
      });
    }

    // Call the function on page load
    window.onload = equalizeBlogBoxHeight;

    // Recalculate heights when the window is resized
    window.onresize = equalizeBlogBoxHeight;
  }
  if (document.querySelector(".who-we-serve")) {
    function initializeSwiper() {
      new Swiper(".swiper-service-experts", {
        slidesPerView: "auto", // Enables variable width for slides
        spaceBetween: 16, // Space between slides
        loop: true, // Loop through slides
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          480: {
            spaceBetween: 40,
          },
        },
      });

      if (window.innerWidth < 1280) {
        new Swiper(".blog-holder", {
          slidesPerView: "auto", // Enables variable width for slides
          spaceBetween: 16, // Space between slides
          loop: true, // Loop through slides
          breakpoints: {
            480: {
              spaceBetween: 32,
            },
          },
        });
      }
    }

    // Initialize Swiper on page load
    initializeSwiper();

    // Optionally, reinitialize Swiper on window resize
    window.addEventListener("resize", function () {
      // Destroy and reinitialize Swiper to adjust to screen size changes
      const swiperEl = document.querySelector(".swiper-service-experts");
      if (swiperEl && swiperEl.swiper) {
        swiperEl.swiper.destroy(true, true);
      }

      const swiperEl2 = document.querySelector(".blog-holder");
      if (swiperEl2 && swiperEl2.swiper) {
        swiperEl2.swiper.destroy(true, true);
      }

      initializeSwiper();
    });
  }
  if (document.querySelector(".website-builder")) {
    var blog;

    // Function to initialize Swiper if the screen is less than 1024px
    function initSwiper() {
      var screenWidth = window.innerWidth;

      if (window.innerWidth < 1280 && !blog) {
        // Initialize Swiper if not initialized and screen width < 1024px
        blog = new Swiper(".blog-holder", {
          slidesPerView: 1.1,
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            480: {
              slidesPerView: 1.3,
            },
            600: {
              slidesPerView: 1.6,
            },
            800: {
              slidesPerView: 2.1,
              spaceBetween: 32,
            },
          },
        });
      } else if (screenWidth >= 1280 && blog) {
        // Destroy Swiper if the screen width >= 1024px
        blog.destroy(true, true);
        blog = undefined;
      }
    }

    // Initialize Swiper on page load
    window.addEventListener("load", initSwiper);

    // Reinitialize Swiper on window resize
    window.addEventListener("resize", initSwiper);

    // Function to equalize the height of all .blog-box elements
    function equalizeBlogBoxHeight() {
      const blogBoxes = document.querySelectorAll(".blog-box");
      let maxHeight = 0;

      // Reset the heights to 'auto' before calculating the new tallest height
      blogBoxes.forEach((box) => {
        box.style.height = "auto";
      });

      // Find the tallest blog-box element
      blogBoxes.forEach((box) => {
        const boxHeight = box.offsetHeight;
        if (boxHeight > maxHeight) {
          maxHeight = boxHeight;
        }
      });

      // Set all blog-box elements to the height of the tallest one
      blogBoxes.forEach((box) => {
        box.style.height = `${maxHeight}px`;
      });
    }

    // Call the function on page load
    window.onload = equalizeBlogBoxHeight;

    // Recalculate heights when the window is resized
    window.onresize = equalizeBlogBoxHeight;
  }
  if (document.querySelector(".industry")) {
    var swiperHow;

    // Function to initialize Swiper if the screen is less than 1024px
    function initSwiper() {
      var screenWidth = window.innerWidth;

      if (screenWidth < 1024 && !swiperHow) {
        // Initialize Swiper if it is not initialized and screen is less than 1024px
        swiper = new Swiper(".how-it-works-swiper", {
          slidesPerView: 1.2,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 1.8,
            },
          },
        });
      } else if (screenWidth >= 1024 && swiperHow) {
        // Destroy Swiper if screen is greater than or equal to 1024px
        swiperHow.destroy(true, true);
        swiperHow = undefined;
      }
    }

    // Initialize Swiper on page load
    window.addEventListener("load", initSwiper);

    // Reinitialize Swiper on window resize
    window.addEventListener("resize", initSwiper);
  }
  if (document.querySelector(".feature3-voolt-marketing")) {
    var swiperHow;

    // Function to initialize Swiper if the screen is less than 1024px
    function initSwiper() {
      var screenWidth = window.innerWidth;

      if (screenWidth < 1024 && !swiperHow) {
        // Initialize Swiper if it is not initialized and screen is less than 1024px
        swiper = new Swiper(".how-it-works-swiper", {
          slidesPerView: 1.2,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 1.8,
            },
          },
        });
      } else if (screenWidth >= 1024 && swiperHow) {
        // Destroy Swiper if screen is greater than or equal to 1024px
        swiperHow.destroy(true, true);
        swiperHow = undefined;
      }
    }

    // Initialize Swiper on page load
    window.addEventListener("load", initSwiper);

    // Reinitialize Swiper on window resize
    window.addEventListener("resize", initSwiper);
  }
});
