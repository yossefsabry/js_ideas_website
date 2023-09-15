const stars1 = document.getElementById("stars1");
const moon2 = document.getElementById("moon2");
const mountains3 = document.getElementById("mountains3");
const mountains4 = document.getElementById("mountains4");
const river5 = document.getElementById("river5");
const boat6 = document.getElementById("boat6");
const mountains7 = document.getElementById("mountains7");
const novil = document.getElementById("novil");
const hero = document.querySelector(".hero");

function updateScroll() {
  const value = window.scrollY;

  stars1.style.left = value + "px";
  moon2.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river5.style.top = value + "px";
  boat6.style.top = value + "px";
  boat6.style.left = value * 3 + "px";
  novil.style.fontSize = value + "px";

  if (value >= 67) {
    novil.style.fontSize = "67px";
    novil.style.position = "fixed";

    if (value >= 417) {
      novil.style.display = "none";
      moon2.style.display = "none";
      mountains3.style.display = "none";
      mountains4.style.display = "none";
      river5.style.display = "none";
      boat6.style.display = "none";
    } else {
      novil.style.display = "block";
      mountains3.style.display = "block";
      mountains4.style.display = "block";
      river5.style.display = "block";
      boat6.style.display = "block";
      moon2.style.display = "block";
    }

    if (value >= 167) {
      hero.style.background = "linear-gradient(#376281, #10001f)";
    } else if (value <= 167) {
      hero.style.background = "linear-gradient(#200016, #10001f)";
    }
  }
}

function scrollHandler() {
  requestAnimationFrame(updateScroll);
}

window.addEventListener("scroll", scrollHandler);
