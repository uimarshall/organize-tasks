//new item constructor
let  todoItem = (project,title,date,priority)=>{
    this.project=project;
    this.title=title;
    this.date =date;
    this.priority=priority;
    list.push(this)
    
}
export default Item


let doc;
doc = document;
doc = document.head;
doc = document.body;
doc = document.doctype;
doc = document.domain;
doc = document.documentURI;
doc = document.URL;
// doc = document.contentType;
// doc = document.characterSet;
// doc = document.links;
// doc = document.links[0].classList;
// doc = document.links[0].className;
// doc = document.images;

const para = document.createElement('p');
para.textContent = `My url is ${doc}`;

document.body.appendChild(para);