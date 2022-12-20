
function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName')
    restaurantName.textContent = 'Pizza Planet';

    header.appendChild(restaurantName);
    header.appendChild(createNav());


    return header;
}

function createNav(){
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    })
    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    })
    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;

}

function initWebsite() {

    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

}

export default initWebsite;