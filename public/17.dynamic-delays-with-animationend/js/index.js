var spinner = document.querySelector('div');
var label = document.querySelector('h1');

var update = function update() {
  spinner.classList.remove('animating');
  var interval = Math.floor(Math.random() * 5000);
  label.innerText = 'Spinning in ' + interval + 'ms';
  setTimeout(function () {
    spinner.classList.add('animating');
  }, interval);
};

spinner.addEventListener('animationend', update);