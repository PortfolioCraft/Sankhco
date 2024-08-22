
    document.getElementById('menu-icon').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });

    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlides() {
        slideIndex = (slideIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(showSlides, 5000);


