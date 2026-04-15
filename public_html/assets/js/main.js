document.addEventListener('DOMContentLoaded', function () {

  /* -------------------------------------------------------
     Initialize Lucide Icons
  ------------------------------------------------------- */
  if (window.lucide) lucide.createIcons();

  /* -------------------------------------------------------
     Hamburger Menu Toggle
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
     Mobile Accordion Toggles
  ------------------------------------------------------- */
  var accordionToggles = document.querySelectorAll('.site-nav__mobile-accordion-toggle');

  accordionToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var parentLi = toggle.closest('.site-nav__mobile-accordion');
      if (!parentLi) return;

      var isOpen = parentLi.classList.contains('is-open');

      accordionToggles.forEach(function (otherToggle) {
        var otherLi = otherToggle.closest('.site-nav__mobile-accordion');
        if (otherLi && otherLi !== parentLi) {
          otherLi.classList.remove('is-open');
          otherToggle.setAttribute('aria-expanded', 'false');
        }
      });

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
     Scroll Nav Effect
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
     Services Dropdown
  ------------------------------------------------------- */
  var dropdownToggles = document.querySelectorAll('.site-nav__dropdown-toggle');

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var parentLi = toggle.closest('.site-nav__dropdown');
      if (!parentLi) return;

      var isOpen = parentLi.classList.contains('is-open');

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
     Flyout Submenus
  ------------------------------------------------------- */
  var flyoutToggles = document.querySelectorAll('.site-nav__flyout-toggle');

  flyoutToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var parentLi = toggle.closest('.site-nav__has-flyout');
      if (!parentLi) return;

      var isOpen = parentLi.classList.contains('is-open');

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
     Global: Close on Escape / outside click
     Uses boolean flags to avoid unnecessary querySelectorAll
  ------------------------------------------------------- */
  var anyDropdownOpen = false;
  var anyFlyoutOpen = false;

  // Track open state
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      anyDropdownOpen = document.querySelector('.site-nav__dropdown.is-open') !== null;
    });
  });
  flyoutToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      anyFlyoutOpen = document.querySelector('.site-nav__has-flyout.is-open') !== null;
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (isMobileMenuOpen()) closeMobileMenu();

      if (anyFlyoutOpen) {
        document.querySelectorAll('.site-nav__has-flyout.is-open').forEach(function (el) {
          el.classList.remove('is-open');
          var btn = el.querySelector('.site-nav__flyout-toggle');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
        anyFlyoutOpen = false;
      }

      if (anyDropdownOpen) {
        document.querySelectorAll('.site-nav__dropdown.is-open').forEach(function (el) {
          el.classList.remove('is-open');
          var btn = el.querySelector('.site-nav__dropdown-toggle');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
        anyDropdownOpen = false;
      }
    }
  });

  document.addEventListener('click', function (e) {
    if (isMobileMenuOpen() && mobileMenu && !mobileMenu.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }

    if (anyFlyoutOpen) {
      document.querySelectorAll('.site-nav__has-flyout.is-open').forEach(function (el) {
        if (!el.contains(e.target)) {
          el.classList.remove('is-open');
          var btn = el.querySelector('.site-nav__flyout-toggle');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
      anyFlyoutOpen = document.querySelector('.site-nav__has-flyout.is-open') !== null;
    }

    if (anyDropdownOpen) {
      document.querySelectorAll('.site-nav__dropdown.is-open').forEach(function (el) {
        if (!el.contains(e.target)) {
          el.classList.remove('is-open');
          var btn = el.querySelector('.site-nav__dropdown-toggle');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
      anyDropdownOpen = document.querySelector('.site-nav__dropdown.is-open') !== null;
    }
  });

  /* -------------------------------------------------------
     Mobile Sticky CTA Bar
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
     Smooth Scroll (respects prefers-reduced-motion)
  ------------------------------------------------------- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      var navHeight = 90;
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });

  /* -------------------------------------------------------
     Close mobile menu on resize (debounced + passive)
  ------------------------------------------------------- */
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth >= 640 && isMobileMenuOpen()) {
        closeMobileMenu();
      }
    }, 100);
  }, { passive: true });

});
