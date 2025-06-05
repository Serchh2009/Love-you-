const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Frases de amor en distintos idiomas
const phrases = [
  "Te Amo", "I Love You", "Je T’aime", "Ich liebe dich",
  "Ti Amo", "Eu Te Amo", "愛してる", "사랑해",
  "Я тебя люблю", "أنا أحبك", "Wo Ai Ni", "मैं तुमसे प्यार करता हूँ",
  "Σ' αγαπώ", "Ik hou van jou", "Jeg elsker dig", "Jeg elsker deg",
  "Jag älskar dig", "Aşıkım sana", "Mən səni sevirəm", "Mi amas vin"
];

const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff3399";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = phrases[Math.floor(Math.random() * phrases.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);

// Mostrar mensaje grande al hacer clic
function showMessage() {
  const msg = document.getElementById("message");
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  msg.textContent = phrase;
  msg.style.opacity = "1";
  msg.style.transform = "translate(-50%, -50%) scale(1.5)";
  msg.classList.add("explosion");

  setTimeout(() => {
    msg.style.opacity = "0";
    msg.classList.remove("explosion");
    msg.style.transform = "translate(-50%, -50%) scale(1)";
  }, 1500);
}

// Ajustar tamaño si la ventana cambia
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
