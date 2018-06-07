var spinner = document.querySelector('div');
var label = document.querySelector('h1');
var span = 0;
var update = function update() {
  span++;
  label.innerText = 'Span ' + span + ' times!';
};

spinner.addEventListener('animationiteration', update);