
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

function initWebsite() {

    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

}

export default initWebsite;