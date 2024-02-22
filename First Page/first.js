$(document).ready(function(){
  var theLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"; // Expanded set of letters
  var ctnt = "<a href='../Second Page/second.html' class='hoverable-text'>In life, the number of beginnings is exactly equal to the number of endings: no one has yet to begin a life who will not end it.</a>"; // Your text goes here
  var speed = 6; // ms per frame
  var increment = 2; // frames per step. Must be >2
  
  var clen = ctnt.length;       
  var si = 0;
  var stri = 0;
  var block = "";
  var fixed = "";
  
  // Generate random flying letters behind the main text
  var flyingLetters = $("<div class='flying-letters'></div>").appendTo("body");
  
  // Function to generate a random flying letter
  function generateFlyingLetter() {
      var letter = $("<span class='flying-letter'>" + theLetters.charAt(Math.floor(Math.random() * theLetters.length)) + "</span>");
      var size = Math.random() * 20 + 10;
      var duration = Math.random() * 10 + 5;
      
      // Randomly determine starting position outside the viewport
      var startX, startY;
      if (Math.random() < 0.5) {
          // Start from top or bottom
          startX = Math.random() * $(window).width();
          startY = Math.random() < 0.5 ? -50 : $(window).height() + 50;
      } else {
          // Start from left or right
          startX = Math.random() < 0.5 ? -50 : $(window).width() + 50;
          startY = Math.random() * $(window).height();
      }
      
      letter.css({
          position: "absolute",
          left: startX,
          top: startY,
          fontSize: size + "px",
          opacity: 0,
          animation: "spin " + duration + "s linear infinite" // Apply spin animation
      }).appendTo(flyingLetters).animate({
          left: Math.random() * $(window).width(), // Random ending X position
          top: Math.random() * $(window).height(), // Random ending Y position
          opacity: 1
      }, duration * 1000, function() {
          $(this).animate({
              opacity: 0
          }, duration * 500, function() {
              $(this).remove();
              generateFlyingLetter(); // Generate a new flying letter
          });
      });
  }
  
  // Generate multiple flying letters
  for (var i = 0; i < 100; i++) { // Adjust the number of flying letters here
      generateFlyingLetter();
  }
  
  // Call function to change background color
  changeBackgroundColor();
  
  // Function to change background color gradually
  function changeBackgroundColor() {
      $("body").css("animation", "fade-in 1.5s ease-in-out forwards");
  }
  
  //Call self x times, whole function wrapped in setTimeout
  (function rustle (i) {          
      setTimeout(function () {
          if (--i){rustle(i);}
          nextFrame(i);
          si = si + 1;        
      }, speed);
  })(clen*increment+1); 
  
  function nextFrame(pos){
      for (var i=0; i<clen-stri; i++) {
          //Random number
          var num = Math.floor(theLetters.length * Math.random());
          //Get random letter
          var letter = theLetters.charAt(num);
          block = block + letter;
      }
      if (si == (increment-1)){
          stri++;
      }
      if (si == increment){
          // Add a letter; 
          // every speed*10 ms
          fixed = fixed +  ctnt.charAt(stri - 1);
          si = 0;
      }
      $("#output").html(fixed + block);
      block = "";
  }
  
  // Add hover effect
  $('.hoverable-text').hover(function() {
      $(this).css('color', 'red');
  }, function() {
      $(this).css('color', ''); // Reset color on mouseout
  });
  
  // Prevent default action for anchor tag
  $('.hoverable-text').click(function(event) {
      event.preventDefault();
      // Add your custom click behavior here
  });
});
