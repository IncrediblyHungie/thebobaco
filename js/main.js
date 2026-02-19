(function() {
  'use strict';

  var nav = document.getElementById('nav');
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileOverlay = document.getElementById('mobileOverlay');

  // Header scroll — transparent -> frosted glass on home page
  function handleScroll() {
    if (!nav) return;
    if (document.body.classList.contains('home')) {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }

  // Mobile menu
  function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    var isOpen = mobileMenu.classList.contains('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    menuToggle.setAttribute('aria-expanded', isOpen);
  }

  function closeMobileMenu() {
    if (!menuToggle) return;
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  // Scroll reveal animations
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.reveal, .reveal-group');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function(el) { observer.observe(el); });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          var offset = nav ? nav.offsetHeight : 0;
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - offset,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Category filter for menu page
  function initCategoryFilter() {
    var pills = document.querySelectorAll('.category-pill');
    var cards = document.querySelectorAll('.drink-card');
    if (!pills.length || !cards.length) return;

    pills.forEach(function(pill) {
      pill.addEventListener('click', function() {
        var category = this.getAttribute('data-category');
        pills.forEach(function(p) { p.classList.remove('active'); });
        this.classList.add('active');
        cards.forEach(function(card) {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Init
  function init() {
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (menuToggle) menuToggle.addEventListener('click', toggleMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.mobile-menu-link').forEach(function(link) {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    handleScroll();
    initScrollAnimations();
    initSmoothScroll();
    initCategoryFilter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
