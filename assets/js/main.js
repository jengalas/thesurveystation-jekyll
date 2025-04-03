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

const accordionButtons = document.querySelectorAll('.accordion-button');
const panels = document.querySelectorAll('.panel');

// Function to toggle panels and store state in sessionStorage
function togglePanel(event) {
  const button = event.target;
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  // Collapse all panels
  panels.forEach(p => p.classList.remove('active'));
  accordionButtons.forEach(p => p.classList.remove('active'));
  accordionButtons.forEach(b => b.setAttribute('aria-expanded', 'false'));

  // Toggle the current panel
  if (!isExpanded) {
    panel.classList.add('active');
    button.classList.add('active');
    button.setAttribute('aria-expanded', 'true');
    // Store the open panel index in sessionStorage
    sessionStorage.setItem('accordionOpen', button.textContent);
  }
}

// Set initial state on page load based on sessionStorage
window.addEventListener('load', () => {
  const openPanel = sessionStorage.getItem('accordionOpen');
  
  // If sessionStorage contains a previous state, open that panel
  if (openPanel) {
    const openButton = Array.from(accordionButtons).find(button => button.textContent === openPanel);
    if (openButton) {
      openButton.setAttribute('aria-expanded', 'true');
      const panel = document.getElementById(openButton.getAttribute('aria-controls'));
      panel.classList.add('active');
      openButton.classList.add('active');
    }
  } else {
    // Default: Open the first panel
    const firstButton = accordionButtons[0];
    firstButton.setAttribute('aria-expanded', 'true');
    const firstPanel = document.getElementById(firstButton.getAttribute('aria-controls'));
    firstPanel.classList.add('active');
    firstButton.classList.add('active');
  }
});

// Add event listeners to all accordion buttons
accordionButtons.forEach(button => {
  button.addEventListener('click', togglePanel);
});


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
