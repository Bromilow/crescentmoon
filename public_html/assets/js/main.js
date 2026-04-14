document.addEventListener('DOMContentLoaded', function () {

  /* -------------------------------------------------------
     Initialize Lucide Icons
  ------------------------------------------------------- */
  if (window.lucide) lucide.createIcons();

  /* -------------------------------------------------------
     3a. Hamburger Menu Toggle
  ------------------------------------------------------- */
  var hamburger = document.querySelector('.site-nav__hamburger');
  var mobileMenu = document.getElementById('nav-mobile');
  var mobileClose = document.querySelector('.site-nav__mobile-close');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.removeAttribute('hidden');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.setAttribute('hidden', '');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');

    // Reset accordion state when menu closes
    document.querySelectorAll('.site-nav__mobile-accordion.is-open').forEach(function (el) {
      el.classList.remove('is-open');
      var btn = el.querySelector('.site-nav__mobile-accordion-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  function isMobileMenuOpen() {
    return mobileMenu && !mobileMenu.hasAttribute('hidden');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (isMobileMenuOpen()) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', function () {
      closeMobileMenu();
    });
  }

  /* -------------------------------------------------------
     3h. Mobile Accordion Toggles
  ------------------------------------------------------- */
  var accordionToggles = document.querySelectorAll('.site-nav__mobile-accordion-toggle');

  accordionToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var parentLi = toggle.closest('.site-nav__mobile-accordion');
      if (!parentLi) return;

      var isOpen = parentLi.classList.contains('is-open');

      // Close all other accordion sections (single-open behavior)
      accordionToggles.forEach(function (otherToggle) {
        var otherLi = otherToggle.closest('.site-nav__mobile-accordion');
        if (otherLi && otherLi !== parentLi) {
          otherLi.classList.remove('is-open');
          otherToggle.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle the clicked section
      if (isOpen) {
        parentLi.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        parentLi.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* -------------------------------------------------------
     3b. Scroll Nav Effect
  ------------------------------------------------------- */
  var siteNav = document.getElementById('site-nav');

  function handleScroll() {
    if (!siteNav) return;
    if (window.scrollY > 100) {
      siteNav.classList.add('site-nav--scrolled');
    } else {
      siteNav.classList.remove('site-nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* -------------------------------------------------------
     3c. Services Dropdown
  ------------------------------------------------------- */
  var dropdownToggles = document.querySelectorAll('.site-nav__dropdown-toggle');

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var parentLi = toggle.closest('.site-nav__dropdown');
      if (!parentLi) return;

      var isOpen = parentLi.classList.contains('is-open');

      // Close all other dropdowns first
      document.querySelectorAll('.site-nav__dropdown.is-open').forEach(function (el) {
        el.classList.remove('is-open');
        var btn = el.querySelector('.site-nav__dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parentLi.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* -------------------------------------------------------
     3g. Flyout Submenus
  ------------------------------------------------------- */
  var flyoutToggles = document.querySelectorAll('.site-nav__flyout-toggle');

  flyoutToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var parentLi = toggle.closest('.site-nav__has-flyout');
      if (!parentLi) return;

      var isOpen = parentLi.classList.contains('is-open');

      // Close all other flyouts
      document.querySelectorAll('.site-nav__has-flyout.is-open').forEach(function (el) {
        if (el !== parentLi) {
          el.classList.remove('is-open');
          var btn = el.querySelector('.site-nav__flyout-toggle');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        parentLi.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        parentLi.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* -------------------------------------------------------
     Global: Close dropdown + mobile menu on Escape / outside click
  ------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      // Close mobile menu
      if (isMobileMenuOpen()) {
        closeMobileMenu();
      }
      // Close flyouts
      document.querySelectorAll('.site-nav__has-flyout.is-open').forEach(function (el) {
        el.classList.remove('is-open');
        var btn = el.querySelector('.site-nav__flyout-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
      // Close dropdowns
      document.querySelectorAll('.site-nav__dropdown.is-open').forEach(function (el) {
        el.classList.remove('is-open');
        var btn = el.querySelector('.site-nav__dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('click', function (e) {
    // Close mobile menu when clicking outside
    if (isMobileMenuOpen() && mobileMenu && !mobileMenu.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }

    // Close flyouts when clicking outside
    document.querySelectorAll('.site-nav__has-flyout.is-open').forEach(function (el) {
      if (!el.contains(e.target)) {
        el.classList.remove('is-open');
        var btn = el.querySelector('.site-nav__flyout-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close dropdowns when clicking outside
    document.querySelectorAll('.site-nav__dropdown.is-open').forEach(function (el) {
      if (!el.contains(e.target)) {
        el.classList.remove('is-open');
        var btn = el.querySelector('.site-nav__dropdown-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* -------------------------------------------------------
     3d. Mobile Sticky CTA Bar
  ------------------------------------------------------- */
  var mobileCta = document.getElementById('mobile-cta-bar');
  var heroSection = document.querySelector('.hero');

  if (mobileCta && heroSection) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          mobileCta.setAttribute('hidden', '');
        } else {
          mobileCta.removeAttribute('hidden');
        }
      });
    }, { threshold: 0 });

    observer.observe(heroSection);
  }

  /* -------------------------------------------------------
     3e. Smooth Scroll
  ------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      var navHeight = 80;
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });

  /* -------------------------------------------------------
     3f. Close mobile menu on resize
  ------------------------------------------------------- */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 640 && isMobileMenuOpen()) {
      closeMobileMenu();
    }
  });

});
