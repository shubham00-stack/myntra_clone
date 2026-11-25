document.addEventListener('DOMContentLoaded', function () {

  /* Mobile menu toggle */
  var menuBtn = document.getElementById('mobileMenuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var nav = document.querySelector('.main-nav');
      if (nav) {
        nav.classList.toggle('nav-open');
      }
    });
  }

  /* Wishlist heart toggle */
  var wishlistBtns = document.querySelectorAll('.wishlist-btn');
  for (var i = 0; i < wishlistBtns.length; i++) {
    wishlistBtns[i].addEventListener('click', function () {
      var svg = this.querySelector('svg path');
      if (this.classList.contains('wishlisted')) {
        this.classList.remove('wishlisted');
        this.style.color = '';
        svg.setAttribute('fill', 'none');
      } else {
        this.classList.add('wishlisted');
        this.style.color = '#ff3f6c';
        svg.setAttribute('fill', '#ff3f6c');
      }
    });
  }

  /* Smooth scroll for anchor links */
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  /* Search bar focus visual */
  var searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        var query = this.value.trim();
        if (query) {
          alert('Searching for: ' + query);
        }
      }
    });
  }
});
