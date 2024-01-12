// page2.js
console.log('Page 2 script is running');


// People audio files etc.
import('./people.js').then(module => {
    const people = module.default;
    const container = document.getElementById('people-container');

    people.forEach(person => {
        // Modify the audio source for the second page
        person.audioSrc = `audioToday/${person.name}-audio.mp3`;

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
});


// Triangle 
import('./activities.js').then(module => {
    const activities = module.default;

    const timeSlider = document.getElementById("timeSlider");
    const activitySlider = document.getElementById("activitySlider");
    const fellowshipSlider = document.getElementById("fellowshipSlider");
    const activityListContainer = document.getElementById("activityList");
    const movementCheckbox = document.getElementById("movementCheckbox");
    const brainteasersCheckbox = document.getElementById("brainteasersCheckbox");
    const foodCheckbox = document.getElementById("foodCheckbox");
    const environmentCheckbox = document.getElementById("environmentCheckbox");
    const literatureCheckbox = document.getElementById("literatureCheckbox");
    const creativityCheckbox = document.getElementById("creativityCheckbox");
    const entertainmentCheckbox = document.getElementById("entertainmentCheckbox");
    const musicCheckbox = document.getElementById("musicCheckbox");
    //const checkboxIds = ["movement", "brainteasers", "food", "environment", "literature", "creativity", "entertainment", "music"];

    function filterActivitiesByCategory(categories, selectedCategories) {
        const filteredActivities = [];
        Object.keys(categories).forEach(category => {
            if (selectedCategories.includes(category)) {
                filteredActivities.push(...categories[category]);
            }
        });
        return filteredActivities;
    }


    // Function to filter activities based on sliders (time, activity, fellowship)
    function filterActivitiesBySliders(activities, selectedTime, selectedActivity, selectedFellowship) {
        const filteredActivities = activities.filter(activity => {
            const activityTime = Array.isArray(activity.time) ? activity.time : [activity.time];
            const activityType = Array.isArray(activity.activity) ? activity.activity : [activity.activity];
            const fellowshipType = Array.isArray(activity.fellowship) ? activity.fellowship : [activity.fellowship];
    
            return (
                activityTime.includes(selectedTime) &&
                activityType.includes(selectedActivity) &&
                fellowshipType.includes(selectedFellowship)
            );
        });

        console.log("Selected Time:", selectedTime);
        console.log("Selected Activity:", selectedActivity);
        console.log("Selected Fellowship:", selectedFellowship);
        console.log("Filtered Activities:", filteredActivities);

        return filteredActivities;
    }




    function updateActivityList() {
        const selectedTime = parseInt(timeSlider.value);
        const selectedActivity = parseInt(activitySlider.value);
        const selectedFellowship = parseInt(fellowshipSlider.value);

        const selectedCategories = [];

        if (movementCheckbox.checked) {
            selectedCategories.push("movement");
        }
        if (brainteasersCheckbox.checked) {
            selectedCategories.push("brainteasers");
        }
        if (foodCheckbox.checked) {
            selectedCategories.push("food");
        }
        if (environmentCheckbox.checked) {
            selectedCategories.push("environment");
        }
        if (literatureCheckbox.checked) {
            selectedCategories.push("literature");
        }
        if (creativityCheckbox.checked) {
            selectedCategories.push("creativity");
        }
        if (entertainmentCheckbox.checked) {
            selectedCategories.push("entertainment");
        }
        if (musicCheckbox.checked) {
            selectedCategories.push("music");
        }



        const filteredActivities = filterActivitiesByCategory(activities, selectedCategories);
        const filteredActivitiesBySliders = filterActivitiesBySliders(filteredActivities, selectedTime, selectedActivity, selectedFellowship);

        const activityList = filteredActivitiesBySliders.map(activity => {
            const pdfPath = `pdf/en/${activity.name}.pdf`;
            return `<button class="activity-button" onclick="openPDF('${pdfPath}')">${activity.name}</button>`;
        });

        activityListContainer.innerHTML = `<h3>Recommended Activities:</h3>${activityList.join('')}`;
    }

    window.openPDF = function (pdfPath) {
        // Check if the PDF file exists
        const pdfExists = doesFileExist(pdfPath);

        // Display an error message if the PDF doesn't exist
        if (!pdfExists) {
            alert(`Error: PDF not found`);
            return;
        }

        // Open the PDF in a new tab
        window.open(pdfPath, '_blank');
    };

    function doesFileExist(url) {
        const http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status !== 404;
    }

    timeSlider.addEventListener("input", updateActivityList);
    activitySlider.addEventListener("input", updateActivityList);
    fellowshipSlider.addEventListener("input", updateActivityList);
    movementCheckbox.addEventListener("change", updateActivityList);
    brainteasersCheckbox.addEventListener("change", updateActivityList);
    foodCheckbox.addEventListener("change", updateActivityList);
    environmentCheckbox.addEventListener("change", updateActivityList);
    literatureCheckbox.addEventListener("change", updateActivityList);
    creativityCheckbox.addEventListener("change", updateActivityList);
    entertainmentCheckbox.addEventListener("change", updateActivityList);
    musicCheckbox.addEventListener("change", updateActivityList);
/*
    checkboxIds.forEach(category => {
        const checkbox = document.getElementById(`${category}Checkbox`);
        checkbox.addEventListener("change", updateActivityList);
    });*/

    // Initial update
    updateActivityList();
});