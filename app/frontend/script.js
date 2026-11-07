document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Smooth navbar background on scroll
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(15, 15, 15, 0.95)";
    } else {
      navbar.style.backgroundColor = "rgba(15, 15, 15, 0.9)";
    }
  });

  // Fade-in animation on scroll
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeElements = document.querySelectorAll(
    ".skill-card, .project-card, .contact-link, .contact-email-badge"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => {
    if (reduceMotion) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Typewriter effect for hero role
  const roleEl = document.querySelector(".hero-role");
  if (roleEl && !reduceMotion) {
    const text = roleEl.textContent;
    roleEl.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        roleEl.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
      }
    }

    setTimeout(typeWriter, 400);
  }

  // Update copyright year
  const yearSpan = document.querySelector(".footer-copy");
  if (yearSpan) {
    yearSpan.textContent = yearSpan.textContent.replace(
      "2026",
      new Date().getFullYear().toString()
    );
  }

  // --- Email Contact Modal & Copy Handling ---
  const emailModal = document.getElementById("emailModal");
  const emailBtn = document.getElementById("emailBtn");
  const closeElements = document.querySelectorAll("[data-close-modal]");
  const modalCopyBtn = document.getElementById("modalCopyBtn");
  const inlineCopyBtn = document.getElementById("inlineCopyBtn");
  const providerLinks = document.querySelectorAll(".email-provider-card");
  const EMAIL_ADDRESS = "dylanvillacortapoma@outlook.com";

  let lastFocused = null;
  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function openEmailModal() {
    if (!emailModal) return;
    lastFocused = document.activeElement;
    emailModal.classList.add("active");
    emailModal.setAttribute("aria-hidden", "false");
    if (emailBtn) emailBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    const first = emailModal.querySelector(".email-modal-close");
    if (first) first.focus();
  }

  function closeEmailModal() {
    if (!emailModal) return;
    emailModal.classList.remove("active");
    emailModal.setAttribute("aria-hidden", "true");
    if (emailBtn) emailBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  if (emailBtn) {
    emailBtn.addEventListener("click", openEmailModal);
  }

  closeElements.forEach((el) => {
    el.addEventListener("click", closeEmailModal);
  });

  // Escape closes the modal; Tab is trapped inside it
  document.addEventListener("keydown", (e) => {
    if (!emailModal || !emailModal.classList.contains("active")) return;
    if (e.key === "Escape") {
      closeEmailModal();
      return;
    }
    if (e.key === "Tab") {
      const items = Array.from(emailModal.querySelectorAll(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Close modal after clicking any provider link
  providerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(closeEmailModal, 200);
    });
  });

  // Copy to clipboard helper
  function copyEmail(buttonEl, labelSelector, defaultText) {
    if (!buttonEl) return;

    const handleSuccess = () => {
      buttonEl.classList.add("copied");
      const label = buttonEl.querySelector(labelSelector);
      if (label) label.textContent = "¡Copiado!";

      setTimeout(() => {
        buttonEl.classList.remove("copied");
        if (label) label.textContent = defaultText;
      }, 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(EMAIL_ADDRESS)
        .then(handleSuccess)
        .catch(() => fallbackCopy(EMAIL_ADDRESS, handleSuccess));
    } else {
      fallbackCopy(EMAIL_ADDRESS, handleSuccess);
    }
  }

  function fallbackCopy(text, callback) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    textArea.setAttribute("readonly", "");
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      if (callback) callback();
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
    }
    document.body.removeChild(textArea);
  }

  if (modalCopyBtn) {
    modalCopyBtn.addEventListener("click", () => {
      copyEmail(modalCopyBtn, ".copy-text", "Copiar");
    });
  }

  if (inlineCopyBtn) {
    inlineCopyBtn.addEventListener("click", () => {
      copyEmail(inlineCopyBtn, ".copy-badge-text", "Copiar");
    });
  }
});
