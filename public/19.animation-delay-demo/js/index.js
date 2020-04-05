// Get started!
const RANGE = document.querySelector('input')
const CONTAINER = document.querySelector('.container')
const TITLES = [...document.querySelectorAll('h1')]
const BLURBS = [...document.querySelectorAll('p')]
const CODES = [...document.querySelectorAll('pre')]

// Each config reps delay, duration, stagger, coefficient, offset
const STEP_CONFIGS = [
  [0, 2, 0, 1, 0],
  [2, 2, 0, 1, 0],
  [-0.5, 2, 0, 1, 0],
  [0, 2, 0.25, 1, 0],
  [0, 2, 0.25, 1, -5],
  [0, 2, 0.25, -1, 0],
]

const update = () => {
  // Show/Hide elements
  for (let e = 0; e < TITLES.length; e++) {
    TITLES[e].style.display = BLURBS[e].style.display = CODES[e].style.display =
      e === parseInt(RANGE.value, 10) ? 'block' : 'none'
  }
  // Running the step function
  const CONFIG = STEP_CONFIGS[parseInt(RANGE.value, 10)]
  document.documentElement.style.setProperty('--delay', CONFIG[0])
  document.documentElement.style.setProperty('--duration', CONFIG[1])
  document.documentElement.style.setProperty('--stagger-step', CONFIG[2])
  document.documentElement.style.setProperty('--coefficient', CONFIG[3])
  document.documentElement.style.setProperty('--offset', CONFIG[4])
  // Retrigger the animation
  CONTAINER.hidden = true
  requestAnimationFrame(() => (CONTAINER.hidden = false))
}

RANGE.addEventListener('change', update)
// Run the first time to show step 0 👍
update()
