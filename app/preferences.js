const { remote } = require('electron')

const bounds = remote.getCurrentWindow().getBounds()
console.log(bounds)

document.ondragover = event =>
  event.preventDefault()

document.ondrop = event =>
  event.preventDefault()

document.querySelector('#one').onclick = event => {
  console.log(bounds.y)
  remote.getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 500 })
  console.log(remote.getCurrentWindow().getBounds())
}

document.querySelector('#two').onclick = event => {
  console.log(bounds.y)
  remote.getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 400 })
  console.log(remote.getCurrentWindow().getBounds())
}

document.querySelector('#three').onclick = event => {
  console.log(bounds.y)
  remote.getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 300 })
  console.log(remote.getCurrentWindow().getBounds())
}
