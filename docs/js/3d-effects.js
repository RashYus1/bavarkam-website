// Scroll Reveal
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// Mouse 3D Tilt
document.querySelectorAll(".product-card-3d").forEach(card => {
  card.addEventListener("mousemove", e => {
    let x = e.offsetX;
    let y = e.offsetY;
    let rotateY = (-1/5 * x + 20);
    let rotateX = (1/5 * y - 20);
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});

// Animated Counter
document.querySelectorAll(".counter").forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / 200;
    if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});