const txt = document.querySelector('#txt')
const divImg = document.querySelector('.divImg')

function bordaDiv() {
    divImg.style.border = '2px solid black';
}

divImg.addEventListener('click', bordaDiv)

txt.onclick = () => {
    alert('Campo de texto clicado!')
}

const clicked = () => {
    console.log('Botão clicado!')
}

txt.addEventListener('keypress', () => {
    alert('Tecla pressionada!')
})

divImg.addEventListener('mouseover', () => {
    divImg.style.opacity = '0.5'
})

divImg.addEventListener('mouseout', () => {
    divImg.style.opacity = '1'
})