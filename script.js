// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll to contact form when clicking "Book Now"
document.getElementById('bookBtn').addEventListener('click', () => {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form alert
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  e.target.reset();
});
// Fade-in animation for gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

const revealOnScroll = () => {
  galleryItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
