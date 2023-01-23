function switchTheme() {
  const appContainer = document.getElementById('app-container')
  let theme = 'light'
  if (appContainer.className === 'light') theme = 'dark'
  appContainer.className = ''
  appContainer.className = theme
  window.localStorage.setItem('theme', theme)
}

function returnButton(path = '') {
  let pathArray = path.split('/')
  pathArray.pop()
  pathArray.pop()
  window.location.href = '/' + pathArray.join('')
}

(function() {
  window.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container')
    const theme = window.localStorage.getItem('theme') || appContainer.className 
    window.localStorage.setItem('theme', theme)
    appContainer.className = window.localStorage.getItem('theme')
  })
})()