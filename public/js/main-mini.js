document.querySelector(".nav-hamb").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".mobile-nav-list"),i=document.querySelector(".scrolled-nav"),a=document.body;this.classList.contains("active-nav")?(this.classList.remove("active-nav"),t.classList.remove("active-nav-list"),a.classList.remove("disable_scroll")):(this.classList.add("active-nav"),t.classList.add("active-nav-list"),a.classList.add("disable_scroll"),i.classList.remove("scrolled-nav"))}),window.addEventListener("scroll",function(){let e=document.querySelector(".navbar");window.scrollY>0?e.classList.add("scrolled-nav"):e.classList.remove("scrolled-nav")});const faqBoxes=document.querySelectorAll(".faq-box");faqBoxes.forEach(e=>{let t=e.querySelector(".answer");t.style.height="0px",t.style.transition="height 0.3s ease",e.addEventListener("click",function(){faqBoxes.forEach(e=>{let i=e.querySelector(".answer");i!==t&&"0px"!==i.style.height&&(i.style.height="0px")}),"0px"===t.style.height?t.style.height=`${t.scrollHeight}px`:t.style.height="0px"})}),document.querySelectorAll(".xsm-tab").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var i=e.parentNode;i.classList.contains("active-tab")?i.classList.remove("active-tab"):(document.querySelectorAll(".active-tab").forEach(function(e){e.classList.remove("active-tab")}),i.classList.add("active-tab"))})}),document.querySelectorAll(".dropdown-tag").forEach(function(e){e.addEventListener("click",function(t){if(window.innerWidth<1024){t.preventDefault();var i=e.parentNode;i.classList.contains("active-dd-tab")?i.classList.remove("active-dd-tab"):(document.querySelectorAll(".active-dd-tab").forEach(function(e){e.classList.remove("active-dd-tab")}),i.classList.add("active-dd-tab"))}})}),document.querySelectorAll(".tab").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),document.querySelectorAll(".tab").forEach(function(e){e.classList.remove("active-tab-type1")}),e.classList.add("active-tab-type1")})});const tabs=document.querySelectorAll(".tab"),contents=document.querySelectorAll(".tab-content");tabs.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),tabs.forEach(e=>e.classList.remove("active-tab-type1")),e.classList.add("active-tab-type1");let i=e.getAttribute("data-tab");contents.forEach(e=>e.classList.remove("active-content")),document.getElementById(`tab-${i}`).classList.add("active-content")})});const horizontaltabs=document.querySelectorAll(".horizontal-tab"),horizontalcontents=document.querySelectorAll(".horizontal-content");horizontaltabs.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),horizontaltabs.forEach(e=>e.classList.remove("active-horizontal-tab")),e.classList.add("active-horizontal-tab");let i=e.getAttribute("data-tab");horizontalcontents.forEach(e=>e.classList.remove("active-horizontal")),document.getElementById(`h-tab-${i}`).classList.add("active-horizontal")})}),document.querySelectorAll(".playvideo").forEach(function(e){e.addEventListener("click",function(){var e=document.getElementById("60secvideo");e.play(),e.parentNode.classList.add("videoplayed")})}),document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".home")){var e,t,i=new Swiper(".testimonial-swiper",{slidesPerView:1,spaceBetween:30,loop:!0,navigation:{nextEl:".custom-next",prevEl:".custom-prev"}});function a(){var i=window.innerWidth;i<1024&&!t?t=new Swiper(".how-it-works-swiper",{slidesPerView:1.2,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:1.8}}}):i>=1024&&t&&(t.destroy(!0,!0),t=void 0),window.innerWidth<1280&&!e?e=new Swiper(".blog-holder",{slidesPerView:1.1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{480:{slidesPerView:1.3},600:{slidesPerView:1.6},800:{slidesPerView:2.1,spaceBetween:32}}}):i>=1280&&e&&(e.destroy(!0,!0),e=void 0)}function s(){var e=0,t=document.querySelectorAll(".testimonial");t.forEach(function(t){e=Math.max(e,t.offsetHeight)}),t.forEach(function(t){t.style.height=e+"px"})}function n(){let e=document.querySelectorAll(".blog-box"),t=0;e.forEach(e=>{e.style.height="auto"}),e.forEach(e=>{let i=e.offsetHeight;i>t&&(t=i)}),e.forEach(e=>{e.style.height=`${t}px`})}window.addEventListener("load",a),window.addEventListener("resize",a),s(),window.addEventListener("resize",function(){s()}),window.onload=n,window.onresize=n}if(document.querySelector(".who-we-serve")){function o(){window.innerWidth<1024&&new Swiper(".swiper-service-experts",{slidesPerView:"auto",spaceBetween:16,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{480:{spaceBetween:32}}}),window.innerWidth<1280&&new Swiper(".blog-holder",{slidesPerView:"auto",spaceBetween:16,loop:!0,breakpoints:{480:{spaceBetween:32}}})}o(),window.addEventListener("resize",function(){let e=document.querySelector(".swiper-service-experts");e&&e.swiper&&e.swiper.destroy(!0,!0);let t=document.querySelector(".blog-holder");t&&t.swiper&&t.swiper.destroy(!0,!0),o()})}if(document.querySelector(".website-builder")){function a(){var t=window.innerWidth;window.innerWidth<1280&&!e?e=new Swiper(".blog-holder",{slidesPerView:1.1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{480:{slidesPerView:1.3},600:{slidesPerView:1.6},800:{slidesPerView:2.1,spaceBetween:32}}}):t>=1280&&e&&(e.destroy(!0,!0),e=void 0)}function n(){let e=document.querySelectorAll(".blog-box"),t=0;e.forEach(e=>{e.style.height="auto"}),e.forEach(e=>{let i=e.offsetHeight;i>t&&(t=i)}),e.forEach(e=>{e.style.height=`${t}px`})}window.addEventListener("load",a),window.addEventListener("resize",a),window.onload=n,window.onresize=n}if(document.querySelector(".industry")){function a(){var e=window.innerWidth;e<1024&&!t?i=new Swiper(".how-it-works-swiper",{slidesPerView:1.2,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:1.8}}}):e>=1024&&t&&(t.destroy(!0,!0),t=void 0)}window.addEventListener("load",a),window.addEventListener("resize",a)}if(document.querySelector(".feature3-voolt-marketing")){function a(){var e=window.innerWidth;e<1024&&!t?i=new Swiper(".how-it-works-swiper",{slidesPerView:1.2,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:1.8}}}):e>=1024&&t&&(t.destroy(!0,!0),t=void 0)}window.addEventListener("load",a),window.addEventListener("resize",a)}});