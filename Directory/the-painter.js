document.addEventListener('DOMContentLoaded', function() {
    var text = `
    <p>The painter Cy Twombly quotes John Crowe Ransom, on a scrap of paper: “The image cannot be disposed of a primordial freshness which ideas can never claim.”</p>
  
    <p>Easy and appropriate thing for a painter to say. Cy Twombly uses text in some of his drawings and paintings, usually poetry, usually Dante. Many men and women have written long essays and lectures on the ideas they see expressed in Twombly’s work.</p>
  
    <p>Bachelard’s sentence simply says this: origins (beginnings) have consequences (endings).</p>
  
    <p>The poem is the consequence of its origins. Give me the fruit and I will take from it a see and plant it and watch grow the tree from which it fell.</p>
   
    <p>Barbara Henstein Smith, in her book Poetic Closure: A Study of How Poems End, says this: “Perhaps all we can say, and even this may be too much, is that varying degrees or states of tension seem to be involved in all our experiences, and that the most gratifying ones are those in which whatever tensions are created are also released. Or, to use another familiar set of terms, an experience is gratifying to the extent that those expectations that are aroused are also fulfilled.”</p>
   
    <p>But there is no book I know of on the subject of how poems begin. How can the origin be traced when there is no form or shape that precedes it to trace? It is exactly like tracing the moment of the big bang—we can go back to a nanosecond before the beginning, before the universe burst into being, but we can’t go back to the precise beginning because that would precede knowledge, and we can’t “know” anything before “knowing” itself was born.</p>`;
  
    var fadingText = document.getElementById('fading-text');
    fadingText.innerHTML = text;
  
    setTimeout(function() {
      document.getElementById('chapters-link').classList.add('show');
    }, 3000);
  });
  

      // Some random colors
      const colors = ["#caffbd", "#b4ffa1", "#a1ff8a", "#7aff59", "#47ff19"];

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