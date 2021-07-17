import './style.css';
import displayMenu from './menu';
import displayAbout from './about';
import frontPic from './DSC00932.jpg';

const sections = ['home', 'menu', 'about'];

// create header with title
const header = document.createElement('header');
header.innerHTML = '<h1><a href="index.html">truffle + salt</a></h1>';
document.body.appendChild(header);

// create navigation bar
const nav = document.createElement('nav');
const ul = document.createElement('ul');
nav.appendChild(ul);
document.body.appendChild(nav);
ul.innerHTML = sections.map(item => {
    return `<li id="${item}">${item.toUpperCase()}</li>`
}).join('');

// create main section
const main = document.createElement('main');
document.body.appendChild(main);

// displays default main section on page load
function displayDefault() {
    main.innerHTML = `
        <p>Welcome to truffle + salt, a modern take on French cuisine.</p>
        <div id="hours-location">
        <div>
        <h2>Hours</h2>
        <ul id="hours">
        <li>Sunday<span>10 - 2</span></li>
        <li>Monday<span>10 - 9</span></li>
        <li>Tuesday<span>10 - 9</span></li>
        <li>Wednesday<span>10 - 9</span></li>
        <li>Thursday<span>10 - 9</span></li>
        <li>Friday<span>10 - 10</span></li>
        <li>Saturday<span>10 - 10</span></li>
        </ul>
        </div>
        <div>
        <h2>Location</h2>
        111 Truffle Lane<br>
        San Francisco, CA 94115
        </div>
        </div>
        <hr>
        <p>By <a href="https://www.janebui.com">Jane Bui</a> | <a href="https://github.com/janebui/restaurant">Github Repo</a></p>
        
        `;

    const frontPicture = new Image();
    frontPicture.src = frontPic;
    frontPicture.setAttribute('class', 'foodpic');
    main.insertBefore(frontPicture, main.firstChild);
}

displayDefault();

// change the main content when user clicks on nav link
function changeDisplay(e) {
    if (!e.target.matches('li')) {
        return;
    };

    if (document.querySelector('ul li.active') !== null) {
        document.querySelector('ul li.active').classList.remove('active');
    }

    e.target.classList.add('active');

    switch (e.target.getAttribute('id')) {
        case 'home':
            displayDefault();
            break;
        case 'menu':
            displayMenu();
            break;
        case 'about':
            displayAbout();
            break;
        default:
            console.log('nothing');
            break;
    };
}

ul.addEventListener('click', changeDisplay);