let div=document.querySelector("div");
let id=div.getAttribute("id");
console.log(div.style);

let para=document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

div.style.backgroundColor="green";
div.style.fontSize="26px";
div.innerText="hello";
//div.style.visibility="hidden";


//insert

let newbtn=document.createElement("button");
newbtn.innerText="click me"
console.log(newbtn);

para.after(newbtn);

let newHead=document.createElement("h1");
newHead.innerHTML="<i> hi,i am new!<i>";

document.querySelector("body").prepend(newHead);

//delete

para.remove();

//pratice question1

let newbtn2=document.createElement("button");
newbtn2.innerText="restart";

newbtn2.style.color="white"
newbtn2.style.backgroundColor="red";

document.querySelector("body").after(newbtn2);

//pratice question 2

let h6=document.querySelector("h6");
h6.classList.add("newclass");