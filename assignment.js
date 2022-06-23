// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
  return document.createElement('div')  
}



// Define a function named createDivWithClass that takes one argument.
function createDivWithClass(className) {
//   className (string)
const div = document.createElement('div');
div.className = className;
return div
}
// Return a <div> element with the given className.




// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise
function updateTodoList(todoList) {
  for (var li of todoList.children){
    if (li.textContent.startsWith("COMPLETED")){
    li.remove();
    }
    //get the item text
    //determine of item text begins with "COMPLETED"
    //remove if so
    if (li.textContent.startsWith("URGENT")) {
    li.classList.add('important')
   
}
  }
}



// Define a function named createList that takes one argument.
//   createList (object)
function createList(obj) {
  const ul1 =  document.createElement('ul');

  for (key in obj) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = obj[key];
    a.innerText = key;
    li.appendChild(a);
    ul1.appendChild(li);
  }
  return ul1 
}
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>




// Write a function named extractQuote that takes in one argument.


//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.

function extractQuote(article) {
const p = article.querySelector('p');
const pText = p.innerText
console.log(pText.innerText)
const startIndex = pText.indexOf('"');
const endIndex = pText.lastIndexOf('"');
const quoteText = pText.slice(startIndex, endIndex + 1);

if(quoteText) {
  const blockQuote = document.createElement('blockQuote')
  blockQuote.innerText = quoteText;
  article.replaceChild(blockQuote, p)
}
}

// var article = document.createElement('article');
// var newP = document.createElement('p');
// //append paragraph to article
// article.append(newP);
// //loop
// console.log(newP.innerHTML.startsWith('"'));
// //if found double quotes start and end
// if (newP.innerText.startsWith('"') && newP.innerText.endsWith('"')){
// //create blockQuote
// var blockQuote = document.createElement('blockquote');
// blockQuote.innertext = newP.innerText.startsWith('"'); newP.innerText.endsWith('"')
// console.log(blockQuote)
// article.appendChild(blockQuote)
// console.log(article)






// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// // TIP: Assume that data array has at least three elements.
// // TIP: Assume that the elements of the data array are equal in length.
// function createTable(data) {
//   const table = document.createElement('table');
//   //create table element
//   const tHead = document.createElement('thead');
//   //create thead
//   const tBody = document.createElement('tbody');
//   //create tbody
//   const tFoot = document.createElement('tfoot');
//   //create tfoot
//   //append all to table
//   table.append(tHead);
//   table.append(tBody);
//   table.append(tFoot);
//   for (var i = 0; i < data.length; i++) {
//     if (i === 0) {
//       //insert to header
//       var tr = document.createElement('tr')
//       tHead.append(tr)
//       for (var char of data[i]) {
//         var th = document.createElement('th')
//         th.innerText = char;
//         tr.append(th)
//       }
//       console.log(data[i])
//     } else if (i === data.length -1) {
//       //insert into foot
//       var tr = document.createElement('tr')
//       tHead.append(tr)
//       data[i].forEach(char => {
//         var th = document.createElement('td')
//         th.innerText = char;
//         tr.append(th)
//       })
//     } else {
//       var tr = document.createElement('tr')
//       tHead.append(tr)
//       data[i].forEach(char => {
//         var th = document.createElement('td')
//         th.innerText = char;
//         tr.append(th)
//       })
//       //insert into body

//     }
//   }
//   return table
// }