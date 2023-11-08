(function ($) {
    "use strict";


    // Languages
    document.addEventListener("DOMContentLoaded", function () {
        const languageButtons = document.querySelectorAll(".language-switcher button");

        languageButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const lang = this.id;
                loadLanguage(lang);
            });
        });
        loadLanguage("en");
    });


    function loadLanguage(lang) {
        fetch(`lang/${lang}.json`)
            .then((response) => response.json())
            .then((data) => {

                // Update main content
                document.getElementById("headerTitle").textContent = data.headerTitle;
                document.getElementById("aboutFirstH3").textContent = data.aboutFirstH3;
                document.getElementById("aboutSecondH3").textContent = data.aboutSecondH3;
                document.getElementById("aboutText").textContent = data.aboutText;
                document.getElementById("aboutText2").textContent = data.aboutText2;

                document.getElementById("lifeSummary").textContent = data.lifeSummary;
            })
            .catch((error) => console.error("Error loading language:", error));
    }



    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Generating the people

    // Define a function to generate the HTML for a person
    function generatePersonHTML(person) {
        return `
        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="rounded overflow-hidden">
                <div>
                    <img class="img-fluid" src="${person.imgSrc}" alt="">
                </div>
                <div class="team-text bg-light text-center p-2">
                    <h5>${person.name}</h5>
                    <audio id="${person.name}-audio" src="${person.audioSrc}" preload="auto"></audio>
                    <button id="${person.name}-control" class="btn btn-primary">Play</button>
                </div>
            </div>
        </div>
    `;
    }

    window.generatePersonHTML = generatePersonHTML;

    // Example usage on your page
    /*import('./people.js').then(module => {
        const people = module.default;
        const container = document.getElementById('people-container');

        people.forEach(person => {
            const personHTML = generatePersonHTML(person);

            const personElement = document.createElement('div');
            personElement.innerHTML = personHTML;
            container.appendChild(personElement);

            // Add click event listener to the play/pause button
            const audio = document.getElementById(`${person.name}-audio`);
            const playControl = document.getElementById(`${person.name}-control`);

            playControl.addEventListener('click', function () {
                if (audio.paused) {
                    audio.play();
                    playControl.textContent = 'Pause';
                } else {
                    audio.pause();
                    playControl.textContent = 'Play';
                }
            });
        });
    });*/





    //importing from people.js
    /*import('./people.js').then(module => {
        const people = module.default;

        const container = document.getElementById('people-container');

        people.forEach(person => {
            const personHTML = `
                <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="rounded overflow-hidden">
                        <div>
                            <img class="img-fluid" src="${person.imgSrc}" alt="">
                        </div>
                        <div class="team-text bg-light text-center p-2">
                            <h5>${person.name}</h5>
                            <audio id="${person.name}-audio" src="${person.audioSrc}" preload="auto"></audio>
                            <button id="${person.name}-control" class="btn btn-primary">Play</button>
                        </div>
                    </div>
                </div>
            `;

            const personElement = document.createElement('div');
            personElement.innerHTML = personHTML;
            container.appendChild(personElement);

            // Add click event listener to the play/pause button
            const audio = document.getElementById(`${person.name}-audio`);
            const playControl = document.getElementById(`${person.name}-control`);

            playControl.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playControl.textContent = 'Pause';
                } else {
                    audio.pause();
                    playControl.textContent = 'Play';
                }
            });
        });
    });*/

    //Slider control
    const slider = document.getElementById('slider');
    const sliderValueDisplay = document.getElementById('sliderValue');

    // Update the displayed value when the slider value changes
    slider.addEventListener('input', () => {
        sliderValueDisplay.textContent = `Selected Value: ${slider.value}`;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


})(jQuery);

