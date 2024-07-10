//  This creates an element
function createElement(element) {
    return document.createElement(element);
 }
 
 // This adds text into the element
 function addText(element, text) {
     return element.innerText = text;
 }
 
 function appendChild(child, parent) {
     return parent.appendChild(child);
 }
 
 function select(selector) {
     return document.querySelector(selector);
 }
 
 function listener(element, event, callback) {
     return element.addEventListener;
 }
 
 function addAttribute(element, attribute, content) {
     return element.setAttribute(attribute,content);
 }
 
 const shoppingList = ['Bread', 'Butter'];
 
 const ol = select('ol');
 
 listener(document, 'DOMContentLoaded', displayItems);
 
 function displayItems() {
     shoppingList.forEach(createAListItem);
 }
 
 function createAListItem(item) {
     const li = createAListItem('li');
     addText(li, item);
     appendChild(li, ol);
 }