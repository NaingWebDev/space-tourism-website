const hambargarTag = document.querySelector(".hambargar");
const hambargarImgTag = document.querySelector(".hambargar img");
let isClicked = false;
hambargarTag.addEventListener("click", () => {
  const navLinksSmTag = document.querySelector(".nav-links-sm");
  if (isClicked) {
    isClicked = false;
    navLinksSmTag.style.right = "-70%";
    hambargarImgTag.src = "./assets/shared/icon-hamburger.svg";
  } else {
    isClicked = true;
    navLinksSmTag.style.right = 0;
    hambargarImgTag.src = "./assets/shared/icon-close.svg";
    hambargarImgTag.alt = "closed icon";
  }
});
