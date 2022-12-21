function createHome()   {
    const home = document.createElement('div');
    home.classList.add('home');

    const pizzaPlanetImg = document.createElement('img');
    pizzaPlanetImg.src = '';
    pizzaPlanetImg.alt = 'Pizza Planet Entrance';

    home.appendChild(createParagraph(
    'Fuel up with out-of-this-world fast fare like breadsticks, pizza, and salad-it is an Italiano meal you can not refuse!'
    ));

    
    return home;
}


function createParagraph(text)  {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;