// about.js

export {loadAboutPageFunc}

let loadAboutPageFunc = () => {
    const contentArea = document.querySelector('.content');
    contentArea.textContent = '';

    const aboutContainer = document.createElement('div')
    contentArea.appendChild(aboutContainer)
    aboutContainer.setAttribute('class', 'aboutContainer')



    const aboutHeading = document.createElement('h1')
    aboutHeading.textContent = 'About Us: The Wonky Spatula'
    aboutContainer.appendChild(aboutHeading)

    const aboutPara = document.createElement('p')
    aboutPara.textContent = 'Here at The Wonky Spatula, we don\'t just cook food; we orchestrate edible eccentricities! Born from a dream involving a sentient cucumber and a very enthusiastic whisk, our humble establishment has been delighting taste buds (and occasionally confusing them) since... well, let\'s just say "a Tuesday."We believe in the freshest ingredients, sourced directly from the whisperings of the wind and the giggles of garden gnomes. Our chefs, masters of culinary chaos, specialize in dishes that defy gravity, logic, and sometimes, even the laws of thermodynamics. Ever tried our "Cloud of Unknowing" soup, or perhaps the "Symphony of Sizzles" main course? No? Then you\'re in for a treat!So, if you\'re looking for a dining experience that\'s less about eating and more about existential edible exploration, pull up a wobbly chair. Just don\'t ask what the secret ingredient is in our "Mystery Meatballs." Some secrets are best left to the universe... and our very secure pantry.'
    aboutContainer.appendChild(aboutPara)
}