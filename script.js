// Typing animation for header
const headerText = "Hi, I'm Shubham Kumar";
const headerElement = document.querySelector('h1');
let i = 0;

function typeWriter() {
  if (i < headerText.length) {
    headerElement.innerHTML = headerText.slice(0, i + 1) + '<span class="cursor">|</span>';
    i++;
    setTimeout(typeWriter, 100);
  } else {
    headerElement.innerHTML = headerText.replace('Shubham Kumar', '<span class="highlight">Shubham Kumar</span>');
  }
}

// Smooth scrolling for navigation
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Enhanced project card interactions
document.querySelectorAll(".project-card").forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  
  observer.observe(card);
  
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });
  
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.8s ease';
  observer.observe(section);
});

// Passion items stagger animation
document.querySelectorAll('.passion-item').forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-30px)';
  item.style.transition = `all 0.6s ease ${index * 0.2}s`;
  observer.observe(item);
});

// Initialize animations when page loads
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});

// Modal functions for certificate popup
function openModal(imageSrc, imageAlt) {
  const modal = document.getElementById('certificateModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = imageSrc;
  modalImg.alt = imageAlt;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('certificateModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});