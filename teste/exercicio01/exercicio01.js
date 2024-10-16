const itensMenu = [
    {nome: 'Início', url: 'index.html'},
    {nome: 'Sobre', url: 'sobre.html'},
    {nome: 'Contato', url: 'contato.html'},
];

function menu () {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const body = document.querySelector('body');
    nav.appendChild(ul);
    header.appendChild(nav);
    body.prepend(header);

};

function adicionarLi () {
    const ul = document.querySelector('ul');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href',item.url);
        a.textContent = item.nome.toUpperCase(); 
        li.appendChild(a);
        ul.appendChild(li);
        a.style.textDecoration = 'none';
        a.style.color = 'white';
    });
}
 function estilizar () {
    const header = document.querySelector('header');
    const ul = document.querySelector('ul');
    header.style.backgroundColor = '#071D41';
    header.style.fontStyle = 'Arial';
    ul.style.height = '40px';
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.gap = '20px';
    ul.style.listStyleType = 'none';
    ul.style.alignItems = 'center'
}


menu()
adicionarLi()
estilizar()