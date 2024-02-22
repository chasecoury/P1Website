document.addEventListener('DOMContentLoaded', function() {
    var text = `
   
    <p>I have flipped through books, reading hundreds of opening and closing lines, across ages, across cultures, across aesthetic schools, and I have discovered that first lines are remarkably similar, even repeated, and that last lines are remarkably similar, even repeated. Of course in all cases they remain remarkably distinct, because the words belong to completely different poems. And i began to realize, reading these first and last lines, that there are not only the first and last lines of the lifelong sentence we each speak but also the first and last lines of the long piece of language delivered to use by others, by those we listen to. And in the best of all possible lives, that beginning and that end are the same: in poem after poem I encountered words that mark the first something made out of language that we hear as children repeated night after night, like a refrain: I love you. I am here with you. Don’t be afraid. Go to sleep now. And I encountered words that mark the last something made out of language that we hope to hear on earth: I love you. I am here with you. Don’t be afraid. Go to sleep now.</p>`;
  
    var fadingText = document.getElementById('fading-text');
    fadingText.innerHTML = text;
  
    setTimeout(function() {
      document.getElementById('chapters-link').classList.add('show');
    }, 3000);
  });
  
    

      // Some random colors
      const colors = ["#abbdff", "#8ca5ff", "#7a97ff", "#5e81ff", "#3863ff"];

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