// jump-to-top.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Jump-to-top Script läuft!");
  const btnId = "jumpToTop";

  // Button erzeugen
  let btn = document.getElementById(btnId);
  if (!btn) {
    btn = document.createElement("a");
    btn.id = btnId;
    btn.className = "jump-to-top";
    btn.href = "#";
    btn.innerHTML = "⬆️";
    document.body.appendChild(btn);
  }

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Button anzeigen
    if (currentScroll > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Button click = smooth scroll nach oben
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
