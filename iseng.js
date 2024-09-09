var a = document.querySelector(".sejarah");
var b = document.querySelector(".php");

a.addEventListener("mouseenter", () => {
  a.classList.add("hidden");
  b.classList.add("hidden");
  setTimeout(() => {
    a.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ06l0MwiuJF64EtaWy4lGxrbB1nNcTsplhQ&s"
    );
    b.setAttribute("src", "https://cache.lahelu.com/image-PL5l2ZF5G-62840");

    a.classList.remove("hidden");
    b.classList.remove("hidden");
  }, 300); // Waktu transisi fade out
});

a.addEventListener("mouseleave", () => {
  a.classList.add("hidden");
  b.classList.add("hidden");
  setTimeout(() => {
    a.setAttribute(
      "src",
      "https://www.sman1kalasan.sch.id/wp-content/uploads/2023/02/ada_lovelace.jpg"
    );
    b.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
    );
    a.classList.remove("hidden");
    b.classList.remove("hidden");
  }, 300); // Waktu transisi fade out
});
