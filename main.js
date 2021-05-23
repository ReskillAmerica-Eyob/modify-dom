'use strict';

let changeTitle = document.getElementById('main-heading').textContent = 'New DOM Layout';

let changeBgrColor = document.getElementsByTagName('header')[0].className = 'bg-success'

let changeParaOne = document.getElementsByTagName('p')[0].innerHTML = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

let changeParaTwo = document.getElementsByTagName('p')[1].innerHTML =  'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

const clickMe = () => {
   document.getElementsByTagName('p')[2].innerHTML = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'

}

  const changeColor = () => {
  let classArray = ['bg-danger','bg-primary','bg-warning','bg-success','bg-dark' ]
  let sameClasses = document.getElementsByClassName('card-body')
  for(let i = 0; i <= sameClasses.length; i++){
    console.log(sameClasses.className)
    sameClasses[i].className = classArray[0];
    sameClasses[i].className = classArray[1];
    sameClasses[i].className = classArray[2];
    sameClasses[i].className = classArray[3];
    sameClasses[i].className = classArray[4];
  }
}
changeColor();