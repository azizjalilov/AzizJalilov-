// Matn ustiga hover qilinganda neon effekt
const title = document.querySelector(".title");
title.addEventListener("mouseover", () => {
  title.style.textShadow = "0 0 20px cyan, 0 0 40px blue";
});
title.addEventListener("mouseout", () => {
  title.style.textShadow = "none";
});
