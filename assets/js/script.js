/**
 * B.TECH ENGINEERING COLLEGE — MODERN INSTITUTIONAL SCRIPT
 * Pure Vanilla JavaScript — Zero external libraries or frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Sticky Header Effect ---
  const header = document.querySelector('.header');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (header) {
      if (scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Scroll to Top Action ---
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Active Nav Link Highlighting ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .dropdown-item, .mobile-submenu-item a');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.split('#')[0];
    if (cleanHref === currentPath || (currentPath === '' && cleanHref === 'index.html')) {
      link.classList.add('active');

      // Highlight parent nav-link if inside a dropdown
      const parentNavItem = link.closest('.nav-item');
      if (parentNavItem) {
        const parentNavLink = parentNavItem.querySelector('.nav-link');
        if (parentNavLink) parentNavLink.classList.add('active');
      }

      // Open and highlight mobile submenu parent
      const parentMobileItem = link.closest('.mobile-nav-item');
      if (parentMobileItem) {
        const submenu = parentMobileItem.querySelector('.mobile-submenu');
        const toggle = parentMobileItem.querySelector('.mobile-submenu-toggle');
        const parentHeading = parentMobileItem.querySelector('.mobile-nav-link-heading');
        if (submenu) submenu.classList.add('open');
        if (toggle) toggle.style.transform = 'rotate(180deg)';
        if (parentHeading) parentHeading.classList.add('active');
      }
    }
  });

  // --- Mobile Drawer Navigation ---
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-nav-close');

  const openMobileMenu = () => {
    if (mobileBackdrop && mobileDrawer) {
      mobileBackdrop.classList.add('active');
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMobileMenu = () => {
    if (mobileBackdrop && mobileDrawer) {
      mobileBackdrop.classList.remove('active');
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', openMobileMenu);
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Mobile Submenu Toggle
  const submenuToggles = document.querySelectorAll('.mobile-submenu-toggle');
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.closest('.mobile-nav-item');
      if (parent) {
        const submenu = parent.querySelector('.mobile-submenu');
        if (submenu) {
          submenu.classList.toggle('open');
          toggle.style.transform = submenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      }
    });
  });

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // --- Filter Buttons (Programs & Student Projects) ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filterable-item');

  if (filterButtons.length > 0 && filterItems.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        filterItems.forEach(item => {
          const category = item.getAttribute('data-category') || '';
          if (filterValue === 'all' || category.includes(filterValue)) {
            item.style.display = '';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px)';
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Project Details Modal ---
  const modalBackdrop = document.querySelector('#projectModal');
  const modalCloseBtn = document.querySelector('#modalCloseBtn');
  const modalTitle = document.querySelector('#modalProjectTitle');
  const modalCategory = document.querySelector('#modalProjectCategory');
  const modalDescription = document.querySelector('#modalProjectDescription');
  const modalHighlights = document.querySelector('#modalProjectHighlights');

  const openProjectModal = (data) => {
    if (!modalBackdrop) return;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalDescription) modalDescription.textContent = data.description;
    if (modalHighlights) {
      modalHighlights.innerHTML = '';
      if (data.highlights && data.highlights.length > 0) {
        data.highlights.forEach(h => {
          const li = document.createElement('li');
          li.textContent = h;
          modalHighlights.appendChild(li);
        });
      }
    }
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  // Connect project view detail buttons
  const projectDetailButtons = document.querySelectorAll('.view-project-btn');
  projectDetailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.project-card');
      if (card) {
        const title = card.querySelector('.project-title')?.textContent.trim() || 'Engineering Project';
        const category = card.querySelector('.project-tag')?.textContent.trim() || 'Technical Domain';
        const description = card.querySelector('.project-desc')?.textContent.trim() || 'Illustrative engineering project details.';
        const tags = Array.from(card.querySelectorAll('.project-tag')).map(t => t.textContent.trim());

        openProjectModal({
          title,
          category,
          description,
          highlights: tags
        });
      }
    });
  });

  // --- Toast Notification Helper ---
  const showToast = (message) => {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-accent-orange); flex-shrink:0;">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <div>
        <strong style="display:block; font-size:0.9rem; margin-bottom:2px;">Demo Website Notice</strong>
        <span style="font-size:0.8rem; color:#CBDCEF;">${message}</span>
      </div>
    `;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5500);
  };

  // --- Frontend Form Validation (Admissions & Contact Forms) ---
  const demoForms = document.querySelectorAll('form[data-demo-form="true"]');

  demoForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Inputs to validate
      const nameInput = form.querySelector('[name="fullName"]');
      const emailInput = form.querySelector('[name="email"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const branchInput = form.querySelector('[name="branch"]');
      const messageInput = form.querySelector('[name="message"]');

      // Helper to set error
      const setValidationState = (input, valid, errorMsg) => {
        if (!input) return;
        const group = input.closest('.form-group');
        let feedback = group ? group.querySelector('.form-feedback') : null;

        if (!valid) {
          input.classList.add('is-invalid');
          if (feedback) {
            feedback.textContent = errorMsg;
            feedback.classList.add('show');
          }
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
          if (feedback) {
            feedback.classList.remove('show');
          }
        }
      };

      // Validate Name
      if (nameInput) {
        if (!nameInput.value.trim()) {
          setValidationState(nameInput, false, 'Please enter your full name.');
        } else {
          setValidationState(nameInput, true);
        }
      }

      // Validate Email
      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
          setValidationState(emailInput, false, 'Please enter a valid email address.');
        } else {
          setValidationState(emailInput, true);
        }
      }

      // Validate Phone
      if (phoneInput) {
        const digitsOnly = phoneInput.value.replace(/\D/g, '');
        if (digitsOnly.length < 10) {
          setValidationState(phoneInput, false, 'Please enter a valid 10-digit mobile number.');
        } else {
          setValidationState(phoneInput, true);
        }
      }

      // Validate Branch if required
      if (branchInput && branchInput.hasAttribute('required')) {
        if (!branchInput.value) {
          setValidationState(branchInput, false, 'Please select an engineering branch.');
        } else {
          setValidationState(branchInput, true);
        }
      }

      // If valid, show demo submission alert
      if (isValid) {
        form.reset();
        showToast('Enquiry validated successfully! Note: This is an illustrative frontend demo form. No actual data was submitted.');
      }
    });
  });

  // --- Reveal on Scroll (Intersection Observer) ---
  if ('IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
  }
});
