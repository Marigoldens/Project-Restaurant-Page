//homepage.js

import restaurantLogo from './IMGs/fineDining.jpg';
export {loadHomePageFunc}

let loadHomePageFunc = function loadHomePage(){
// QUERY AND APPENDING
const contentArea = document.querySelector('.content')
contentArea.textContent = ''
const mainHomepageContainer = document.createElement('div')
    const homePageTitle = document.createElement('H1')
    const homePageSubtitle1 = document.createElement('H2')
    const homePagePara1 = document.createElement('p')
    const homePageSubtitle2 = document.createElement('H2')
    const homePagePara2 = document.createElement('p')
    const homePageSubtitle3 = document.createElement('H2')
    const homePagePara3 = document.createElement('p')
    const homePageSubtitle4 = document.createElement('H2')
    const homePagePara4 = document.createElement('p')
const homePageImage = new Image();


homePageTitle.setAttribute('class', 'homePageTitle')
homePageImage.setAttribute('class', 'homepageImage');
mainHomepageContainer.setAttribute('class', 'mainHomepageContainer');


homePageTitle.textContent = 'WELCOME TO THE ZANKYS PIZZARIA'
homePageSubtitle1.textContent = 'Experience Culinary Excellence'
homePagePara1.textContent = 'Step into The Golden Spoon and embark on a culinary journey designed to delight your senses. Nestled in the heart of [City/Neighborhood], our restaurant offers a unique blend of [Cuisine Type, e.g., contemporary American, authentic Italian, vibrant Asian fusion] dishes crafted with passion and precision.'
homePageSubtitle2.textContent = 'Our Philosophy'
homePagePara2.textContent = 'At The Golden Spoon, we believe that exceptional food begins with exceptional ingredients. We meticulously source the freshest, highest-quality produce, meats, and seafood from local farms and trusted suppliers. Our talented team of chefs, led by the renowned Chef [Chefs Name, e.g., Isabella Rossi], transforms these ingredients into culinary masterpieces that are both innovative and comforting.'
homePageSubtitle3.textContent = 'A Taste for Every Palate'
homePagePara3.textContent = 'Whether you\'re craving a [Specific Dish Example 1, e.g., perfectly seared steak], a [Specific Dish Example 2, e.g., delicate handmade pasta], or a [Specific Dish Example 3, e.g., vibrant vegetarian curry], our diverse menu offers something for everyone. Complement your meal with an exquisite selection from our [Wine/Cocktail/Beverage Type, e.g., extensive wine list, handcrafted cocktails, artisanal teas].'
homePageSubtitle4.textContent = 'Ambiance & Events'
homePagePara4.textContent = 'Beyond the delicious food, The Golden Spoon offers an inviting and elegant atmosphere perfect for any occasion. From intimate dinners and family gatherings to corporate events and celebrations, our [Describe Ambiance, e.g., sophisticated dining room, cozy private booths, lively outdoor patio] provides the ideal setting. Check our "Events" page for upcoming [Type of Events, e.g., live music nights, wine tasting dinners, seasonal specials].'



homePageImage.src = restaurantLogo;




contentArea.appendChild(homePageImage); 
contentArea.appendChild(mainHomepageContainer); 

mainHomepageContainer.appendChild(homePageTitle); 
mainHomepageContainer.appendChild(homePageSubtitle1); 
mainHomepageContainer.appendChild(homePagePara1); 
mainHomepageContainer.appendChild(homePageSubtitle2); 
mainHomepageContainer.appendChild(homePagePara2); 
mainHomepageContainer.appendChild(homePageSubtitle3); 
mainHomepageContainer.appendChild(homePagePara3); 
mainHomepageContainer.appendChild(homePageSubtitle4); 
mainHomepageContainer.appendChild(homePagePara4); 
}