// menu.js

export {loadMenuPageFunc}

let loadMenuPageFunc = () => {
    const contentArea = document.querySelector('.content');
    contentArea.textContent = '';

    const menuWrapper = document.createElement('div')
        menuWrapper.setAttribute('class', 'menuWrapper')
        contentArea.appendChild(menuWrapper)
    for (let i = 0; i < 6; i++){
        const menuItems = document.createElement('div')
        menuItems.setAttribute('class', `menuItems`)
        menuWrapper.appendChild(menuItems)

        const menuItemIMG = document.createElement('div')
        menuItems.appendChild(menuItemIMG)

        const menuItemHeading = document.createElement('h1')
        menuItemHeading.setAttribute('class', `menuItemHeadingH${i}`)
        menuItems.appendChild(menuItemHeading)

        const menuItemPara = document.createElement('p')
        menuItemPara.setAttribute('class', `menuItemHeadingP${i}`)
        menuItems.appendChild(menuItemPara)
    }


// EACHHH ITEM ON THE MENU CARD (BRUH INFINITE USELESS CODE LOL)
    const menuItem0 = document.querySelector('.menuItems0')
    const menuItem1 = document.querySelector('.menuItems1')
    const menuItem2 = document.querySelector('.menuItems2')
    const menuItem3 = document.querySelector('.menuItems3')
    const menuItem4 = document.querySelector('.menuItems4')
    const menuItem5 = document.querySelector('.menuItems5')

    const menuItem0H0 = document.querySelector('.menuItemHeadingH0')
    const menuItem1H1 = document.querySelector('.menuItemHeadingH1')
    const menuItem2H2 = document.querySelector('.menuItemHeadingH2')
    const menuItem3H3 = document.querySelector('.menuItemHeadingH3')
    const menuItem4H4 = document.querySelector('.menuItemHeadingH4')
    const menuItem5H5 = document.querySelector('.menuItemHeadingH5')

    const menuItem0P0 = document.querySelector('.menuItemHeadingP0')
    const menuItem1P1 = document.querySelector('.menuItemHeadingP1')
    const menuItem2P2 = document.querySelector('.menuItemHeadingP2')
    const menuItem3P3 = document.querySelector('.menuItemHeadingP3')
    const menuItem4P4 = document.querySelector('.menuItemHeadingP4')
    const menuItem5P5 = document.querySelector('.menuItemHeadingP5')

    menuItem0H0.textContent = 'Margherita Pizza'
    menuItem0P0.textContent = 'A classic Neapolitan pizza with simple, fresh ingredients: San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of olive oil.'
    menuItem1H1.textContent = 'Spicy Tuna Roll'
    menuItem1P1.textContent = 'Sushi roll filled with fresh tuna, spicy mayo, cucumber, and a sprinkle of sesame seeds.'
    menuItem2H2.textContent = 'Chicken Tikka Masala'
    menuItem2P2.textContent = 'Tender pieces of chicken cooked in a creamy, spiced tomato sauce, typically served with basmati rice.'
    menuItem3H3.textContent = 'Caesar Salad'
    menuItem3P3.textContent = 'Crisp romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing.'
    menuItem4H4.textContent = 'Beef Burger'
    menuItem4P4.textContent = 'Grilled beef patty served on a brioche bun with lettuce, tomato, onion, and pickles.'
    menuItem5H5.textContent = 'Chocolate Lava Cake'
    menuItem5P5.textContent = 'Warm individual chocolate cake with a molten chocolate center, often served with a scoop of vanilla ice cream.'    
}





