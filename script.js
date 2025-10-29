// Fade-in scroll animation
document.addEventListener("scroll", () => {
  document.querySelectorAll(".content").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });

  // Back-to-top button
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 200) btn.classList.add("show");
  else btn.classList.remove("show");
});

// Smooth scroll to top
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typing effect di hero subtitle
const text = "It's Great Time to Start Living Now";
let i = 0;
function typing() {
  if (i < text.length) {
    document.querySelector(".hero p").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
window.onload = typing;
