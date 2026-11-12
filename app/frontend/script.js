document.addEventListener("DOMContentLoaded", () => {
  // Update copyright year
  const yearSpan = document.querySelector(".footer-copy");
  if (yearSpan) {
    yearSpan.textContent = yearSpan.textContent.replace(
      "2026",
      new Date().getFullYear().toString()
    );
  }

  // --- Copy email handling ---
  const inlineCopyBtn = document.getElementById("inlineCopyBtn");
  const EMAIL_ADDRESS = "dylanvillacortapoma@outlook.com";

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

  if (inlineCopyBtn) {
    inlineCopyBtn.addEventListener("click", () => {
      copyEmail(inlineCopyBtn, ".copy-badge-text", "Copiar");
    });
  }
});
