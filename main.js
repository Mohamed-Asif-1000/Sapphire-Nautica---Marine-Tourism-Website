/* Navigation Bar with Auto Toggle */
function toggleMenu() {
  const nav = document.getElementById("navigation-links");
  const menuToggle = document.querySelector(".menu-toggle");

  nav.classList.toggle("show");
  menuToggle.classList.toggle("active"); 
}
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#navigation-links a");
  const nav = document.getElementById("navigation-links");
  const menuToggle = document.querySelector(".menu-toggle");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        menuToggle.classList.remove("active"); // CLOSE animation
      }
    });
  });
});

/* Scroll To Top Button */
const scrollBtn = document.getElementById("scrollUp");
window.onscroll = function () {
  if (window.scrollY > 300) scrollBtn.style.display = "block";
  else scrollBtn.style.display = "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Hero Section SlideShow */
document.addEventListener("DOMContentLoaded", () => {
  let slides = document.querySelectorAll(".images");
  let currentSlide = 0;

  function slideShow(index) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    slideShow(currentSlide);
  }, 5000);
});

/* Website Scroll Animation for the Contents  */
const animatedItems = document.querySelectorAll(".animate");
function checkAnimation() {
  const triggerBottom = window.innerHeight - 100;
  animatedItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    itemTop < triggerBottom
      ? item.classList.add("visible")
      : item.classList.remove("visible");
  });
}
window.addEventListener("scroll", checkAnimation);
window.addEventListener("DOMContentLoaded", checkAnimation);

/* Contact Form Pop Up Responce Code is Below */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".join-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;

    if (name === "" || email === "") {
      showPopup("⚠ Please fill in all required fields!");
      return;
    }

    // Show success popup
    showPopup(`🎉 Thank you, ${name}!<br>Your subscription is confirmed.`);

    // Clear form
    form.reset();
  });
});

/* Pop Up Function */
function showPopup(message) {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.classList.add("popup-overlay");

  // Create popup box
  const popup = document.createElement("div");
  popup.classList.add("popup-box");

  popup.innerHTML = `
    <p>${message}</p>
    <button class="popup-btn">OK</button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Close popup
  popup.querySelector(".popup-btn").addEventListener("click", () => {
    overlay.remove();
  });
}
