/* Getting elements methods

Modern :
1. document.querySelector('Selector'): grabs the very first element 
on the page that matches your CSS selector.

2. document.querySelectorAll('selector'): grabs all the element on the page
that matches your css selector

OLder methods:
1. document.getElementById('id'): This is very fast and straightforward.
- It selects the single element that has a specific ID. 

2. document.getElementByTagname('tagname'): Gets a live collection of elements with a given tag name(eg all <h1>)

3. document.getElementsByClassName('classname'): Gets a live collection of elements

*/

/* Live collection:
- if you add or remove an element from the DOM, the collection updates automatically.
*/

/* Changing attributes:

- Attributes are extra info in an HTML tag.

1. element.setAttribute('attributeName','value')

2. element.classList: best way to manage classes.

- .add('newClass'): Naya class thapcha
- .remove('oldClass'): class hataucha.
- .toggle('active'): If the class is there, it removes it. If not, it adds it.

 */

/* changing content( textContent vs innerHTML):
1. element.textContent: use when you only want to change the text.
eg: const titles = document.querySelectorAll('h1');
    titles[3].textContent = 'Fourth Title Here!';

2. element.innerHTML: when you want to insert acutual HTML code.
*/

/* Changing Styles(CSS from Javascript):

1. element.style.cssProperty = 'value'

rule: CSS Properties with a hyphen (-), like background-color becomes camelCase in JS

- background-color -> backgroundColor

tip: For applying lots of styles, it's better to create a class in your CSS file(eg: .highlight)

*/
