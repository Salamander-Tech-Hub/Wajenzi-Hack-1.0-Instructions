/*
  =====================================================
  SALAMANDER TECH HUB - LANDING PAGE V2
  Main JavaScript (Manchooter Team)
  =====================================================
  
  Features:
  - Mobile navigation toggle with accessibility
  - Sticky header on scroll
  - Reveal-on-scroll animations
  - Project filtering (client-side)
  - Blog "Load More" functionality
  - Contact form validation
  - Accessible modal for success message
  - Smooth scrolling for anchors
*/

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initScrollEffects();
  initRevealOnScroll();
  initProjectFilter();
  initBlogLoadMore();
  initContactForm();
  initSmoothScroll();
  initChatbot();
});

/* ===== NAVIGATION ===== */
function initNavigation() {
  const toggle = document.querySelector(".navbar__toggle");
  const menu = document.querySelector(".navbar__menu");
  const header = document.querySelector("header");

  // Toggle mobile menu
  if (toggle) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }

  // Close menu on link click
  const navLinks = document.querySelectorAll(".navbar__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (toggle && toggle.classList.contains("active")) {
        toggle.classList.remove("active");
        menu.classList.remove("active");
      }
    });
  });

  // Set active link based on current page
  setActiveNavLink();

  // Sticky header effect
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    lastScrollTop = scrollTop;
  });
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar__link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* ===== SCROLL EFFECTS ===== */
function initScrollEffects() {
  // Already handled in navigation toggle
}

/* ===== REVEAL ON SCROLL ===== */
function initRevealOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections and cards for reveal animation
  const revealElements = document.querySelectorAll(
    "section > *, .projects__card, .blog__card, .about__member, .about__value-card"
  );
  revealElements.forEach((el) => observer.observe(el));
}

/* ===== PROJECT FILTERING ===== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll(".projects__filter-btn");
  const projectCards = document.querySelectorAll("[data-project-tag]");

  if (filterBtns.length === 0) return; // Not on projects page

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Filter and animate cards
      projectCards.forEach((card) => {
        const tags = card.getAttribute("data-project-tag").split(",");
        const isMatch = filter === "all" || tags.includes(filter);

        if (isMatch) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
          }, 10);
        } else {
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

/* ===== BLOG LOAD MORE ===== */
function initBlogLoadMore() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const hiddenPosts = document.querySelectorAll(".blog__card.hidden");

  if (!loadMoreBtn) return; // Not on blog page

  let postsToShow = 2;

  loadMoreBtn.addEventListener("click", function () {
    let count = 0;

    hiddenPosts.forEach((post) => {
      if (post.classList.contains("hidden") && count < postsToShow) {
        post.classList.remove("hidden");
        post.style.animation = "reveal 600ms ease-out forwards";
        count++;
      }
    });

    // Hide button if no more posts
    const remainingHidden =
      document.querySelectorAll(".blog__card.hidden").length;
    if (remainingHidden === 0) {
      loadMoreBtn.style.display = "none";
    }
  });
}

/* ===== CONTACT FORM ===== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return; // Not on contact page

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    clearFormErrors();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate
    let isValid = true;

    if (!name) {
      showFieldError("name", "Name is required");
      isValid = false;
    }

    if (!email || !isValidEmail(email)) {
      showFieldError("email", "Valid email is required");
      isValid = false;
    }

    if (!message) {
      showFieldError("message", "Message is required");
      isValid = false;
    }

    if (!isValid) return;

    // Show success message
    showSuccessModal();

    // Reset form
    form.reset();
  });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.classList.add("form-error-field");

  const errorEl = document.createElement("div");
  errorEl.className = "form-error";
  errorEl.textContent = message;

  const formGroup = field.closest(".form-group");
  formGroup.appendChild(errorEl);
}

function clearFormErrors() {
  const errors = document.querySelectorAll(".form-error");
  errors.forEach((error) => error.remove());

  const errorFields = document.querySelectorAll(".form-error-field");
  errorFields.forEach((field) => field.classList.remove("form-error-field"));
}

function showSuccessModal() {
  const modal = document.getElementById("successModal");
  modal.classList.add("active");

  // Focus management for accessibility
  const closeBtn = modal.querySelector(".modal__close");
  closeBtn.focus();

  // Close on button click
  const closeButton = modal.querySelector(".modal__close");
  closeButton.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  // Close on modal background click
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
  // Use CSS scroll-behavior: smooth (already in styles.css)
  // This is a fallback for browsers that don't support it

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ===== UTILITY FUNCTIONS ===== */

/**
 * Debounce function for better performance on scroll/resize events
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Add CSS class to multiple elements
 */
function addClass(selector, className) {
  document.querySelectorAll(selector).forEach((el) => {
    el.classList.add(className);
  });
}

/**
 * Remove CSS class from multiple elements
 */
function removeClass(selector, className) {
  document.querySelectorAll(selector).forEach((el) => {
    el.classList.remove(className);
  });
}

/*
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/* ===== CHATBOT ===== */
function initChatbot() {
  const chatbotButton = document.getElementById("chatbot-button");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatbotClose = document.getElementById("chatbot-close");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotSend = document.getElementById("chatbot-send");
  const chatbotMessages = document.getElementById("chatbot-messages");

  if (!chatbotButton) return;

  // Toggle chatbot window
  chatbotButton.addEventListener("click", function () {
    chatbotWindow.classList.toggle("active");
    if (chatbotWindow.classList.contains("active")) {
      chatbotInput.focus();
    }
  });

  // Close chatbot
  if (chatbotClose) {
    chatbotClose.addEventListener("click", function () {
      chatbotWindow.classList.remove("active");
    });
  }

  // Send message
  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Add user message
    const userMsg = document.createElement("div");
    userMsg.className = "chatbot-message user";
    userMsg.innerHTML = `<p>${escapeHtml(message)}</p>`;
    chatbotMessages.appendChild(userMsg);

    // Clear input
    chatbotInput.value = "";

    // Simulate bot response
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.className = "chatbot-message bot";
      botMsg.innerHTML = `<p>Thanks for your message! Our team will get back to you soon.</p>`;
      chatbotMessages.appendChild(botMsg);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 500);

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  chatbotSend.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
