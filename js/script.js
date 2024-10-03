document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    const pantallaCarga = document.querySelector(".carga");
    pantallaCarga.classList.add("d-none");
  });

  const cards = document.querySelectorAll(".img-fluid");
  const imgCentral = document.querySelector(".grid-item-principal img");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      imgCentral.src = e.target.src;
    });
  });
});
