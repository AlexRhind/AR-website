

/* Toggle show/hide nav menu links onclick the hamburger menu */
function toggleMenu() {
    var x = document.getElementById("siteLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }