const continueB = document.querySelector('.continue')
const larrow = document.querySelector('.continuearr')

continueB.addEventListener('mouseover', () => {
    console.log('hovered')
    larrow.className = 'continuearr2'
})

continueB.addEventListener('mouseout', () => {
    console.log('hovered')
    larrow.className = 'continuearr'
})
