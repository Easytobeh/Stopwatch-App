// var newDiv = document.createElement('div');
// console.log(newDiv);

// newDiv.className = 'start';

// var newDivText = document.createTextNode('hello');
// newDiv.appendChild(newDivText);

let seconds = document.getElementById('seconds');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');
let reset = document.getElementById('reset');

let sec = 0;
let hr = 0;
let min = 0;
let buttonState = true;

let startButton = document.getElementById("start-stop");
reset.classList.add('hide');
reset.addEventListener("click", resetWatch);
startButton.addEventListener("click", startWatch);

function startWatch() {
  buttonFunction();
  //check if button state is false start countdown
  if(buttonState === false) {
  let countDown = setInterval(() => {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
      if (min === 60)
      {
        min = 0;
        hr++;
        if(hr < 10)
          hr = '0' + hr;
        hour.innerHTML = hr;
      }

      if(min < 10)
        min = '0' + min;
      minute.innerHTML = min;
    }
    
    if(sec < 10)
      sec = '0' + sec;
    seconds.innerHTML = sec;
    
    if (buttonState === true)
    clearInterval(countDown);
  }, 1000);
  }
}


const buttonFunction = ()  => {
    if (buttonState === true) {

    
        startButton.innerHTML = "Stop";
        //console.log(startButton.classList);
        startButton.classList.remove("start");
        startButton.classList.add("stop");
        reset.classList.remove('hide');
        reset.classList.add('visible');

      } 
      
      else {
        startButton.innerHTML = "Start";
        //console.log(startButton.classList)
        startButton.classList.remove("stop");
        startButton.classList.add("start");
      }
      buttonState = !buttonState; //toggle the button
      
}

function resetWatch() {

  sec = 0;
  hr = 0;
  min = 0;

  seconds.innerHTML = '00';
  minute.innerHTML = '00';
  hour.innerHTML = '00';
  reset.classList.remove('visible');
  reset.classList.add('hide');
  
  // startButton.innerHTML = "Start";
  //       //console.log(startButton.classList)
  //       startButton.classList.remove("stop");
  //       startButton.classList.add("start");
  //       buttonState = true;  

}