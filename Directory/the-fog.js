document.addEventListener('DOMContentLoaded', function() {
    var text = `
    
    <p>But it is growing damp and I must go in. Memory’s fog is rising. Among Emily Dickinson’s last words (in a letter). A woman whom everyone thought of as shut-in, homebound, cloistered, spoke as if she had been out, exploring the earth, her whole life, and it was finally time to go in. And it was.</p>`;
  
    var fadingText = document.getElementById('fading-text');
    fadingText.innerHTML = text;
  
    setTimeout(function() {
      document.getElementById('chapters-link').classList.add('show');
    }, 3000);
  });

        // Some random colors
        const colors = ["#d9d9d9", "#b0b0b0", "#949494", "#f2f2f2", "#636363"];

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
  