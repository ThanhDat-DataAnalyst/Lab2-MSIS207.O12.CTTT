// Event Delegation
function handleClick(event) {
    console.log(this);
    console.log(event.target);
    playDrumSound(event.target.innerText);
    animateButton(event.target.innerText);
  }
  
  // Add event listeners to each button using a for loop
  let drumButtons = document.querySelectorAll("button");
  for (const button of drumButtons) {
    button.addEventListener("click", handleClick);
  }
  
  // Add event listener for keyboard presses
  document.addEventListener("keypress", handleKeyboardEvent);
  
  function handleKeyboardEvent(event) {
    console.log(event.key);
    playDrumSound(event.key);
    animateButton(event.key);
  }
  
  function playDrumSound(key) {
    switch (key) {
      case "w":
        new Audio("Sounds/tom-1.mp3").play();
        break;
      case "a":
        new Audio("Sounds/tom-2.mp3").play();
        break;
      case "s":
        new Audio("Sounds/snare.mp3").play();
        break;
      case "d":
        new Audio("Sounds/tom-4.mp3").play();
        break;
      case "j":
        new Audio("Sounds/crash.mp3").play();
        break;
      case "k":
        new Audio("Sounds/tom-3.mp3").play();
        break;
      case "l":
        new Audio("Sounds/kick-bass.mp3").play();
        break;
      default:
        break;
    }
  }
  
  function animateButton(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    document.body.classList.add("modify-body");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
      document.body.classList.remove("modify-body");
    }, 200);
  }
  