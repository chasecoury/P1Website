document.addEventListener('DOMContentLoaded', function() {
    var text = `
    <p>Now here is something really interesting (to me), something you can use at a standing-up-only party when everyone is tired of hearing there are one million three-thousand-two-hundred-ninety-five words used by the Esimo for snow. This is what Ezra Pound learned from Ernest Fenollosa: Some languages are so constructed—English among them—that we each only really speak one sentence in our lifetime. That sentence begins with your first words, toddling around the kitchen, and ends with your last words right before you step into the limousine, or in a nursing home, the night-duty attendant vaguely on hand. Or, if you are blessed, they are heard by someone who knows you and loves you and will be sorry to hear the sentence end.</p>
  
    <p>When I told Mr. Angel about the lifelong sentence, he said: “That’s a lot of semicolons!” he is absolutely right; the sentence would be unwieldy and awkward and resemble the novel of a savant, but the next time you use a semicolon (which, by the way, is the least-used mark of punctuation in all of poetry) you should stop and be thankful that there exists this little thing, invented by a human being—an Italian as a matter of fact—that allows us to go on and keep on connecting speech that for all apparent purposes is unrelated.</p>
  
    <p>You might say a poem is a semicolon, a living semicolon, what connects the first line to the last, the act of keeping together that whose nature is to fly apart. Between the first and last lines there exists—a poem—and if it were not for the poem that intervenes, the first and last lines of a poem would not speak to each other.</p>
  
    <p>Would not speak to each other. Because the lines of a poem are speaking to each other, not you to them or they to you.</p>`;
  
    var fadingText = document.getElementById('fading-text');
    fadingText.innerHTML = text;
  
    setTimeout(function() {
      document.getElementById('chapters-link').classList.add('show');
    }, 3000);
  });
  
    // Some random colors
const colors = ["#fff8d4", "#fff4ba", "#ffefa1", "#fae684", "#ffe561"];

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