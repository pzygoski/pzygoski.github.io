const titulo = document.querySelector('h1');
titulo.remove();

//console.log('innerHTML: ',titulo.innerHTML);
//console.log('innerText: ',titulo.innerText);
//console.log('textContent:', titulo.textContent);

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.text = 'Meu link';
ancora.setAttribute('href','https://www.ifro.edu.br')
ancora.setAttribute('target','_blank')
ancora.style.fontSize = '30px';
ancora.style.textDecoration = 'none';
ancora.style.color = '#0f0';
ancora.style.fontWeight = 'bold';
body.prepend(ancora);