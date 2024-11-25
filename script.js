function generateStory() {
    const word1 = document.getElementById('word1').value.trim(); // Protagonist or main character
    const word2 = document.getElementById('word2').value.trim(); // Magical object, location, or theme
    const word3 = document.getElementById('word3').value.trim(); // Conflict, action, or resolution

    if (!word1 || !word2 || !word3) {
        document.getElementById('storyDisplay').innerHTML =
            "<p style='color: red;'>Please fill out all three fields!</p>";
        return;
    }

    const stories = [
        `In a quiet village nestled between rolling hills, ${word1} was just another face in the crowd, content with their simple life. But one fateful evening, a mysterious traveler arrived, carrying an ancient ${word2}. The traveler warned of a growing darkness spreading from ${word3}, urging ${word1} to take the ${word2} and set off on a journey. Despite their hesitation, ${word1} couldn’t shake the feeling that destiny was calling. The journey to ${word3} was treacherous, filled with wild creatures, uncharted forests, and dangerous traps. Yet, with each challenge, ${word1} grew stronger. When they finally reached ${word3}, they used the power of the ${word2} to confront the evil plaguing the land, discovering their true purpose in the process.`,
        
        `Once upon a time, ${word1} was an unassuming apprentice in the bustling city of Brightvale. But everything changed when they stumbled upon a hidden chamber beneath the library, where the legendary ${word2} was locked away. The artifact pulsed with an otherworldly energy, whispering secrets about ${word3}, a forgotten kingdom in need of a savior. Driven by curiosity and a sense of responsibility, ${word1} embarked on a journey filled with peril. Along the way, they encountered unlikely allies—an eccentric inventor, a talking raven, and a courageous warrior. The road to ${word3} was fraught with trials, but ${word1} discovered that the true power of the ${word2} lay not in its magic, but in the courage it inspired.`,
        
        `${word1} was an ordinary villager in the quaint town of Oak Hollow, until the night they stumbled upon a glowing ${word2} buried in the woods. As they touched it, visions of ${word3} filled their mind—a place of ancient ruins and forgotten history. Compelled to uncover the truth, ${word1} set out on a journey that would take them across roaring rivers and perilous mountains. The ${word2} guided them, revealing clues and unlocking forgotten memories of the world’s past. When ${word1} finally reached ${word3}, they realized it was more than a destination—it was a reminder of the resilience and power hidden within them.`,
        
        `${word1} always felt out of place in their small village. Life was simple, predictable, and ordinary, but they yearned for something more. One day, while tending the fields, ${word1} uncovered a strange ${word2} shimmering beneath the soil. It hummed with an unexplainable energy, and before ${word1} knew it, they were transported to ${word3}, a realm of floating islands and endless skies. The world was unlike anything ${word1} had ever seen, filled with flying beasts and magical beings. But danger loomed—the sky kingdom was under threat from an ancient curse. With the ${word2} as their guide, ${word1} ventured deep into the heart of ${word3}, uncovering its secrets and becoming the hero they always dreamed of being.`,
        
        `The streets of ${word3} were alive with the sound of celebration as ${word1} wandered through the crowd. They weren’t from this place; their home was far away, across mountains and seas. But the ${word2} in their hand, a gift from a mysterious stranger, had led them here. ${word1} didn’t know why they had been chosen, but whispers among the townsfolk spoke of a prophecy. The ${word2} was said to bring balance to the world, but only if wielded by the right person. As the festival reached its peak, shadows began to gather at the edges of ${word3}. ${word1} stepped forward, the ${word2} glowing brightly in their hand, ready to face whatever fate awaited them.`,
        
        `On the edge of ${word3}, a crumbling temple stood as the last remnant of an ancient civilization. ${word1} had spent years searching for it, guided only by cryptic clues and the mysterious ${word2} left behind by their ancestors. As they entered the temple, the air grew heavy with the weight of history. The ${word2} began to glow, illuminating carvings on the walls that told a story of betrayal, sacrifice, and hope. ${word1} realized they were the key to unlocking the temple’s secrets. But as they delved deeper, they discovered that the price of knowledge was far greater than they could have imagined.`,
        
        '${word1} never believed in legends, but when they wandered into the forbidden forest, everything changed. They stumbled upon a glowing ${word2} embedded in an ancient tree. A voice whispered from the shadows, warning ${word1} of the curse that bound the forest to ${word3}. Now chosen as the guardian, ${word1} must journey to ${word3}, where the true source of the curse awaits. Along the way, ${word1} befriends mythical creatures and uncovers the forest’s forgotten past. By the time they face the curse, ${word1} learns that bravery is not the absence of fear but the will to fight despite it.',
        
        'The city of Eternum ran on the magic of the fabled ${word2}, an ancient artifact hidden deep within ${word3}. ${word1}, an apprentice to the Timekeeper, was entrusted with the crucial task of retrieving it when time in the city began to unravel. With only fragments of a map and their wits, ${word1} faced riddles, time loops, and ancient guardians. As ${word1} approached ${word3}, they discovered that the ${word2} held a terrible secret. Would ${word1} restore the artifact and save the city, or break the cycle and rewrite history itself?'
    ];

    // Pick a random story
    const randomStory = stories[Math.floor(Math.random() * stories.length)];

    // Replace placeholders with user input
    const story = randomStory
        .replace(/\${word1}/g, word1)
        .replace(/\${word2}/g, word2)
        .replace(/\${word3}/g, word3);

    // Display the generated story
    document.getElementById('storyDisplay').innerHTML = `<p>${story}</p>`;
}
