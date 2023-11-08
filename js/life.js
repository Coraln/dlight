// page1.js


import('./people.js').then(module => {
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

        playControl.addEventListener('click', function() {
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

