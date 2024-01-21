(function ($) {
    "use strict";


    // Languages
    function loadLanguage(lang) {
        console.log("Loading language:", lang);
        localStorage.setItem('preferredLanguage', lang);

        fetch(`lang/${lang}.json`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Data loaded:", data);
                updateUI(lang, data);
            })
            .catch((error) => console.error("Error loading language:", error));
    }

    function updateUI(lang, data) {
        const languageButton = document.getElementById("language-switcher");

        if (languageButton) {
            languageButton.setAttribute('data-lang', lang);
            // Toggle flags and label
            toggleFlagsAndLabel(lang);
        }

        // Update text content for when the text has links, etc.. 
        Object.keys(data).forEach(key => {
            if (key === 'homePartnerships') {
                updateHtmlContent('dynamicHtmlContent', data[key]);
            } else if (key === 'footerIconsCredit') {
                updateHtmlContent('dynamicFooterContent', data[key]);
            } else if (key === 'footerHTMLCredit') {
                updateHtmlContent('dynamicFooterCodex', data[key]);
            } else if (key === 'lifeSection2Text') {
                updateHtmlContent('dynamicLifeTree', data[key]);
            }
            else {
                updateTextContent(key, data[key]);
            }
        });

        // Handle list items if available
        if (data.homeList && Array.isArray(data.homeList)) {
            updateListItems('homeList', data.homeList);
        }
        if (data.lifeSection0ListSecond && Array.isArray(data.lifeSection0ListSecond)) {
            updateListItems('lifeSection0ListSecond', data.lifeSection0ListSecond);
        }
        if (data.lifeSection0ListThird && Array.isArray(data.lifeSection0ListThird)) {
            updateListItems('lifeSection0ListThird', data.lifeSection0ListThird);
        }
        if (data.lifeSection0ListFourth && Array.isArray(data.lifeSection0ListFourth)) {
            updateListItems('lifeSection0ListFourth', data.lifeSection0ListFourth);
        }
        if (data.lifeSection3List && Array.isArray(data.lifeSection3List)) {
            updateListItems('lifeSection3List', data.lifeSection3List);
        }

        var pdfLink = document.getElementById("pdfLink");
        if (pdfLink) {
            pdfLink.setAttribute('href', `pdf/tree/${lang}/lifetree.pdf`);
        }
    }

    function toggleFlagsAndLabel(lang) {
        const enFlag = document.querySelector(".en-flag");
        const svFlag = document.querySelector(".sv-flag");
        const label = document.querySelector(".language-label");

        if (lang === 'en') {
            enFlag.style.display = 'none';
            svFlag.style.display = 'block';
            label.textContent = 'Svenska';
        } else {
            enFlag.style.display = 'block';
            svFlag.style.display = 'none';
            label.textContent = 'English';
        }
    }

    function updateTextContent(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        } else {
            console.log(`Element not found for ID: ${id}`);
        }
    }

    function updateHtmlContent(id, html) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = html;
        } else {
            console.log(`Element not found for ID: ${id}`);
        }
    }

    function updateListItems(listId, items) {
        const listContainer = document.getElementById(listId);
        if (listContainer) {
            listContainer.innerHTML = ''; // Clear existing list items
            items.forEach(itemText => {
                const listItem = document.createElement('li');
                listItem.textContent = itemText;
                listContainer.appendChild(listItem);
            });
        } else {
            console.log(`List container not found for ID: ${listId}`);
        }
    }


    document.addEventListener("DOMContentLoaded", function () {
        // Check for stored language preference
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
        loadLanguage(preferredLanguage);

        // Set up the language switcher button
        const languageButton = document.getElementById("language-switcher");
        if (languageButton) {

            languageButton.addEventListener("click", function () {
                const currentLang = languageButton.getAttribute('data-lang') || 'sv';
                const newLang = currentLang === 'en' ? 'sv' : 'en';
                loadLanguage(newLang);
            });
        }
    });

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the content of the <span> element with the current year
    document.getElementById("current-year").textContent = currentYear;



    // Cookies
    document.addEventListener("DOMContentLoaded", function () {
        var acceptButton = document.getElementById("acceptCookieConsent");
        var cookieConsentBanner = document.getElementById("cookieConsentBanner");

        acceptButton.addEventListener("click", function () {
            cookieConsentBanner.style.display = "none";
            // Set a cookie or local storage value to remember the choice
            document.cookie = "cookieConsent=true; max-age=86400; path=/"; // Expires in 1 day
        });

        // Optionally, check if the consent cookie is already set and hide the banner
        if (document.cookie.indexOf("cookieConsent=true") > -1) {
            cookieConsentBanner.style.display = "none";
        }
    });



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
    function generatePersonHTML(person, audioBasePath) {

        // Retrieve preferred language from localStorage, default to 'en' if not set
        const language = localStorage.getItem('preferredLanguage') || 'en';

        return `
            <div class="col-lg-6 wow fadeInUp audio-box" data-wow-delay="0.1s">
                <div class="rounded overflow-hidden">
                    <div class="text-center">
                        <h5>${person.name}</h5>
                        <img class="img-fluid" src="${person.imgSrc}" alt="${person.name}">
                    </div>
                    <div class="team-text bg-light text-center p-2">
                        <audio id="${person.name}-audio" src="${audioBasePath}/${language}/${person.name}-audio.mp3" preload="auto" controls></audio>
                    </div>
                </div>
            </div>
        `;
    }

    window.generatePersonHTML = generatePersonHTML;


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

