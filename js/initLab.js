// Logo click handler - redirect to home
document.querySelector(".logo-wrap").addEventListener("click", function() {
  window.location.href = window.location.pathname.includes('pages') ? '../../initLabs.html' : './initLabs.html';
});

// Theme toggle
const btn = document.getElementById("themeToggle");
if (btn) {
  const icon = btn.querySelector("i");
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
    icon.className = saved === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  } else {
    // Set default to dark theme
    document.documentElement.setAttribute("data-theme", "dark");
  }
  
  btn.onclick = () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
    localStorage.setItem("theme", dark ? "light" : "dark");
    icon.className = dark ? "fa-solid fa-moon" : "fa-solid fa-sun";
  };
}

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.onclick = () => {
    mobileMenu.classList.toggle("active");
    menuBtn.innerHTML = mobileMenu.classList.contains("active")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  };

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove("active");
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

// Subnav dropdowns
document.querySelectorAll('.subnav .dropdown').forEach(function(drop) {
  drop.addEventListener('mouseenter', function() {
    this.querySelector('.dropdown-content').style.display = 'block';
  });
  drop.addEventListener('mouseleave', function() {
    this.querySelector('.dropdown-content').style.display = 'none';
  });
  
  // Keyboard accessibility
  drop.querySelector('a').addEventListener('focus', function() {
    drop.querySelector('.dropdown-content').style.display = 'block';
  });
  drop.querySelector('a').addEventListener('blur', function() {
    setTimeout(() => {
      drop.querySelector('.dropdown-content').style.display = 'none';
    }, 200);
  });
});

// Live time (if time element exists)
setInterval(() => {
  const t = document.getElementById("time");
  if (t) t.innerText = new Date().toLocaleString();
}, 1000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      loader.classList.add("fade-out");
      document.body.style.overflow = "auto";
    }, 2000);
  }
});
