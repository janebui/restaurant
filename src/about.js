import Pic from './DSC00934.jpg';

function displayAbout() {
    const main = document.querySelector('main');
    main.innerHTML = `
    <h2>about us</h2>
    <p><b>truffle + salt</b> was founded by the Bui family in 2021 and has been serving bay area locals ever since. We raised the of excellence with fine, modern French continental cuisine. Our commitment to hospitality begins long before you sit down at our table. We look forward to welcoming you to taste our seasonal menu fresh from the culinary garden.</p>
    <h2>contact us</h2>
    <form>
    <label for="name">Name:</label>
    <input id="name" type="text">
    <label for="email">Email:</label>
    <input id="email" type="text">
    <label for="message">Message:</label>
    <textarea id="message"></textarea>
    <button>Send</button>
    </form>
    <p>
    Truffle and Salt, LLC<br>111 Truffle Lane<br>San Francisco, CA 94115<br><br>
    (555) 314-1592
    </p>
    `;

    const Picture = new Image();
    Picture.src = Pic;
    Picture.setAttribute('class', 'menupic');
    main.appendChild(Picture);
};

export default displayAbout;
