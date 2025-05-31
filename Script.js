// AOS Animation Initialization
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Preloader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1000);
});

// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.querySelector('.main-nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// Gallery Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    galleryItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Show success message
  alert('Thank you for your message! We will contact you soon.');
  
  // Reset form
  this.reset();
});

// Dynamic Gallery Loading
const gallery = document.getElementById('gallery');
const galleryImages = [
  { src: 'https://source.unsplash.com/600x600/?wedding', category: 'wedding', alt: 'Wedding Photography' },
  { src: 'https://source.unsplash.com/600x600/?bride', category: 'wedding', alt: 'Bridal Portrait' },
  { src: 'https://source.unsplash.com/600x600/?portrait', category: 'portrait', alt: 'Professional Portrait' },
  { src: 'https://source.unsplash.com/600x600/?model', category: 'portrait', alt: 'Fashion Model' },
  { src: 'https://source.unsplash.com/600x600/?travel', category: 'travel', alt: 'Travel Photography' },
  { src: 'https://source.unsplash.com/600x600/?mountains', category: 'travel', alt: 'Mountain Landscape' },
  { src: 'https://source.unsplash.com/600x600/?couple', category: 'wedding', alt: 'Couple Portrait' },
  { src: 'https://source.unsplash.com/600x600/?businessman', category: 'portrait', alt: 'Corporate Portrait' }
];

function loadGallery() {
  gallery.innerHTML = '';
  galleryImages.forEach(img => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-category', img.category);
    item.innerHTML = `
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <div class="overlay">
        <p>${img.alt}</p>
      </div>
    `;
    gallery.appendChild(item);
  });
}

// Initialize gallery on page load
loadGallery();