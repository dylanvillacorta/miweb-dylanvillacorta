document.addEventListener("DOMContentLoaded", () => {
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
    ".skill-card, .project-card, .contact-link"
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
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Typewriter effect for hero role
  const roleEl = document.querySelector(".hero-role");
  if (roleEl) {
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
  const yearSpan = document.querySelector(".footer p");
  if (yearSpan) {
    yearSpan.textContent = yearSpan.textContent.replace(
      "2026",
      new Date().getFullYear().toString()
    );
  }
});
