# DOM Manipulation
```javascript
console.log(window); -> document
console.log(document);
console.dir(document);
```
* setAttribute overrides the existing classes (if class is set), make sure to input prev class names as well.

> Difference between textContent and innerText and innerHTML- 
textContent displays all the text that is visible as well as hidden in the document/webpage (through style of span set as display:none) whereas innerText displays only the text visible in the document
innerHTML all the content inside the tag, including visible + hidden texts + all the innert tags along with attributes


## Different properties -
* parent to all children - Selector.children;
* parent to first child - Selector.firstElementChild;
* parent to last child - Selector.lastElementChild;
* child to parent - Selector.parentElement;
* child1 to child2 - Selector.nextElementSibling;
* Selector.replaceWith;
* Selector.outerHTML;
* Selector.remove;
* Selector.childNodes ?
### Edit and remove elements in DOM (video): optimization in DOM
### CSS selectors ("li:nth-child(2)")
* if a parent with class 'harshit' has input tag or button tag the to select it - 
```javascript
document.querySelector('.harshit button')
document.querySelector('.harshit input')
```
