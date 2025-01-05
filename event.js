let btn1=document.querySelector("#btn1");

btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log("btn1 was clicked ");
    let a=25;
    a++;
    console.log (a);
};


btn1.addEventListener("click",()=>{
    console.log("but 1wsa clicked");
});




let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("this is a div box");
};

//practice button

let mode=document.querySelector("#tog");
let currmode="light";
let body=document.querySelector("body");

mode.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        //document.querySelector("body").style.backgroundColor="black";
       body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode="light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});