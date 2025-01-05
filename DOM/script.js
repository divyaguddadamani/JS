// //getElementById
// let head=document.getElementById("heading");
// console.log(head);

// //getElementsByClassName
// let ans=document.getElementsByClassName("head");
// console.dir(ans);
// console.log(ans);

// //getElementByTagName
// let parahs=document.getElementsByTagName("p");
// console.dir(parahs);

// //querySelector

// let query1=document.querySelector("p");
// console.dir(query1);

// let query2=document.querySelectorAll(".head");
// console.dir(query2);

let h2=document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText);
h2.innerText=h2.innerText+"from apna clg student";


let divs=document.querySelectorAll(".box");
// console.dir(divs[0]);
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
let index=1;
for(div of divs)
{
    div.innerText=`new unique value ${index}`;
    index++;
}