const LOGO_URL = 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/604de411-976d-41a0-9ba0-41faf9850627/de8c94d8-887e-4625-825f-ec262dbc28df/1779462165_ipi97d.jpg';

// ===== RENDER HEADER =====
function renderHeader() {
  document.getElementById('site-header').innerHTML = `
    <nav class="fixed top-0 left-0 right-0 z-[1000] h-16 flex items-center justify-between"
         style="background: rgba(43, 64, 134, 0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(181, 123, 15, 0.15); padding: 0 clamp(1.5rem, 5vw, 4rem);">
      <a href="#top" class="flex items-center">
        <img src="${LOGO_URL}" alt="Shiki Hibachi &amp; Sushi" class="site-logo site-logo--header">
      </a>
      <div class="hidden md:flex items-center gap-10">
        <a href="#menu" class="nav-link font-body text-sm font-medium uppercase tracking-[0.08em] text-white/70 hover:text-shiki-gold transition-colors duration-300">Menu</a>
        <a href="#hibachi" class="nav-link font-body text-sm font-medium uppercase tracking-[0.08em] text-white/70 hover:text-shiki-gold transition-colors duration-300">Hibachi</a>
        <a href="#sushi" class="nav-link font-body text-sm font-medium uppercase tracking-[0.08em] text-white/70 hover:text-shiki-gold transition-colors duration-300">Sushi</a>
        <a href="#gallery" class="nav-link font-body text-sm font-medium uppercase tracking-[0.08em] text-white/70 hover:text-shiki-gold transition-colors duration-300">Gallery</a>
        <a href="https://direct.chownow.com/order/24204/locations/35586" target="_blank" rel="noopener noreferrer" class="font-body text-sm font-medium uppercase tracking-[0.08em] text-shiki-gold hover:text-shiki-gold-light transition-colors duration-300">Order</a>
        <a href="#contact" class="nav-link font-body text-sm font-medium uppercase tracking-[0.08em] text-white/70 hover:text-shiki-gold transition-colors duration-300">Contact</a>
      </div>
      <button id="hamburger-btn" class="md:hidden flex flex-col gap-1 p-2" aria-label="Open menu">
        <span class="w-5 h-0.5 bg-white block"></span>
        <span class="w-5 h-0.5 bg-white block"></span>
        <span class="w-5 h-0.5 bg-white block"></span>
      </button>
    </nav>
  `;
}

// ===== RENDER FOOTER =====
function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div style="background: #1F3065; padding: 64px clamp(1.5rem, 5vw, 4rem) 32px;">
      <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src="${LOGO_URL}" alt="Shiki Hibachi &amp; Sushi" class="site-logo site-logo--footer">
          <p class="font-body text-sm text-white/50 mt-3">Stamford's destination for hibachi and sushi since 2003.</p>
        </div>
        <div>
          <p class="font-body text-xs font-medium uppercase tracking-[0.08em] text-shiki-gold mb-4">Quick Links</p>
          <div class="flex flex-col gap-3">
            <a href="#menu" class="footer-nav-link font-body text-sm text-white/60 hover:text-white transition-colors duration-300">Menu</a>
            <a href="#hibachi" class="footer-nav-link font-body text-sm text-white/60 hover:text-white transition-colors duration-300">Hibachi</a>
            <a href="#sushi" class="footer-nav-link font-body text-sm text-white/60 hover:text-white transition-colors duration-300">Sushi</a>
            <a href="https://direct.chownow.com/order/24204/locations/35586" target="_blank" rel="noopener noreferrer" class="font-body text-sm text-white/60 hover:text-white transition-colors duration-300">Order Online</a>
            <a href="#gallery" class="footer-nav-link font-body text-sm text-white/60 hover:text-white transition-colors duration-300">Gallery</a>
            <a href="#contact" class="footer-nav-link font-body text-sm text-white/60 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
        <div>
          <p class="font-body text-xs font-medium uppercase tracking-[0.08em] text-shiki-gold mb-4">Connect</p>
          <div class="flex flex-col gap-3">
            <a href="https://www.instagram.com/shikihibachiandsushi/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors duration-300">
              <svg class="w-5 h-5" style="color: #b57b0f;" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://www.yelp.com/biz/shiki-hibachi-and-sushi-stamford" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors duration-300">
              <svg class="w-5 h-5" style="color: #b57b0f;" fill="currentColor" viewBox="0 0 24 24"><path d="M20.4 14.6c-.1-.2-.3-.4-.5-.5l-3.2-1.4c-.3-.1-.7 0-.9.2l-1.4 1.6c-.2.2-.2.6 0 .8l2.6 3.1c.1.2.4.3.6.3.2 0 .3 0 .5-.1l2.1-1.2c.3-.2.5-.5.5-.9v-1.5c0-.2 0-.3-.3-.4zm-7.5-3.2l1.4-1.6c.2-.2.2-.6 0-.8l-2.6-3.1c-.2-.2-.4-.3-.7-.3-.2 0-.3 0-.5.1l-2.1 1.2c-.3.2-.5.5-.5.9v1.5c0 .2.1.4.3.5l3.2 1.4c.3.1.6 0 .9-.2l.6-.6zm-4.4 4.8L6.3 17c-.1.2-.3.4-.5.5l-3.2 1.4c-.2.1-.4.3-.4.5v1.5c0 .4.2.7.5.9l2.1 1.2c.2.1.3.1.5.1.3 0 .5-.1.7-.3l2.6-3.1c.2-.2.2-.6 0-.8l-1.4-1.6c-.2-.2-.5-.3-.8-.2l-.2.1zm10.7-2.4l-1.4-1.6c-.2-.2-.5-.3-.8-.2l-.2.1-3.2 1.4c-.2.1-.4.3-.4.5v1.5c0 .4.2.7.5.9l2.1 1.2c.1.1.3.1.5.1.3 0 .5-.1.7-.3l2.6-3.1c.2-.2.2-.6 0-.8l-.4.3z"/></svg>
              Yelp
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-body text-xs text-white/40">&copy; 2025 Shiki Hibachi &amp; Sushi. All rights reserved.</p>
        <p class="font-body text-xs text-white/40">Powered by <a href="https://askkora.ai/" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-white transition-colors duration-300">Kora</a></p>
      </div>
    </div>
  `;
}

// ===== INIT =====
renderHeader();
renderFooter();

document.querySelectorAll('.nav-link, .footer-nav-link, .mobile-nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== MOBILE MENU =====
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});
mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ===== MENU TABS =====
const menuTabs = document.querySelectorAll('.menu-tab');
const menuPanels = document.querySelectorAll('.menu-panel');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    menuTabs.forEach(t => {
      t.classList.remove('active');
      t.classList.add('border-shiki-navy/20', 'text-shiki-navy/70');
      t.classList.remove('border-transparent');
    });
    tab.classList.add('active');
    tab.classList.remove('border-shiki-navy/20', 'text-shiki-navy/70');
    tab.classList.add('border-transparent');

    menuPanels.forEach(p => {
      if (p.dataset.panel === target) {
        p.classList.remove('hidden');
        p.style.opacity = '0';
        requestAnimationFrame(() => { p.style.transition = 'opacity 0.3s ease'; p.style.opacity = '1'; });
      } else {
        p.classList.add('hidden');
      }
    });
  });
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-section').forEach(el => revealObserver.observe(el));

// ===== HERO SLIDESHOW =====
const heroSlides = document.querySelectorAll('.hero-slide-img');
const heroIndicators = document.querySelectorAll('#hero-indicators .slide-indicator');
let currentSlide = 0;
let slideInterval;

if (heroSlides.length > 0) {
  function goToSlide(index) {
    heroSlides[currentSlide].classList.remove('active');
    if (heroIndicators[currentSlide]) heroIndicators[currentSlide].classList.remove('active');
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
    if (heroIndicators[currentSlide]) heroIndicators[currentSlide].classList.add('active');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }

  heroIndicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
      goToSlide(i);
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });

  slideInterval = setInterval(nextSlide, 5000);
}

// ===== GALLERY LIGHTBOX =====
const galleryImages = [
  'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/604de411-976d-41a0-9ba0-41faf9850627/de8c94d8-887e-4625-825f-ec262dbc28df/1779464226_gsvn6w.jpg',
  'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/604de411-976d-41a0-9ba0-41faf9850627/de8c94d8-887e-4625-825f-ec262dbc28df/1779464258_8s227g.jpg',
  'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/604de411-976d-41a0-9ba0-41faf9850627/de8c94d8-887e-4625-825f-ec262dbc28df/1779464264_jeq8fo.jpg',
  'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/604de411-976d-41a0-9ba0-41faf9850627/de8c94d8-887e-4625-825f-ec262dbc28df/1779464234_50806l.jpg',
  'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/604de411-976d-41a0-9ba0-41faf9850627/de8c94d8-887e-4625-825f-ec262dbc28df/1779464204_d7ojeq.jpg',
  'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/604de411-976d-41a0-9ba0-41faf9850627/de8c94d8-887e-4625-825f-ec262dbc28df/1779464251_jyibhy.jpg',
  'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/604de411-976d-41a0-9ba0-41faf9850627/de8c94d8-887e-4625-825f-ec262dbc28df/1779464219_aewpuy.jpg',
];
let currentLightboxIndex = 0;

window.openLightbox = function(index) {
  currentLightboxIndex = index;
  document.getElementById('lightbox-img').src = galleryImages[index];
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
};
window.closeLightbox = function() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
};
window.navigateLightbox = function(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + galleryImages.length) % galleryImages.length;
  document.getElementById('lightbox-img').src = galleryImages[currentLightboxIndex];
};

document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape') window.closeLightbox();
  if (e.key === 'ArrowLeft') window.navigateLightbox(-1);
  if (e.key === 'ArrowRight') window.navigateLightbox(1);
});
