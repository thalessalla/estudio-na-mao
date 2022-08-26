const accordionList = document.querySelectorAll(".js-accordion dt");

function activeAccordion() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

accordionList.forEach((item) => {
  item.addEventListener("click", activeAccordion);
});

//Carrossel

function Carrossel() {
  const controls = document.querySelectorAll(".control");
  let currentItem = 0;
  const items = document.querySelectorAll(".item");
  const maxItems = items.length;

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      isLeft = e.target.classList.contains("arrow-left");

      if (isLeft) {
        currentItem -= 1;
      } else {
        currentItem += 1;
      }

      if (currentItem >= maxItems) {
        currentItem = 0;
      }

      if (currentItem < 0) {
        currentItem = maxItems - 1;
      }

      items.forEach((item) => item.classList.remove("current-item"));

      items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });

      items[currentItem].classList.add("current-item");
    });
    setInterval(control, 1000);
  });
}

Carrossel();

// Slide de pagina

const linksInternos = document.querySelectorAll('.js-link a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topo = section.offsetTop;

  window.scrollTo({
    top: topo,
    behavior: "smooth",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

//Scroll menu

function scroll() {
  const menu = document.querySelector(".header");
  const menuBkg = document.querySelector(".menu");

  function activeScroll() {
    menu.classList.toggle("scrollnav", scrollY > 0);
    menuBkg.classList.toggle("menuScroll", scrollY > 0);
  }

  window.addEventListener("scroll", activeScroll);
}

scroll();

// Animar ao scroll

function scrollAnimado() {
  const sections = document.querySelectorAll(".js-fade-up");
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo-scroll");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}

// Scroll lateral

const sections = document.querySelectorAll(".js-fade-right");
const windowMetade = window.innerHeight * 0.6;
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add("ativo-scroll-right");
    }
  });
}

window.addEventListener("scroll", animaScroll);

scrollAnimado();

//popup video

function popupVideo() {
  const videoSaibaMais = document.querySelector(".popup-video video");

  document.querySelectorAll(".video-saiba-mais").forEach((vid) => {
    vid.onclick = () => {
      document.querySelector(".popup-video").style.display = "block";
      // document.querySelector(".popup-video video-saiba-mais").src =
      //vid.getAttribute("src");
    };
  });
  document.querySelector(".popup-video button").onclick = () => {
    document.querySelector(".popup-video").style.display = "none";
    videoSaibaMais.pause();
  };
}

popupVideo();
