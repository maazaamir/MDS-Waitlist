window.addEventListener('load', () => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.to(".grid-background", { opacity: 0.4, duration: 2 })
      .from(".nav", { y: -20, opacity: 0, duration: 1 }, "-=1.5")
      .from(".glass-card", { 
          scale: 0.9, 
          y: 50, 
          opacity: 0, 
          duration: 1.5,
          boxShadow: "0 0 0 rgba(0,0,0,0)"
      }, "-=1")
      .from(".main-headline", { y: 30, opacity: 0, duration: 1 }, "-=0.8")
      .from(".timer-box", { y: 20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
      .from(".form-group", { width: 0, opacity: 0, duration: 1 }, "-=0.3");
});

// 2. Real Countdown Logic
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 7); // Sets countdown for 7 days from today

function updateCountdown() {
    const now = new Date().getTime();
    const diff = launchDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = d < 10 ? "0" + d : d;
    document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
}

setInterval(updateCountdown, 1000);

// 3. Interactive Background
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    gsap.to(".grid-background", {
        x: x * 30,
        y: y * 30,
        duration: 2,
        ease: "sine.out"
    });
});