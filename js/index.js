// Get Elements
let chose = document.querySelector(".toggle-menu");
let ul = document.querySelector("ul");
let portoSpans = Array.from(document.querySelector(".select-item").children);

// burger icon click
window.onclick = function(e) {
  if (e.target.classList.contains("toggle-menu")) {
    ul.classList.toggle("show-ul");
  } else {
    ul.classList.remove("show-ul");
  }
};
// end burger icon

//start nav bar active
let eles = Array.from(document.querySelectorAll("header nav ul a"));
for (let i = 0; i < eles.length; i++) {
  eles[i].onclick = function() {
    for (let k = 0; k < eles.length; k++) {
      eles[k].classList.remove("active");
    }

    eles[i].classList.add("active");
  };
}
// =================================================

// start portofolio spans
portoSpans.forEach(e => {
  e.onclick = function() {
    portoSpans.forEach(ele => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
  };
});
// =========================
