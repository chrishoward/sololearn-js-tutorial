/******** DOM & Events ********/

/******** Selecting elements in the DOM ********/
const div1 = document.getElementById("div1")
const class1 = document.getElementsByClassName("class1");

const div1Children = div1.childNodes;
const div1FirstChild = div1.firstChild;
const div1LastChild = div1.lastChild;
const div1HasChildNodes = div1.hasChildNodes();
const div1NextSibling = div1.nextSibling;
const div1PreviousSibling = div1.previousSibling;
const div1ParentNode = div1.parentNode;

/******** Changing elements attributes in the DOM ********/
const script1 = document.getElementsByTagName("script");
// script1[0].src = "practice1.js"

const link1 = document.getElementById("link1");
// link1.href = "www.gmail.com";

/******** Changing element styles in the DOM ********/
const p = document.getElementsByTagName("p");
const p1 = p[0];
p1.style.color = "red";
