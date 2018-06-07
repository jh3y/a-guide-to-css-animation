var input = document.querySelector('input')
var div = document.querySelector('div')
var update = function update(e) {
  div.style.setProperty('--scale', e.target.value)
}
input.addEventListener('input', update)
