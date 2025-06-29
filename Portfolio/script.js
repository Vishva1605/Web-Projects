// Scroll to top button functionality
const scrollBtn = document.querySelector(".scroll-button");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 100 ? "flex" : "none";
});

// Smooth scroll for navigation links
document.querySelectorAll(".menu li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dark Mode Toggle
const darkToggle = document.createElement("button");
darkToggle.className = "dark-toggle";
darkToggle.innerText = "Toggle Dark Mode";
document.body.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
});

// Download CV functionality
const downloadCV = document.getElementById("downloadCV");
if (downloadCV) {
  downloadCV.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Vishva_Resume.pdf";
    link.download = "Vishva_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// Toggle chat options visibility
function toggleChatOptions() {
  const options = document.getElementById("chat-options");
  if (options) {
    options.classList.toggle("show");
  }
}

// Hide chat options when clicking outside
document.addEventListener("click", function (e) {
  const chatBox = document.getElementById("chat-options");
  const chatBtn = e.target.closest("button[onclick='toggleChatOptions()']");

  if (!chatBtn && chatBox && !chatBox.contains(e.target)) {
    chatBox.classList.remove("show");
  }
});
