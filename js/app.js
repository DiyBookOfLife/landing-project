/**
 * Define Global Variables
 */
const sections = document.querySelectorAll('section');
const navList = document.getElementById("navbar__list");
const navBar = document.querySelector('nav');
const paragraphsClass = document.querySelectorAll('.landing__container');

/**
 * Create Nav Bar & Link
 */
sections.forEach(section => {
    //listed local variables 
    const sectionName = section.getAttribute("data-nav");
    const sectionId = section.getAttribute("id");
    const navItem = document.createElement("li"); 
    const navLink = document.createElement("a");

    //adds attribute to each a element.. ex. (<a>Section 1</>)
    navLink.innerHTML = sectionName;
    //creates href link to each a element.. ex. (<a href="#section1">Section 1</>)
    navLink.href = `#${sectionId}`;
    //adds class to each a element.. ex. (<a class"menu__link" href="#section1">Section 1</>)
    navLink.classList.add("menu__link");

    //adds each new a element to li element.. ex. (<li><a class"menu__link" href="#section1">Section 1</></li>)
    navItem.appendChild(navLink);
    //adds each li element to the ul element with id "navbar__list" ex.. (<ul><li><a class"menu__link" href="#section1">Section 1</></li></ul>)
    navList.appendChild(navItem);
});

// Add a click event listener to the navigation list
navList.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default action (page reload) when a link is clicked

    // Check if the clicked target is a link (anchor tag)
    if (event.target.tagName === "A") {
        // Get the ID of the section from the href attribute of the clicked link
        const anotherId = event.target.getAttribute("href").substring(1);
        // Find the section element using the ID
        const section = document.getElementById(anotherId);
        // Scroll smoothly to the section
        section.scrollIntoView({ behavior: "smooth" });
    }
});

// Function to make the section with the active content highlighted
function makeActive() {
    // Loop through each section on the page
    sections.forEach((section, index) => {
        const box = section.getBoundingClientRect();
        const navClass = document.querySelectorAll(".menu__link");

        // Check if the section is within the viewport
        if (box.top <= 0 && box.bottom >= 0) {
            // Add active class to the section and navbar link
            section.classList.add("your-active-class");
            navClass[index].classList.add("active");
        } else {
            // Remove active class from the section and navbar link
            section.classList.remove("your-active-class");
            navClass[index].classList.remove("active");
        }
    });
}

// Add scroll event listener to trigger makeActive on scrollnav__
document.addEventListener('scroll', makeActive);

let timer = null; // Variable to store the timeout reference
const navBarTime = document.querySelector('.page__header'); // Select the navigation bar

// Listen for scroll events
window.addEventListener('scroll', () => {
    navBarTime.style.display = 'block'; // Show the navbar when scrolling starts                                                                                                                                                                             

    // Clear the previous timer to prevent immediate hiding
    clearTimeout(timer);

    // Set a timer to hide the navbar after 2 seconds of inactivity
    timer = setTimeout(() => {
        navBarTime.style.display = 'none';
    }, 2000);
});                  