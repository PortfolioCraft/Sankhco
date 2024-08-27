// MENU ICON ON SMALL SCREEN
document.getElementById('menu-icon').onclick = function() {
    document.querySelector('.navbar').classList.toggle('active');
};


// HOME IMAGE SLIDES
let imageSlideIndex = 0;  // Use a unique variable for image slides
const imageSlides = document.querySelector('.slides');
const totalImageSlides = document.querySelectorAll('.slide').length;

function showImageSlides() {
    imageSlideIndex = (imageSlideIndex + 1) % totalImageSlides;
    imageSlides.style.transform = `translateX(-${imageSlideIndex * 100}%)`;
}

setInterval(showImageSlides, 5000);

// HOME SEARCH SECTION
document.getElementById('carSearchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    
    // Collect form data
    const driver = document.querySelector('[name="driver"]').value;
    const drive = document.querySelector('[name="drive"]').value;
    const color = document.querySelector('[name="color"]').value;
    const county = document.querySelector('[name="county"]').value;
    
    // Display selected options (You can replace this with actual search logic)
    alert(`Searching for cars with the following details:
    Driver: ${driver}
    Drive: ${drive}
    Color: ${color}
    County: ${county}`);
});

// IMAGE SLIDE DETAILS (for cards)
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// const slider = document.querySelector('.slider');
// let index = 0;

// function updateSliderPosition() {
//     slider.style.transform = `translateX(-${index * 100}%)`;
// }

// prev.addEventListener('click', () => {
//     if (index > 0) {
//         index--;
//         updateSliderPosition();
//     }
// });

// next.addEventListener('click', () => {
//     if (index < slider.children.length - 1) {
//         index++;
//         updateSliderPosition();
//     }
// });
