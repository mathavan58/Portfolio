 // Typed.js
new Typed("#typed", {
  strings: [
    "Front-End Developer",
    "HTML CSS JAVASCRIPT REACT.JS",
    "Creative Problem Solver",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});


const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2,
});

faders.forEach((el) => appearOnScroll.observe(el));

// ScrollReveal
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1500,
  delay: 200,
  origin: "bottom",
  viewFactor: 0.1,
});

ScrollReveal().reveal(".home");
ScrollReveal().reveal(".about");
ScrollReveal().reveal(".skill");
ScrollReveal().reveal(".resume");
ScrollReveal().reveal(".project");
ScrollReveal().reveal(".contact");

// Contact Form Submit (Formspree)
window.onload = function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        form.reset();
        alert("✅ Your message has been sent!");
      } else {
        alert("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      alert("❌ An error occurred. Please try again.");
    }
  });

  // Highlight nav links on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".anchor"); // ✅ FIXED

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
  link.classList.remove("active");
  if (link.getAttribute("href") === `#${currentSection}`) {
    link.classList.add("active");
  }
});
  });

  window.dispatchEvent(new Event("scroll"));
};

// const homeSection = document.querySelector(".home");
// if (homeSection) {
//   homeSection.style.display = "flex";
// }

//   const sidebar = document.getElementById("sidebar");
// const openBtn = document.getElementById("openSidebar");
//   const closeBtn = document.getElementById("closeSidebar");


// openBtn.addEventListener("click", () => {
//   sidebar.classList.add("active");
// });

//   closeBtn.addEventListener("click", () => {
//     sidebar.classList.remove("active");
//   });

 document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('sidebar-toggle').checked = false;
    });
  });

