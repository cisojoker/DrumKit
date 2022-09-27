for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerHTML = this.innerHTML;
    makesound(buttoninnerHTML);
    ButtonAnimation(buttoninnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  ButtonAnimation(event.key);
});
function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-4.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("tom-1.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("tom-2.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("tom-3.mp3");
      tom4.play();
      break;
    case "j":
      var tom8 = new Audio("snare.mp3");
      tom8.play();
      break;
    case "k":
      var tom6 = new Audio("kick-bass.mp3");
      tom6.play();
      break;
    case "l":
      var tom5 = new Audio("crash.mp3");
      tom5.play();
      break;

    default:
      alert("wrongkeypressed");
      break;
  }
}
function ButtonAnimation(cuurentkey) {
  var PressdButton = document.querySelector("." + cuurentkey);
  PressdButton.classList.add("pressed");
  setTimeout(function () {
    PressdButton.classList.remove("pressed");
  }, 100);
}
