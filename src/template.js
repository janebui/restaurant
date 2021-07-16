import './style.css';
import displayMenu from './menu';

function display() {
    const title = document.createElement('h1');
    title.innerHTML = 'truffle + salt';
    document.body.appendChild(title);

    const nav = document.createElement('nav');
    nav.innerHTML = `
    <ul>
    <li>Home</li>
    <li><span id="menu">Menu</span></li>
    <li>Reservations</li>
    <li>About</li>
    </ul>
    `;
    document.body.appendChild(nav);


    const main = document.createElement('div');
    main.setAttribute('id', 'content');
    main.innerHTML = "from the template";
    document.body.appendChild(main);

    const menuBtn = document.querySelector('#menu');

    menuBtn.addEventListener('click', displayMenu)
}


export default display;