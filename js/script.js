"use strict";

const sections = document.querySelectorAll("section");

//Tager fat om browservinduet og gør noget ved
window.onscroll = () => {
  sections.forEach((sec) => {
    //Får nuværende scrollposition
    let scrollDistance = window.scrollY;
    //Får sektionen position ift. toppen af dokumentet
    let secDistance = sec.offsetTop;

    //Hvis sektionen er kommet ind i synsfeltet, tilføjes 'show-animate', eller fjernes den
    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

const sectionOne = document.querySelector(".sec1");

sectionOne.addEventListener("mouseover", function () {
  this.classList.add("scale");
});
sectionOne.addEventListener("mouseout", function () {
  this.classList.remove("scale");
});

document.addEventListener("DOMContentLoaded", () => {
  // ===== HORSE =====
  const horseImage = document.getElementById("horseElem");
  const getHorseBtn = document.getElementById("horseBtn");
  const soundHorse = new Audio("../sound/horse.wav");

  const playHorseSound = () => {
    soundHorse.currentTime = 0;
    soundHorse.play().catch((err) => console.error("Audio play failed:", err));
  };

  if (horseImage) {
    horseImage.addEventListener("click", function () {
      playHorseSound();

      // Restart animation
      this.classList.remove("anim-scale");
      void this.offsetWidth;
      this.classList.add("anim-scale");
    });
  }

  if (getHorseBtn) {
    getHorseBtn.addEventListener("click", playHorseSound);
  }

  // ===== ELEPHANT =====
  const elephantImage = document.getElementById("elephantElem");
  const getElephantBtn = document.getElementById("elephantBtn");
  const soundElephant = new Audio("../sound/elephant.wav");

  const playElephantSound = () => {
    soundElephant.currentTime = 0;
    soundElephant
      .play()
      .catch((err) => console.error("Audio play failed:", err));
  };

  if (elephantImage) {
    elephantImage.addEventListener("click", function () {
      playElephantSound();

      // Restart animation
      this.classList.remove("anim-scale");
      void this.offsetWidth;
      this.classList.add("anim-scale");
    });
  }

  if (getElephantBtn) {
    getElephantBtn.addEventListener("click", playElephantSound);
  }

  // ===== DOG =====
  const dogImage = document.getElementById("dogElem");
  const getDogBtn = document.getElementById("dogBtn");
  const soundDog = new Audio("../sound/dog.wav");

  const playDogSound = () => {
    soundDog.currentTime = 0;
    soundDog.play().catch((err) => console.error("Audio play failed:", err));
  };

  if (dogImage) {
    dogImage.addEventListener("click", function () {
      playDogSound();

      // Restart animation
      this.classList.remove("anim-scale");
      void this.offsetWidth;
      this.classList.add("anim-scale");
    });
  }

  if (getDogBtn) {
    getDogBtn.addEventListener("click", playDogSound);
  }
});

// ===== GIRAFFE
const giraffeImage = document.getElementById("giraffeElem");
if (giraffeImage) {
  giraffeImage.addEventListener("click", function () {
    this.classList.toggle("anim-flip");
  });
}
