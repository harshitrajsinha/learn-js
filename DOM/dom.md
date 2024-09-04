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
