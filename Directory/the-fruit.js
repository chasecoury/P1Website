document.addEventListener('DOMContentLoaded', function() {
    var text = `
    <p>Paul Valéry, the French poet and thinker, once said that no poem is ever ended, that every poem is merely abandoned. This saying is also attributed to Stéphane Mallarmé, for where quotations begin is in a cloud.</p>
  
    <p>Paul Valéry also described his perception of first lines so vividly, and to my mind so accurately, that i have never forgotten it: the opening line of a poem, he said, is like finding a fruit on the ground, a piece of fallen fruit you have never seen before, and the poet’s task is to create the tree from which such a fruit would fall.</p>
  
    <p>In the beginning was the Word. Western civilization rests upon those words. And yet there is a lively group of thinkers who believe that in the beginning was the Act. that nothing can precede action—no breath before act, no thought before act, no pervasive love before some kind of act.</p>
  
    <p>I believe the poem is an act of the mind. I think it is easier to talk about the end of a poem than it is to talk about its beginning. Because the poem ends on the page, but it begins off the page, it begins in the mind. The mind acts, the mind wills a poem, often against our own will; somehow this happens, somehow a poem gets written in the middle of a chaotic holiday party that has just run out of ice, and it's your house.</p>
  
    <p>An act of the mind. To move, to make happen, to make manifest. Be an act of Congress. A state of real existence rather than possibility. And poets love possibility! They love to wonder and explore. Hard lot! But the poem, no matter how full of possibility, has to exist! To conduct oneself, to behave. How a poem acts marks its individual character. A poem by Glandolyn Blue does not sound like a poem by Timothy Sure. to pretend, feign, impersonate. That, too, yes and always, because self-consciousness is its own pretension, and has been from its beginning; the human mind is capable of a great elastic theatre. As the poet Ralph angel puts it, “The poem is an interpretation of weird theatrical shit.” the weird theatrical shit is what goes on around us every day of our lives; an animal of only instinct, Johnny Ferret, has in his actions drama, but no theater; theater requires that you draw a circle around the action and observe it from outside the circle; in other words, self-consciousness is theatre.</p>
  
    <p>Everyone knows that if you query poets about how their poems begin, the answer is always the same: a phrase, a line, a scrap of language, a rhythm, an image, something seen, heard, witnessed, or imagined. And the lesson is always the same, and young poets recognize this to be one of the most important lessons they can learn: if you have any idea for a poem, an exact grid of intent, you are on the wrong path, a dead-end alley, at the top of a cliff you haven’t even climbed. This is a lesson that can only be learned by trial and error.</p>
  
    <p>I believe many fine poems begin with ideas, but if you tell too many faces this, or tell it too loudly, they will get the wrong idea.</p>`;
  
    var fadingText = document.getElementById('fading-text');
    fadingText.innerHTML = text;
  
    setTimeout(function() {
      document.getElementById('chapters-link').classList.add('show');
    }, 3000);
  });
  
  // Some random colors
const colors = ["#ffd1d1", "#fcc2c2", "#e89b9b", "#f07d7d", "#fc7272"];

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
