// Define an array of possible category short names
const categoryShortNames = ['L', 'D', 'S', 'A', 'AP', 'B'];

// Function to generate a random category short name
function getRandomCategoryShortName() {
    const randomIndex = Math.floor(Math.random() * categoryShortNames.length);
    return categoryShortNames[randomIndex];
}

// Function to load menu items for a given category
function loadMenuItems(categoryShortName) {
    // Your implementation to load menu items goes here
    console.log('Loading menu items for category:', categoryShortName);
}

// Click event handler for the "Specials" tile
document.getElementById('specials-tile').addEventListener('click', function() {
    const randomCategoryShortName = getRandomCategoryShortName();
    loadMenuItems(randomCategoryShortName);
});
