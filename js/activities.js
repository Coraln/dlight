// activities.js
const activities = {

    
    movement: [
        { name: "Relaxation through music", activity: [1], fellowship: [1], time: [1] },
        { name: "Breathing exercises to a story", activity: [1], fellowship: [1, 2], time: [1] },
        { name: "Exercises for elderly", activity: [2], fellowship: [1, 2], time: [1] },
        { name: "Massage and storytelling - Autumn Leaves", activity: [1], fellowship: [1, 2], time: [1] },
        { name: "Gymnastics with small equipment", activity: [2], fellowship: [1, 2], time: [2] },
        { name: "Chair exercises and storytelling", activity: [2], fellowship: [2], time: [1] },
        { name: "Sitting on the chair and stand up", activity: [2], fellowship: [1], time: [1] },
        { name: "Chair exercises", activity: [2], fellowship: [2], time: [1] },
        { name: "Tension - relaxation", activity: [1], fellowship: [1, 2], time: [1] },
        { name: "Coordination and Balance Exercises", activity: [2], fellowship: [1, 2], time: [1] },
        { name: "Chair dance", activity: [2], fellowship: [2], time: [2] },
        { name: "Walk in the nature", activity: [2], fellowship: [1, 2], time: [1, 2] },
        { name: "A walk indoors", activity: [2], fellowship: [1], time: [1] },
        { name: "Walking with poles", activity: [2], fellowship: [1, 2], time: [1, 2] },
        { name: "Relaxation and Storytelling", activity: [1], fellowship: [1, 2], time: [1] },
        { name: "Dance with Scarves", activity: [2], fellowship: [2], time: [2] },
        { name: "Disco dance", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Bowling", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Massage and storytelling - The Swallow", activity: [1], fellowship: [1, 2], time: [1] },
        { name: "Massage", activity: [1], fellowship: [1], time: [1, 2] },
        { name: "Balloon Volleyball", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Balloon badminton", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Outdoor relaxation", activity: [1], fellowship: [1], time: [1] },
        { name: "Walking group for elderly", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Walk outside and sit down for a cup of coffee/tea", activity: [2], fellowship: [1, 2], time: [2] },
        { name: "Walk with confidence", activity: [2], fellowship: [1], time: [1] },
        { name: "Massage and storytelling - Bonfire", activity: [1], fellowship: [1, 2], time: [1] },
        { name: "Massage and storytelling - Weather massage", activity: [1], fellowship: [1, 2], time: [1] }
    ],
    

    brainteasers: [
        { name: "Sudoku", activity: [2], fellowship: [1, 2], time: [1, 2] },
        { name: "Crosswords", activity: [2], fellowship: [1], time: [1, 2] },
        { name: "Memory", activity: [2], fellowship: [1, 2], time: [1, 2] },
        { name: "Quiz", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Puzzle", activity: [2], fellowship: [1], time: [1, 2] },
        { name: "Memories through old photos", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Memories through fragrances", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Memories through music", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Brainteasers", activity: [2], fellowship: [1, 2], time: [1, 2] },
        { name: "Play cards", activity: [2], fellowship: [2], time: [2] },
        { name: "Audio quiz", activity: [2], fellowship: [2], time: [1] },
        { name: "Hand-brain exercise", activity: [2], fellowship: [1], time: [1, 2] },
        { name: "Questions and emotion cards", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Board games", activity: [2], fellowship: [2], time: [1, 2] }
    ],

    food: [
        { name: "A cup of coffee or tea", activity: [1], fellowship: [1, 2], time: [1] },
        { name: "Baking sweet", activity: [2], fellowship: [2], time: [2] },
        { name: "Baking salty", activity: [2], fellowship: [2], time: [2] },
        { name: "Walk outside and sit down for a cup of coffee or tea", activity: [2], fellowship: [1, 2], time: [2] },
        { name: "Pictures with meaningful memories about food", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Dinner at a restaurant", activity: [2], fellowship: [1, 2], time: [2] },
        { name: "Watch a baking or cooking program", activity: [1], fellowship: [2], time: [2] },
        { name: "Barbecue", activity: [2], fellowship: [2], time: [2] },
        { name: "Memories through fragrances and tastes", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Memories through food and beverages", activity: [2], fellowship: [2], time: [1, 2] }
    ],

    environment: [
        { name: "By the bonfire", activity: [1], fellowship: [2], time: [2] },
        { name: "Enjoy and discuss the view together", activity: [1], fellowship: [2], time: [1, 2] },
        { name: "Watching birds virtually", activity: [1], fellowship: [2], time: [1, 2] },
        { name: "Watching birds outdoors", activity: [1], fellowship: [2], time: [2] },
        { name: "Gardening", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Take meaningful pictures of the environment", activity: [2], fellowship: [1], time: [1, 2] },
        { name: "Look at pictures from your town and discuss memories", activity: [2], fellowship: [2], time: [1] },
        { name: "Take a walk and bring nature inside", activity: [2], fellowship: [1], time: [1] },
        { name: "Memories through nature and environment", activity: [1], fellowship: [2], time: [1, 2] },
        { name: "Take a walk to meaningful places", activity: [2], fellowship: [1], time: [1, 2] },
        { name: "Traveling digitally", activity: [1], fellowship: [1], time: [2] },
        { name: "Relax outdoors", activity: [1], fellowship: [1], time: [1] }
    ],

    music: [
        { name: "Listen to classical music", activity: [1], fellowship: [1], time: [1] },
        { name: "Memories through music", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Move to music", activity: [2], fellowship: [2], time: [1] },
        { name: "Sing to music", activity: [2], fellowship: [1], time: [1] },
        { name: "Chair dance", activity: [2], fellowship: [2], time: [2] },
        { name: "Disco dance", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Sing along", activity: [2], fellowship: [2], time: [2] },
        { name: "Relaxation through music", activity: [1], fellowship: [1], time: [1] },
        { name: "Music review panel", activity: [2], fellowship: [2], time: [2] },
        { name: "Breathing exercises to soothing music", activity: [1], fellowship: [1], time: [1] },
        { name: "Play instruments", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Painting with the inspiration of music", activity: [1], fellowship: [2], time: [2] },
        { name: "Look at a classical concert on TV", activity: [1], fellowship: [1], time: [2] },
        { name: "Sing karaoke", activity: [2], fellowship: [2], time: [2] },
        { name: "Dance with Scarves", activity: [2], fellowship: [2], time: [2] }
    ],

    literature: [
        { name: "Reading a daily newspaper aloud", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Poetry reading", activity: [2], fellowship: [2], time: [1, 2] },
        { name: "Listen to audiobooks", activity: [1], fellowship: [1], time: [1, 2] },
        { name: "Visit the library", activity: [2], fellowship: [1, 2], time: [2] },
        { name: "Read a book or a magazine", activity: [1], fellowship: [1], time: [1, 2] },
        { name: "Book circle", activity: [2], fellowship: [2], time: [2] },
        { name: "Create poems", activity: [2], fellowship: [2], time: [2] },
        { name: "Colouring to poetry", activity: [1], fellowship: [2], time: [2] }
    ],

    entertainment: [
        { name: "Look at TV", activity: [1, 2], fellowship: [1], time: [1, 2] },
        { name: "Listen to the radio", activity: [1, 2], fellowship: [1], time: [1] },
        { name: "Theatre", activity: [1, 2], fellowship: [1, 2], time: [2] },
        { name: "Movie", activity: [1, 2], fellowship: [2], time: [2] },
        { name: "Look at a classical concert on TV", activity: [1], fellowship: [1], time: [2] },
        { name: "Travelling digitally", activity: [1], fellowship: [1], time: [2] },
        { name: "Participate in an art exhibition virtually", activity: [2], fellowship: [1, 2], time: [2] },
        { name: "Video calling", activity: [2], fellowship: [1], time: [1, 2] }
    ],

    creativity: [
        { name: "Art with materials from nature", activity: [2], fellowship: [2], time: [2] },
        { name: "Painting with the inspiration of music", activity: [1], fellowship: [2], time: [2] },
        { name: "Paint and coloring", activity: [1], fellowship: [1, 2], time: [2] },
        { name: "Simple handicraft", activity: [2], fellowship: [1, 2], time: [2] },
        { name: "Colouring to poetry", activity: [1], fellowship: [2], time: [2] },
        { name: "Create a collage", activity: [2], fellowship: [1], time: [2] },
        { name: "Photographing", activity: [2], fellowship: [1, 2], time: [2] }
    ]


    // Add more categories as needed
};

export default activities;