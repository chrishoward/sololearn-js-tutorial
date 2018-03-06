/******** DOM & Events ********/

/******** Selecting elements in the DOM ********/
const div1 = document.getElementById("div1")
const class1Array = document.getElementsByClassName("class1");
const class1 = class1Array[0];

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

/******** Creating elements ********/
p3 = p1.cloneNode();
document.createElement("p");
p3text = document.createTextNode("Text node text here");

/******** Appendings elements in the DOM ********/
p3.appendChild(p3text);
div1.appendChild(p3);
// class1.insertBefore(p3, p[0]);

/******** Removing elements in the DOM ********/
// div1.removeChild(p3);
p3.parentNode.removeChild(p3);

/******** Replacing elements in the DOM ********/
// class1.replaceChild(p3, p[0]);
p[0].parentNode.replaceChild(p3, p[0]);

/******** Handling events ********/
btn = document.getElementById("button");
// btn.onclick = function() {
// alert("Hello");
// }

window.onload = function () {
    alert("loaded");
}

/******** Event listeners ********/
btn.addEventListener("click", eventFunction)
btn.addEventListener("mouseover", eventFunction)
function eventFunction() {
    alert("Howdy");
}

btn.removeEventListener("mouseover", eventFunction)



