// activities.js
const activities = {
    games: [
        { name: "Naturebingo", activity: 2, fellowship: 2, time: 2 },
        // Add more game activities
    ],

    exercise: [
        { name: "Exercises in nature", activity: 2, fellowship: 2, time: 2 },
        { name: "By the bonfire", activity: 1, fellowship: 2, time: 2 },
        { name: "Enjoy and discuss the view together", activity: 1, fellowship: 2, time: 2 },
        // Add more exercise activities
    ],

    
    movement: [
        { name: "Relaxation through music", activity: 1, fellowship: 1, time: 1 },
        { name: "Breathing exercises to a story", activity: 1, fellowship: 2, time: [1] },
        { name: "Fantasy gymnastics", activity: 2, fellowship: 1, time: [1, 2] },
        { name: "Gymnastic exercises in bed", activity: 2, fellowship: 1, time: [1] },
        { name: "Gymnastics with small equipment", activity: 2, fellowship: 2, time: [2] },
        { name: "Chair exercises and storytelling", activity: 2, fellowship: 2, time: [1] },
        { name: "Sitting on the chair and getting up exercise", activity: 2, fellowship: 1, time: [1] },
        { name: "Chair exercises", activity: 2, fellowship: 2, time: [1] },
        { name: "Stretching and storytelling", activity: 1, fellowship: 1, time: [1] },
        { name: "Stretching", activity: 1, fellowship: 2, time: [1] },
        { name: "Coordination, balance exercises and storytelling", activity: 2, fellowship: 1, time: [2] },
        { name: "Coordination and balance exercises", activity: 2, fellowship: 1, time: [1] },
        { name: "Chair dance", activity: 2, fellowship: 2, time: [2] },
        { name: "Muscle exercise with weights", activity: 2, fellowship: 1, time: [2] },
        { name: "Muscle exercise without weights", activity: 2, fellowship: 1, time: [1] },
        { name: "A walk outdoors", activity: 2, fellowship: 1, time: [2] },
        { name: "A walk indoors", activity: 2, fellowship: 1, time: [2] },
        { name: "Walking with poles", activity: 2, fellowship: 1, time: [2] },
        { name: "Relaxation and storytelling", activity: 1, fellowship: 2, time: [1] },
        { name: "Simple relaxation exercise at home", activity: 1, fellowship: 1, time: [1] },
        { name: "Relaxation through music", activity: 1, fellowship: 1, time: [1] },
        { name: "Circular training", activity: 2, fellowship: 2, time: [2] },
        { name: "Dancing with scarfs", activity: 2, fellowship: 2, time: [2] },
        { name: "Disco dance", activity: 2, fellowship: 2, time: [2] },
        { name: "Bowling", activity: 2, fellowship: 2, time: [2, 3] },
        { name: "Massage and storytelling", activity: 1, fellowship: 2, time: [2] },
        { name: "Massage", activity: 1, fellowship: 1, time: [2] },
        { name: "Balloon Volleyball", activity: 2, fellowship: 2, time: [2] },
        { name: "Balloon badminton", activity: 2, fellowship: 2, time: [2] },
        { name: "Relax outdoors", activity: 1, fellowship: 1, time: [1] },
        { name: "Walking group for the elderly", activity: 2, fellowship: 2, time: [2] },
        { name: "Listening to music and relaxing", activity: 1, fellowship: 1, time: [1] },
        { name: "Walk outside and sit down for a cup of coffee/tea", activity: 2, fellowship: 2, time: [2] },
        { name: "Walk with confidence", activity: 2, fellowship: 1, time: [1] }
    ],


    brainteasers: [
        { name: "Sudocu", activity: 2, fellowship: 2, time: [2] },
        { name: "Crosswords", activity: 2, fellowship: 1, time: [1] },
        { name: "Memory", activity: 2, fellowship: 2, time: [1] },
        { name: "Quiz", activity: 2, fellowship: 2, time: [2] },
        { name: "Puzzle", activity: 2, fellowship: 1, time: [2] },
        { name: "Memories through old photos", activity: 2, fellowship: 2, time: [2] },
        { name: "Memories through fragrances", activity: 2, fellowship: 2, time: [2] },
        { name: "Memories through music", activity: 2, fellowship: 2, time: [2] },
        { name: "Brainteasers", activity: 2, fellowship: 1, time: [1] },
        { name: "Physio-geriatric brain gymnastics", activity: 2, fellowship: 2, time: [2] },
        { name: "Play cards", activity: 2, fellowship: 2, time: [2] },
        { name: "Audio Quiz", activity: 2, fellowship: 2, time: [1] },
        { name: "Picture rebus", activity: 2, fellowship: 2, time: [1] },
        { name: "What's in the balloon", activity: 2, fellowship: 2, time: [2] },
        { name: "Hand-brain exercise", activity: 2, fellowship: 1, time: [2] },
        { name: "Questions and emotion cards", activity: 2, fellowship: 2, time: [1] },
        { name: "Board games", activity: 2, fellowship: 2, time: [1] }
    ],

    food: [
        { name: "A cup of coffee or tea", activity: 2, fellowship: 2, time: [1] },
        { name: "Baking sweet", activity: 2, fellowship: 2, time: [2] },
        { name: "Baking salty", activity: 2, fellowship: 2, time: [2] },
        { name: "Walk outside and sit down for a cup of coffee/tea", activity: 2, fellowship: 1, time: [2] },
        { name: "Pictures with meaningful memories about food", activity: 2, fellowship: 2, time: [2] },
        { name: "Dinner in a restaurant", activity: 2, fellowship: 1, time: [2] },
        { name: "Watch a baking/cooking program", activity: 2, fellowship: 2, time: [2] },
        { name: "Barbecue", activity: 2, fellowship: 2, time: [2] },
        { name: "Memories through fragrances and tastes", activity: 2, fellowship: 2, time: [2] },
        { name: "Memories through food and beverages", activity: 2, fellowship: 2, time: [2] }
    ],

    environment: [
        { name: "Enjoy the view", activity: 1, fellowship: 1, time: [1] },
        { name: "Virtual nature experiences for older adults", activity: 1, fellowship: 1, time: [1, 2] },
        { name: "Virtual nature experiences together for older adults", activity: 1, fellowship: 2, time: [1] },
        { name: "A quiet walk in nature", activity: 1, fellowship: 1, time: [2] },
        { name: "Nature bingo", activity: 2, fellowship: 2, time: [2] },
        { name: "Exercises in nature", activity: 2, fellowship: 2, time: [2] },
        { name: "By the bonfire", activity: 1, fellowship: 2, time: [2] },
        { name: "Enjoy and discuss the view together", activity: 2, fellowship: 2, time: [2] },
        { name: "Watching birds virtually", activity: 2, fellowship: 2, time: [2] },
        { name: "Watching birds outdoors", activity: 2, fellowship: 2, time: [2] },
        { name: "Gardening", activity: 2, fellowship: 2, time: [1] },
        { name: "Take meaningful pictures of the environment", activity: 2, fellowship: 1, time: [2] },
        { name: "Look at pictures from your town and discuss memories", activity: 2, fellowship: 2, time: [1] },
        { name: "Take a walk and bring nature inside", activity: 2, fellowship: 1, time: [1, 2] },
        { name: "Memories through nature and environment", activity: 2, fellowship: 2, time: [2] },
        { name: "Take a walk to meaningful places", activity: 2, fellowship: 1, time: [2] },
        { name: "Traveling digitally", activity: 2, fellowship: 1, time: [2] },
        { name: "Traveling in the neighborhood", activity: 2, fellowship: 2, time: [2] },
        { name: "Relax outdoors", activity: 1, fellowship: 1, time: [1] }
    ],

    music: [
        { name: "Listen to calm classical music", activity: 1, fellowship: 1, time: [1] },
        { name: "Memories through music", activity: 2, fellowship: 2, time: [2] },
        { name: "Move to music", activity: 2, fellowship: 2, time: [1] },
        { name: "Sing alone", activity: 2, fellowship: 1, time: [1] },
        { name: "Listening to music and relaxing", activity: 1, fellowship: 1, time: [1] },
        { name: "Sitting dance", activity: 2, fellowship: 2, time: [2] },
        { name: "Disco dance", activity: 2, fellowship: 2, time: [2] },
        { name: "Listen to music and discuss", activity: 2, fellowship: 2, time: [2] },
        { name: "Sing along", activity: 2, fellowship: 2, time: [2] },
        { name: "Relaxation through music", activity: 1, fellowship: 1, time: [1] },
        { name: "Music quiz", activity: 2, fellowship: 2, time: [1] },
        { name: "Music review panel", activity: 2, fellowship: 2, time: [2] },
        { name: "Breathing exercises to soothing music", activity: 1, fellowship: 1, time: [1] },
        { name: "Play instrument", activity: 2, fellowship: 2, time: [1] },
        { name: "Painting with the inspiration of music", activity: 1, fellowship: 2, time: [2] },
        { name: "Rhythms and music", activity: 2, fellowship: 2, time: [2] },
        { name: "Look at a classical concert on TV", activity: 1, fellowship: 1, time: [2] },
        { name: "Sing karaoke", activity: 2, fellowship: 2, time: [2] },
        { name: "Look at music program on TV", activity: 2, fellowship: 1, time: [2] },
        { name: "Dance with scarves", activity: 2, fellowship: 2, time: [2] }
    ],

    literature: [
        { name: "Reading a daily newspaper aloud", activity: 2, fellowship: 2, time: [1] },
        { name: "Poetry reading", activity: 1, fellowship: 2, time: [1] },
        { name: "Listen to audiobooks", activity: 1, fellowship: 1, time: [1] },
        { name: "Visit the library", activity: 2, fellowship: 2, time: [2] },
        { name: "Read a book or a magazine", activity: 1, fellowship: 1, time: [1] },
        { name: "Book circle", activity: 2, fellowship: 2, time: [2] },
        { name: "Create poems", activity: 2, fellowship: 2, time: [2] },
        { name: "Colouring to poetry", activity: 1, fellowship: 2, time: [2] }
    ],

    entertainment: [
        { name: "Watch TV", activity: 2, fellowship: 1, time: [1] },
        { name: "Watch a music program on TV", activity: 2, fellowship: 1, time: [2] },
        { name: "Listen to the radio", activity: 2, fellowship: 1, time: [1] },
        { name: "Theatre", activity: 2, fellowship: 2, time: [2] },
        { name: "Movie", activity: 2, fellowship: 1, time: [2] },
        { name: "Masquerade", activity: 2, fellowship: 2, time: [2] },
        { name: "Look at classical concert on TV", activity: 1, fellowship: 1, time: [2] },
        { name: "Travelling digitally", activity: 2, fellowship: 1, time: [2] },
        { name: "Travelling in the neighborhood", activity: 2, fellowship: 2, time: [2] },
        { name: "Participate in an art exhibition virtually", activity: 2, fellowship: 1, time: [2] },
        { name: "Participate in an art exhibition", activity: 2, fellowship: 2, time: [2] },
        { name: "Video calling", activity: 2, fellowship: 1, time: [1] }
    ],

    creativity: [
        { name: "Art with materials from nature", activity: 2, fellowship: 2, time: [2] },
        { name: "Painting with the inspiration of music", activity: 1, fellowship: 2, time: [2] },
        { name: "Paint and coloring", activity: 1, fellowship: 1, time: [2] },
        { name: "Simple handicraft", activity: 2, fellowship: 1, time: [2] },
        { name: "Colouring to poetry", activity: 1, fellowship: 2, time: [2] },
        { name: "Create a collage", activity: 1, fellowship: 1, time: [2] },
        { name: "Photographing", activity: 2, fellowship: 2, time: [2] }
    ]


    // Add more categories as needed
};

export default activities;