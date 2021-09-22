const signup =  document.querySelector('.signup')
const login = document.querySelector('.login')
const arrow = document.querySelector('#rightarr')
const larrow = document.querySelector('#lrightarr')

signup.addEventListener('mouseover', () => {
    console.log('hovered')
    arrow.id = 'rightarr2'
})

signup.addEventListener('mouseout', () => {
    console.log('hovered')
    arrow.id = 'rightarr'
})

login.addEventListener('mouseover', () => {
    console.log('hovered')
    larrow.id = 'lrightarr2'
})

login.addEventListener('mouseout', () => {
    console.log('hovered')
    larrow.id = 'lrightarr'
})

login.addEventListener('click', () => {
    window.location.href = 'http://' + window.location.host + '/login'
})