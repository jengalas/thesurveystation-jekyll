/******************************************************************************
Main navigation 
*******************************************************************************/ 

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        
        // adds the menu (hamburger) icon 
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        
        // adds the close (x) icon 
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'’'></i>";
    }
}
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}
/* Close submenu from anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
/* Event listener */
  document.addEventListener("click", closeSubmenu, false);
/* End navigation */  


/******************************************************************************
Accordion 
*******************************************************************************/

const accordionItems = document.querySelectorAll(".accordion-item");
const accordionOpenFirst = document.querySelectorAll(".accordion.open-first");

/* Event listener */
window.addEventListener("load", () => {
  accordionItems.forEach((accordion, index) => {
    if (accordionOpenFirst.length == 1) {
      if (index == 0) {
        toggleAccordion(0);  // First panel open by default
      }
    }
    const accordionTrigger = accordion.querySelector(".accordion-trigger"); 
    accordionTrigger.addEventListener("click", () => toggleAccordion(index));
  });
});

/* Toggle function */
const toggleAccordion = (index) => {
  resetAccordions(index);
  
  const currentAccordion = accordionItems[index];
  currentAccordion.classList.toggle("is-active");

  const accordionContent = currentAccordion.querySelector(".accordion-content");
  const accordionTrigger = currentAccordion.querySelector(".accordion-trigger");
  const panelState = localStorage.getItem("panelState");

  if (currentAccordion.classList.contains("is-active") || panelState == "open") {
    accordionContent.style.height = `${accordionContent.scrollHeight}px`;
    accordionTrigger.setAttribute("aria-expanded", "true");
    sessionStorage.setItem("panelState", "open");
  } else {
    accordionContent.style.height = 0;
    accordionTrigger.setAttribute("aria-expanded", "false");
  }
};

/* Only open one panel at a time */
const resetAccordions = (targetIndex) => {
  accordionItems.forEach((accordion, index) => {
    const accordionContent = accordion.querySelector(".accordion-content");
    const accordionTrigger = accordion.querySelector(".accordion-trigger");
    if (targetIndex != index) {
      accordion.classList.remove("is-active");
      accordionContent.style.height = 0;
      accordionTrigger.setAttribute("aria-expanded", "false");
    }
  });
};

/******************************************************************************
Back-to-Top Button 
*******************************************************************************/

const header = document.querySelector('.nav-wrapper');

const scrollTopBtn = document.getElementById("scroll-to-top");

function scrollHeader() {
  let top = window.scrollY;

  if (top >= 80) {
      header.classList.add('active');
  } else {
      header.classList.remove('active');
  }
}

// When the user scrolls down 20px from the top of the document, show the back-to-top button
function scrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {
  scrollHeader();
  scrollToTop();
}
