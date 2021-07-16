import menuPic from './DSC00941.jpg';

function displayMenu() {
    const main = document.querySelector('main');
    const appetizers = [{
            name: "Crevettes Bordelaise",
            price: 24
        },
        {
            name: "Coquilles St. Jacques",
            price: 22
        },
        {
            name: "Escargot Bourguignon",
            price: 22
        }
    ];
    const entrees = [{
            name: "Duck Confit",
            price: 28
        },
        {
            name: "Poulet a la Marsala",
            price: 28
        },
        {
            name: "Filet Mignon",
            price: 32
        }
    ]
    const desserts = [{
            name: "Crème Brûlée",
            price: 12
        },
        {
            name: "Cheesecake",
            price: 9
        },
        {
            name: "Mousse Torte",
            price: 10
        }
    ]

    function convertMenuArr(arr) {
        let newArr = []
        newArr = arr.map((item) => {
            return `<li>${item.name}<span>${item.price}</span></li>`
        })
        return newArr.join('');
    }

    main.innerHTML = `<div class="list">
        <h2>appetizers</h2>
        <ul>
        ${convertMenuArr(appetizers)}
        </ul>
        <h2>entrées</h2>
        <ul>
        ${convertMenuArr(entrees)}
        </ul>
        <h2>dessert</h2>
        <ul>
        ${convertMenuArr(desserts)}
        </ul>
        </div>`;

    const menuPicture = new Image();
    menuPicture.src = menuPic;
    menuPicture.setAttribute('class', 'menupic');
    main.appendChild(menuPicture);
}

export default displayMenu;