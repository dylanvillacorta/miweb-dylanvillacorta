document.addEventListener("DOMContentLoaded", () => {
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
