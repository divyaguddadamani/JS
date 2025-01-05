//if condition
let age=23;
if(age>18)
{
    console.log(" you can vote");
}

if(age<18)
{
    console.log("you cannot vote")
}

// if else condition
let mode="dark";
let color;

if(mode==="light")
{
    color="black"
}
else{
    color="white";
}


console.log(color);

//odd even numbers

let num=11;
if(num%2===0)
{
    console.log("even");
}else{
    console.log("odd");
}

//else if condition

if(age<18)
{
    console.log("junior");
}
else if(age>60){
    console.log("senior");
}
else{
    console.log("middle");
}

//ternary operators

let result=age>18?"adult":"not adult";
console.log(result);


//switch

let name="darshan";
switch(name)
{
    case'divya':
    console.log("from bangalore");
    break;
    case'darshan':
    console.log("from belagavi");
    break;
    case'deepak':
    console.log("from slovakia");
}

//alert and prompt
alert("hi");
let value=prompt("hello!");
console.log(value);

//practice problem1

let number=prompt("enter a number");
if(number%5==0)
{
    console.log("is multiple of 5");
}
else
{
    console.log("is not a multiple of 5");
}

//practice problem2

let marks=prompt("enter your marks");
if(marks<=100 && marks>=90)
{
    console.log("A");
}
else if(marks<=89 && marks>=70)
{
    console.log("B");
}
else if(marks<=69 && marks>=60)
{
    console.log("C");
}
else if (marks<=59 && marks>=50)
{
    console.log("D");
}
else if(marks<=49 && marks>=0)
{
    console.log("F");
}