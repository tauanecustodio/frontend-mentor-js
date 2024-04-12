document.querySelectorAll(".toggle").forEach((toggle) => {
  toggle.addEventListener("click", function() {
    
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      document.querySelectorAll(".toggle").forEach((t) => {
        t.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});
