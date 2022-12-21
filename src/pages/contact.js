function createContact()    {

    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 789 123 456'

    const address = document.createElement('p')
    address.textContent = '🏠 Tommorrowland at DisneyLand Park'

    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = ''
    restaurantLocation.alt = 'Pizza Planet Location'


    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)

    return contact;
    
}

function loadContact()  {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
}

export default loadContact