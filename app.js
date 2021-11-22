let data = {};
fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data = { ...data };
    changeDestination(data);
    changeCrew(data);
    changeTech(data);
  })
  .catch((error) => {
    console.log("Error occur", error);
  });

function changeDestination(event) {
  const liTag = document.querySelectorAll(".dest-nav li");

  const imgTag = document.querySelector(".img-container img");

  const h2Tag = document.querySelector(".about-planet h2");
  const pTag = document.querySelector(".about-planet p");

  const distanceTag = document.querySelector(".distance #distance");
  const timeTakenTag = document.querySelector(".distance #time-taken");

  liTag.forEach((li) => {
    li.addEventListener("click", () => {
      const activeLiTag = document.querySelector(".dest-nav .active");
      activeLiTag.classList.remove("active");
      li.classList.add("active");

      let showData = event.destinations[li.id];
      imgTag.src = `${showData.images.png}`;

      h2Tag.innerHTML = `${showData.name}`;

      pTag.innerHTML = `${showData.description}`;

      distanceTag.innerHTML = `${showData.distance}`;
      timeTakenTag.innerHTML = `${showData.travel}`;
    });
  });
}

function changeCrew(event) {
  const spanTags = document.querySelectorAll(".crew-nav span");
  const imgTag = document.querySelector(".img img");
  const nameTag = document.querySelector(".about-crew h3");
  const positionTag = document.querySelector(".about-crew h5");
  const paraTag = document.querySelector(".about-crew p");

  spanTags.forEach((span) => {
    span.addEventListener("click", () => {
      const activeSpanTag = document.querySelector(".crew-nav .active");
      activeSpanTag.classList.remove("active");
      span.classList.add("active");

      let showCrew = event.crew[span.id];
      imgTag.src = `${showCrew.images.png}`;

      nameTag.innerHTML = `${showCrew.name}`;
      positionTag.innerHTML = `${showCrew.role}`;
      paraTag.innerHTML = `${showCrew.bio}`;
    });
  });
}

function changeTech(event) {
  const imgTag = document.querySelector(".img");
  const titleTag = document.querySelector(".destription h3");
  const paraTag = document.querySelector(".destription p");
  const spanTags = document.querySelectorAll(".tech-nav span");

  spanTags.forEach((span) => {
    span.addEventListener("click", () => {
      const activeSpanTag = document.querySelector(".tech-nav .active");
      activeSpanTag.classList.remove("active");
      span.classList.add("active");

      let showTech = event.technology[span.id];
      if (window.innerWidth < 992) {
        imgTag.style.backgroundImage = `url("${showTech.images.landscape}")`;
      } else {
        imgTag.style.backgroundImage = `url("${showTech.images.portrait}")`;
      }
      titleTag.innerHTML = `${showTech.name}`;
      paraTag.innerHTML = `${showTech.description}`;
    });
  });
}
