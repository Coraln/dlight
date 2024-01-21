// page1.js


import('./people.js').then(module => {
    const people = module.default;
    const container = document.getElementById('people-container');

    people.forEach(person => {
        container.innerHTML += generatePersonHTML(person, "audio");
    });
});




