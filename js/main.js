/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionPlus() {
  document.getElementById("myDropdownplus").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtnplus")) {
    var dropdownsplus = document.getElementsByClassName(
      "dropdown-content-plus"
    );
    var i;
    for (i = 0; i < dropdownsplus.length; i++) {
      var openDropdownPlus = dropdownsplus[i];
      if (openDropdownPlus.classList.contains("show")) {
        openDropdownPlus.classList.remove("show");
      }
    }
  }
};

/*MULTIPLY VERSION*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionMultiply() {
  document.getElementById("myDropdownMultiply").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtnmultiply")) {
    var dropdownsmultiply = document.getElementsByClassName(
      "dropdown-content-multiply"
    );
    var i;
    for (i = 0; i < dropdownsplus.length; i++) {
      var openDropdownMultiply = dropdownsmultiply[i];
      if (openDropdownMultiply.classList.contains("show")) {
        openDropdownMultiply.classList.remove("show");
      }
    }
  }
};

/* DIVIDE VERSION */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content  */
function myFunctionDivide() {
  document.getElementById("myDropdownDivide").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtndivide")) {
    var dropdownsdivide = document.getElementsByClassName(
      "dropdown-content-divide"
    );
    var i;
    for (i = 0; i < dropdownsplus.length; i++) {
      var openDropdownDivide = dropdowns[i];
      if (openDropdownDivide.classList.contains("show")) {
        openDropdownDivide.classList.remove("show");
      }
    }
  }
};

/* EQUALS VERSION */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionEquals() {
  document.getElementById("myDropdownEquals").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtnequals")) {
    var dropdownsequals = document.getElementsByClassName(
      "dropdown-content-equals"
    );
    var i;
    for (i = 0; i < dropdownsequals.length; i++) {
      var openDropdownEquals = dropdownsequals[i];
      if (openDropdownEquals.classList.contains("show")) {
        openDropdownEquals.classList.remove("show");
      }
    }
  }
};

const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

var slideIndex = [1, 1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

const scrollOffset = 100;

const scrollElement = document.querySelector(".js-scroll");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add("scrolled");
};

const hideScrollElement = () => {
  scrollElement.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
    displayScrollElement();
  } else {
    hideScrollElement();
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

/* Auto typing effect */

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
