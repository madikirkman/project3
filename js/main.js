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
toggle between hiding and showing the dropdown content */
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
