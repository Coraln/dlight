(function ($) {
    "use strict";


    // Languages
    document.addEventListener("DOMContentLoaded", function () {
        const languageButtons = document.querySelectorAll(".flag-button");

        languageButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const lang = this.id;
                loadLanguage(lang);
            });
        });
        loadLanguage("en");
    });


    function loadLanguage(lang) {
        console.log("Loading language:", lang);
        fetch(`lang/${lang}.json`)
            .then((response) => response.json())
            .then((data) => {

                console.log("Data loaded:", data);

                // Update main content
                document.getElementById("headerHome").textContent = data.headerHome;
                document.getElementById("headerDropdown").textContent = data.headerDropdown;
                document.getElementById("headerLife").textContent = data.headerLife;
                document.getElementById("headerMeaningful").textContent = data.headerMeaningful;

                document.getElementById("headerTitle").textContent = data.headerTitle;
                document.getElementById("homeIntroHeading1").textContent = data.homeIntroHeading1;
                document.getElementById("homeIntroHeading2").textContent = data.homeIntroHeading2;
                document.getElementById("homeIntoText").textContent = data.homeIntoText;
                document.getElementById("homeEnables").textContent = data.homeEnables;
                document.getElementById("footInfo").textContent = data.footInfo;

                document.getElementById("homeList1").textContent = data.homeList1;
                document.getElementById("homeList2").textContent = data.homeList2;
                document.getElementById("homeList3").textContent = data.homeList3;
                document.getElementById("homeList4").textContent = data.homeList4;
                document.getElementById("homeList5").textContent = data.homeList5;

                // Handle list items
                if (data.homeList && Array.isArray(data.homeList)) {
                    const listContainer = document.getElementById('homeList'); // The container where the list should be rendered
                    listContainer.innerHTML = ''; // Clear existing list items
                    // Removed the creation of a new 'ul' since 'homeList' is already a 'ul'
                    data.homeList.forEach(itemText => {
                        const listItem = document.createElement('li');
                        listItem.textContent = itemText;
                        listContainer.appendChild(listItem); // Append listItem to listContainer directly
                    });
                }

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

