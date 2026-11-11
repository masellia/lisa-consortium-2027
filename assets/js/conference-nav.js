document.addEventListener("DOMContentLoaded", () => {
  const hoverPointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  document.querySelectorAll(".conference-nav-dropdown").forEach((dropdown) => {
    const summary = dropdown.querySelector("summary");

    dropdown.addEventListener("mouseenter", () => {
      if (hoverPointer.matches) dropdown.open = true;
    });

    dropdown.addEventListener("mouseleave", () => {
      if (hoverPointer.matches) dropdown.open = false;
    });

    summary.addEventListener("click", (event) => {
      if (hoverPointer.matches && event.detail > 0) event.preventDefault();
    });
  });
});
