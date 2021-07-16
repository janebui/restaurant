
function displayMenu() {
    const menu = document.createElement('div');
    menu.innerHTML = "MENU";
    document.body.appendChild(menu);
    console.log('display menu');

}

export default displayMenu;