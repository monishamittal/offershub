document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".header-ul");
  const barIcon = document.getElementById("bar");
  const closeIcon = document.getElementById("closeSidebar");

  barIcon.addEventListener("click", function () {
    sidebar.classList.add("active");
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    sidebar.classList.remove("active");
    closeIcon.style.display = "none";
  });
});
