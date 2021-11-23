/*
Larger
Comments






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
/*
var slideIndexPlus = 1;
showSlidesPlus(slideIndexPlus);

// Next/previous controls
function plusSlidesplus(n) {
  showSlidesPlus((slideIndexPlus += n));
}

// Thumbnail image controls
function currentSlidePlus(n) {
  showSlidesPlus((slideIndexPlus = n));
}

function showSlidesPlus(n) {
  var i;
  var slidesplus = document.getElementsByClassName("mySlidesPlus");
  var dotsplus = document.getElementsByClassName("dotplus");
  if (n > slidesplus.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidesplus.length;
  }
  for (i = 0; i < slidesplus.length; i++) {
    slidesplus[i].style.display = "none";
  }
  for (i = 0; i < dotsplus.length; i++) {
    dotsplus[i].className = dotsplus[i].className.replace(" activeplus", "");
  }
  slidesplus[slideIndexPlus - 1].style.display = "block";
  dotsplus[slideIndexPlus - 1].className += " activeplus";
}
*/
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
