//on button click
  //change picture (required)
    //change background color (white/black)
    //change button text (ON/OFF)
    //text transition (flicker)
    



//add title
let textBox = document.querySelector('.title')

let h2Tag = document.createElement('h2')
h2Tag.textContent = 'Let There Be Light'
textBox.appendChild(h2Tag)


//event listener just on button
document.getElementById("btn").addEventListener("click", function (event) { 
    //toggle the background color with div class
    document.body.classList.toggle('light-on');
    //toggle the button text
    if (event.target.textContent === "OFF") { 
      event.target.textContent = "ON";
    } 
    else 
    {
      event.target.textContent = "OFF";
    }

    //toggle the picture
    let lightBulb = document.getElementById('lights-off')
     //if element matches the specific css selector in parenthesis
    if(lightBulb.src.match('light-off.png')){ //if img is off picture
      lightBulb.src = 'images/light-on.png'; //then switch to on picture
    }
    else
    {
      lightBulb.src = 'images/light-off.png'; //if on, switch to off
    }

    //text flicker animation
    let title = document.querySelector('.title')
    title.classList.toggle('title-animate')

  });