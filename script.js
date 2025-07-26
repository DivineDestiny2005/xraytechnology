// Navbar toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

function toggleNav() {
  navLinks.classList.toggle('open');
}
navToggle.addEventListener('click', toggleNav);
navToggle.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' || e.key === ' ') toggleNav();
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Accordion for About Us
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    accordionHeaders.forEach(h => h.setAttribute('aria-expanded', 'false'));
    if (!expanded) {
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

// Scroll effect for navbar shadow
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}); 