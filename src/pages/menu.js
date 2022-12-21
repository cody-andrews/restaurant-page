function createMenu()   {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            'Mega Pepperoni - Slice', 
            'Celestial Tomato Sauce topped with Mozzarella Cheese and extra large slices of Pepperoni'

        )
    );
        menu.appendChild(createMenuItem(
        'Mozz-114 Cheese Pizza - Slice', 
        'Celestial Tomato Sauce with a generous topping of Mozzarella Cheese'

    ));
        
   

     menu.appendChild(createMenuItem(
        'Centurion Chicken Caesar Salad', 
        'Grilled Chicken Breast atop crisp Romaine Lettuce tossed in Caesar Dressing, with Croutons and Parmesan Cheese'

    ));

        
   
     menu.appendChild(  createMenuItem(
        'Astro Antipasto Salad', 
        'Crisp Lettuce with Pepperoni, Tomatoes, Mixed Olives, Pepperoncini, fresh Mozzarella, Roasted Red Pepper, Artichoke Hearts, and Roasted Onion, with Balsamic Vinaigrette and Shaved Parmesan Cheese'

    ));
        return menu
}

function createMenuItem(name, description)  {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;
    
    const foodImage = document.createElement('p');
    foodImage.src = '';
    foodImage.ald = '';

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodImage);

    return menuItem;
}

function loadMenu()  {
    const main = document.getElementById('main')
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;