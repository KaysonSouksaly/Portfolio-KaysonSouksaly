document.addEventListener("DOMContentLoaded", function() {
    // Initialize all components
    universalHeader();
    universalFooter();
    carousel();
    darkMode();
    touchGestures();
});

// Function to initialize the header
// Universal header so that every page will have the same header with the nav bar
function universalHeader() {
    // Have a variable save the corresponding header HTML
    const headerHTML = `
        <header>
            <nav>
                <div>
                    <a href="index.html" class="logo">Kayson Souksaly</a>
                    <a class="linkedin" href="https://www.linkedin.com/in/kayson-souksaly-82a247203/">
                        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a class="mail" href="mailto:kayson.souksaly@gmail.com">
                        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/KaysonSouksaly">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div class="hamburger" id="hamburger">
                    &#9776; <!-- Unicode for hamburger icon -->
                </div>
                <ul id="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Me</a></li>
                    <li><a href="documents.html">Documents</a></li>
                    <li><button class="cta" id="dark-mode-toggle">Dark Mode</button></li>
                </ul>
            </nav>
        </header>
    `;

    // insertAdjacentHTML allows adding html using javascript, afterbegin add HTML after the first element child
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // This part allows the hamburger bar to work when clicked on smaller viewports, allowing the dropdown to appear
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Function to initialize the footer
// Universal footer for all pages, allowing consistent design and easier code cleaning
function universalFooter() {
    // Have a variable save the corresponding footer HTML
    const footerHTML = `
        <footer class="bg-light py-5 mt-5">
            <div class="container text-center">
                <small>&copy; Copyright by Kayson Souksaly, All rights reserved.</small>
            </div>
        </footer>
    `;

    // Adds HTML before the last child element
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Function to initialize the carousel
// This function allows the deployment of a carousel, a section that cycles through a list of items
// and displays the relevant item when clicked or automatically scrolls through them.

function carousel() {
    // Select all carousel items and radio buttons for navigation
    const items = document.querySelectorAll('.carousel-item');
    const radios = document.querySelectorAll('.carousel-navigation input[type="radio"]');
    
    // Select the previous and next buttons
    const prevBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Ensure the buttons and items exist before proceeding
    if (!prevBtn || !nextBtn || items.length === 0 || radios.length === 0) {
        console.error("Carousel elements not found.");
        return;
    }
    
    // Set the initial viewing item to the first in the list
    let currentIndex = 0;
    
    // Set the interval for auto-scrolling (3 seconds before moving to the next item)
    const autoScrollInterval = 3000;
    
    // Variable to store the interval ID for auto-scrolling
    let adInterval;

    // Function to display the item at the specified index
    function showItem(index) {
        // Loop through all items and hide them by removing the 'active' class
        // Also uncheck all radio buttons
        items.forEach((item, i) => {
            item.classList.remove('active');
            radios[i].checked = false;
            
            // If the current item matches the index, show it and check the corresponding radio button
            if (i === index) {
                item.classList.add('active');
                radios[i].checked = true;
            }
        });
    }

    // Function to show the next item in the list
    function nextItem() {
        // Increment the index and wrap around if it exceeds the number of items
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    // Function to show the previous item in the list
    function prevItem() {
        // Decrement the index and wrap around if it goes below zero
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    // Add click event listeners to the next and previous buttons
    nextBtn.addEventListener('click', () => {
        clearInterval(adInterval); 
        nextItem();                
        restartAutoScroll();       
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(adInterval); 
        prevItem();                
        restartAutoScroll();       
    });

    // Add change event listeners to the radio buttons for direct navigation
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentIndex = index;      
            showItem(currentIndex);    
            clearInterval(adInterval); 
            restartAutoScroll();       
        });
    });

    // Initially display the first item in the carousel
    showItem(currentIndex);

    // Function to start auto-scrolling the carousel
    function startAutoScroll() {
        adInterval = setInterval(nextItem, autoScrollInterval); 
    }

    // Function to restart auto-scrolling after manual navigation
    function restartAutoScroll() {
        clearInterval(adInterval); 
        startAutoScroll();         
    }

    // Start auto-scrolling when the carousel is initialized
    startAutoScroll();
}

// Run carousel function only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', carousel);

// Function to initialize dark mode toggle
// This function enables a dark mode feature that allows users to switch between light and dark themes.

function darkMode() {

    // Save the element with the ID 'dark-mode-toggle' in a variable
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check if the darkModeToggle element exists (i.e., if it is present in the DOM)
    if (darkModeToggle) {
        // Add a click event listener to the darkModeToggle button
        darkModeToggle.addEventListener('click', () => {
            // Toggle the 'dark-mode' class on the body element
            document.body.classList.toggle('dark-mode');
            
            // If the 'dark-mode' class is present, enable dark mode
            if (document.body.classList.contains('dark-mode')) {
                // Save the user's preference for dark mode in localStorage
                localStorage.setItem('darkMode', 'enabled');
                // Change the button text to 'Light Mode'
                darkModeToggle.innerHTML = "Light Mode";
            } else {
                // If dark mode is disabled, save this preference in localStorage
                localStorage.setItem('darkMode', 'disabled');
                // Change the button text to 'Dark Mode'
                darkModeToggle.innerHTML = "Dark Mode";
            }
        });
    }
}

// Function to initialize touch gestures
// This function adds swipe gesture support for navigating through items (e.g., in a carousel).

function touchGestures() {
    // Initialize variables to store the starting and ending X coordinates of the touch gesture
    let touchStartX = 0;
    let touchEndX = 0;

    // Function to handle the gesture based on touch start and end positions
    function handleGesture() {
        // Get the next and previous buttons by their IDs
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('back-btn');
        
        // If the swipe is to the left (end position is less than start), trigger the next button
        if (touchEndX < touchStartX) {
            nextBtn.click();
        }
        // If the swipe is to the right (end position is greater than start), trigger the previous button
        if (touchEndX > touchStartX) {
            prevBtn.click();
        }
    }

    // Add an event listener for the 'touchstart' event to capture the starting X coordinate
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    // Add an event listener for the 'touchend' event to capture the ending X coordinate and handle the gesture
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });
}