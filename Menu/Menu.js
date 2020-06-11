/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.*/
  const menuButton = document.querySelector('.menu-button');
  const header = document.querySelector('.header')

   //Function Start
 function menuCreator (menuData) {

  //Menu top layer
  const menu = document.createElement('div')
  menu.classList.add('menu');
  header.appendChild(menu);

  /*

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>*/
  
   //Top ul
   const menuList = document.createElement('ul');
   menu.appendChild(menuList);

   //List items
  menuItems.forEach(menuObj => {
    let listItem = document.createElement('li');
    listItem.textContent = menuObj;
    menuList.appendChild(listItem);
    })



  /*


  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class). */
  
  menuButton.addEventListener('click', (event) => {
    menu.classList.toggle('menu--open');
    console.log("Menu is clicked!");
  })
  /*

  Step 5: return your div with a 'menu' class.
  */
 return menuCreator;
  /*

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
menuCreator(menuItems);
