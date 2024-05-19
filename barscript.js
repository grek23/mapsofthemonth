/*
function move() {
    var elem = document.getElementById("myBar");   
    var progressText = document.getElementById("progressText");
    var width = 0;
    var interval = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++; 
        elem.style.width = width + '%';
        progressText.textContent = width + '%'; // Update the text content
      }
    }
  }
  
  // Start the progress bar
  //move();
  





//function definition

function dummyFunction() {
  console.log("Logging a pause before going to thank_you.html");
}

  function move() {
    var elem = document.getElementById("myBar");   
    var progressText = document.getElementById("progressText");
    var width = 0;
    var interval = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
        //window.setTimeout(dummyFunction, 3000);
        // Redirect to thankyou.html when progress reaches 100%
        //window.location.href = "thank_you.html";
        console.log("Logging a pause before going to thank_you.html 1");
        window.console.log("Logging a pause before going to thank_you.html 2");
        setTimeout(function() {
            
            window.location.href = "thank_you.html";
          }, 2500);
      } else {
        width++; 
        elem.style.width = width + '%';
        progressText.textContent = width + '%';
      }
    }
  }
  
  // Start the progress bar
  move();
  */


  function move() {
    var elem = document.getElementById("myBar");   
    var progressText = document.getElementById("progressText");
    var width = 0;
    var interval = setInterval(frame, 50);
    
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
        // Add a 3-second pause before redirecting
        console.log("Logging a pause before going to thank_you.html 1");
        setTimeout(function() {
          window.location.href = "thank_you.html";
        }, 3000);
      } else {
        if (width < 30) {
          width += 0.5; // Increase by 0.5% per interval until 30%
        } else if (width < 70) {
          width += 0.3; // Increase by 1% per interval from 30% to 70%
        } else if (width < 80) {
          width += 0.1; // Increase by 0.3% per interval from 70% to 100%
        } else {
          width += 0.05;
        }
        elem.style.width = width + '%';
        progressText.textContent = width.toFixed(0) + '%';
      }
    }
  }
  
  // Start the progress bar
  move();
  