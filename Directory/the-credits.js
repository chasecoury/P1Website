document.addEventListener('DOMContentLoaded', function() {
    var text = `
    <p>I will tell you what I miss: I miss watching a movie and at the end, huge scrolled words come on the screen and say: The End. I miss finishing a novel and there on the last page, at a discrete distance from the last words of the last sentence, are the dark letters spelling The End.</p>
  
    <p>It was its own thrill. I didn’t ignore them, I read them, even if only silently, with a deep sense of feeling: both the feeling of being replete, a feeling of satisfaction, and the feeling of loss, the sadness of having finished the book.</p>
  
    <p>I have never, in my life, read a poem that ended with the words The End. Why is that, I wonder. I think perhaps the brevity of poems compared to novels makes one feel that there has been no great sustention of energy, no marathon worthy of pulling tape across the finish line. And then I found a poem of mine that I had carefully written by hand in the sixth grade, and at the bottom of the page, in India ink, beautifully apart from the rest of the text, were the words The End. And I realized children very often denote the end because it is indeed a great achievement for them to have written anything, and they are completely unaware of the number of stories and poems that have already been written; they know some, of course, but have not yet found out the extent to which they are not the only persons residing on the planet. And so they sign their poems and stories like kings. Which is a wonderful thing.</p>
  
    <p>Roland Barthes suggests there are three ways to finish any piece of writing: the ending will have the last word or the ending will be silent or the ending will execute a pirouette, do something unexpectedly incongruent.</p>
   
    <p>Gaston Bachelard says the single most succinct and astonishing thing: We begin in admiration and we end by organizing our disappointment. The moment of admiration is the experience of something unfiltered, vital and fresh—it could also be horror—and the moment of organization is both the onset of disappointment and its dignification; the least we can do is dignify our knowingness, the loss of some vitality through familiarization, by admiring not the thing itself but how we can organize it, think about it.</p>
   
    <p>I am afraid there is no way around this. It is the one try inevitable thing. And if you believe that, then you are conceding that in the beginning was the act, not the word.</p>`;
  
    var fadingText = document.getElementById('fading-text');
    fadingText.innerHTML = text;
  
    setTimeout(function() {
      document.getElementById('chapters-link').classList.add('show');
    }, 3000);
  });
  

      // Some random colors
const colors = ["#fff0db", "#ffe7c7", "#ffcc8a", "#ffb759", "#ffa530"];

const numBalls = 70;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});