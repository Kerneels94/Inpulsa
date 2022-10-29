//Slide

let counter = 0;

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  counter++;
  if (counter > slides.length) {
    counter = 1;
  }
  slides[counter - 1].style.display = "block";
  setTimeout(showSlides, 5500);
}

window.onload = showSlides;

// Menu

const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".toggle-btn");

// Toggle button when clicked

toggleBtn.addEventListener("click", () => {
  // If the links does not contain the class menu-toggle add it
  if (!links.classList.contains("menu-toggle")) {
    links.classList.add("menu-toggle");
  } else {
    links.classList.remove("menu-toggle");
  }
});

// Get the button:
let mybutton = document.getElementById("myBtn");
let mybutton2 = document.getElementById("myBtn2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
    mybutton2.style.display = "block";
  } else {
    mybutton.style.display = "none";
    mybutton2.style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// FORm validation
const constraints = {
  bname: {
    presence: { allowEmpty: false },
  },
  name: {
    presence: { allowEmpty: false },
  },
  email: {
    presence: { allowEmpty: false },
    email: true,
  },
  message: {
    presence: { allowEmpty: false },
  },
};

const form = document.getElementById("contact-form");
form.addEventListener(
  "submit",
  function (event) {
    const formValues = {
      bname: form.elements.bname.value,
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    const errors = validate(formValues, constraints);
    if (errors) {
      event.preventDefault();
      const errorMessage = Object.values(errors)
        .map(function (fieldValues) {
          return fieldValues.join(", ");
        })
        .join("\n");

      alert(errorMessage);
    }
  },
  false
);

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".icon", {
  scrollTrigger: ".icons",
  x: -400,
  duration: 3,
});

gsap.from(".section-a-header", {
  scrollTrigger: ".section-a-header",
  y: -200,
  duration: 3,
});

gsap.from(".wwd-background", {
  scrollTrigger: ".wwd-background",
  x: -400,
  duration: 4,
});

gsap.from(".wwd-background2", {
  scrollTrigger: ".wwd-background2",
  x: 400,
  duration: 4,
});

gsap.from(".heading-process", {
  scrollTrigger: ".heading-process",
  y: -200,
  duration: 6,
});
