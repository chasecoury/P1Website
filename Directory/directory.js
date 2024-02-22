document.addEventListener('DOMContentLoaded', function() {
    var phrases = ["The Fruit", "The Idea", "The Credits", "The Painter", "The Refrain", "The Fog"];
    var typewriter = document.getElementById('typewriter');

    phrases.forEach(function(phrase) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = phrase.toLowerCase().replace(/\s+/g, '-') + '.html'; // Assuming each phrase links to a page with its name
        listItem.appendChild(link);
        listItem.classList.add('typewriter-line');
        typewriter.appendChild(listItem);
        
        // Call the typewriter function for each phrase
        typewriterTypewriter(link, phrase, 0);
    });
});

function typewriterTypewriter(element, text, index) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(function() {
            typewriterTypewriter(element, text, index);
        }, 100); // Adjust typing speed here (milliseconds)
    }
}
