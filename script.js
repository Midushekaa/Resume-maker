document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const navbar = document.getElementById('navbar');

  // Mobile nav toggle
  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
        if (navbar && navbar.classList.contains('open')) navbar.classList.remove('open');
      }
    });
  });

  // Skill bar animation
  document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-bar');

  if (skillBars.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const percent = bar.dataset.percent;
          const level = bar.querySelector('.skill-level');
          if (level) level.style.width = percent;
          obs.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });

    skillBars.forEach(bar => observer.observe(bar));
  }
});

  // Footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Contact form submit
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! Your message was not actually sent (demo). Replace with your mail endpoint.');
      form.reset();
    });
  }

  // ===== Automatically update age =====
  const ageSpan = document.getElementById('age');
    if (ageSpan) {
      const birthYear = 2002;  // your birth year
      const birthMonth = 10;  // June = 5 (0 = January)
      const birthDay = 3;   // your birth day

      const today = new Date();
      let age = today.getFullYear() - birthYear;

      // Adjust if birthday hasn't occurred yet this year
      if (today.getMonth() < birthMonth || 
         (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
        age--;
      }

      ageSpan.textContent = age;
    }
  });

  // Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Get all project images
const projectImages = document.querySelectorAll(".project-box img");

projectImages.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent = this.alt || "";
  });
});

// Close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Also close modal when clicking outside the image
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
