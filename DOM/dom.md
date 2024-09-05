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

# Use of event:

```html
  <body>
    <div id="parent"> 
      <button id="btn-1">1st Button</button> 
      <button id="btn-2">2nd Button</button> 
      <button id="btn-3">3rd Button</button> 
      <button id="btn-4">4th Button</button> 
      <button id="btn-5">5th Button</button> 
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function(){
          
          const parent_div = document.getElementById('parent');
          
          // Method-1
          const button_list = parent_div.querySelectorAll('button');
          button_list.forEach((button) => {
            button.addEventListener('click', function(){
              console.log(button);
            })
          })

          // Method-2: Better
          parent_div.addEventListener('click', function(e){
            console.log(e.target);
          })
          
        })
    </script>
  </body>
```

# DOMContentLoaded event
* Trigger - HTML document is fully loaded
* Action - Runs the code, functionality defined inside it (since it is triggered after the document if fully loaded => it helps to run the code after full HTML document load).

# Fragment
* Use .createDocumentFragment property to group multiple updates before inserting them into the document.

# Event propagation
* By default an event is propagated from bottom to up
* If a parent and child both have an event listener attached to it. Triggering event listener of parent will only act on the parent, but child's event listener will trigger first child and then parent as well (bottom -> up).
* This can lead to issues if parent triggering is not intended. To avoid this use `event.stopPropagation()`

# innerText vs innerHTML vs textContent ?

> innerHTML
* Returns HTML markup and text content of element.
* Can pose security risk as it can read and run any script passed to it. For example, if user passes any script inside input field and innerHTML is used in the backend for any manipulation purpose for that element then browser will render that script as well.
> innerText
* Returns (only) text content of element that is rendered on screen
> textContent
* Returns (only) text content of the element present in the markup
> innerText vs textContent
* innerText returns text that is rendered on the screen whereas textContent returns text that is present in the markup, that is, innerText will not return the text that is hidden using CSS style but textContent will.
* innerText accounts for line-break and formatting but textContent ignores it, that is, in case of paragraph, innerText will return the paragraph in a formatted way (considering <br> and whitespaces) but textContent will return the content in same line.
# outerHTML
* Returns same as innerHTML + parent tag on which the functionality is applied.
