//function in js
function myfunction(){
    console.log("welcome to js world");
    console.log("i am divya ,from gokak");
}
myfunction();

function para(msg){
    console.log(msg);
}
console.log("i love js");

//adding two no 
function sum(x,y){
    console.log(x+y);
}
//arrow fun for sum

const arrowSum=(a,b)=>{
    console.log(a+b);
};

//multiplication 
function mul(x,y){
    console.log(x*y);
}
//arrow fun for mul
const arrowMul=(x,y)=>{
    console.log(x*y);
}

//practice problem 1(return no of vowels in a string)

function countVowels(str){
    let count=0;
    for (const char of str)
    {
        console.log(char);
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;

        }

    }
console.log(count);
}
//arrow fun for countVowels

const countVow=(str)=>{
    let count=0;
    for (const char of str)
    {
        console.log(char);
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;

        }
    }
    console.log(count);
};


let arr=[1,2,3,4,5,6,7];
arr.forEach(function printvl(val){
    console.log(val);

})
//arrow fun for foreach
arr.forEach((val)=>{console.log(val)});


//practice problem  to print the square of each value using the foreach loop

let number=[1,2,3,4,5,6];
number.forEach((num)=>
{
    console.log(num*num);
});

//map func
console.log("=============")
number.map((val)=>{
    console.log(val);

});

//filter func
let arr1=[1,2,3,4,5,6,7,8,9];
 let even=arr1.filter((val)=>{
    return val%2===0;
});
console.log(even);

//reduce fun
const reducefun=arr1.reduce((res,curr)=>{
    return res+curr;
});

console.log(reducefun);

const output=arr1.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});

console.log(output);


//practice problem 1 (filter out the student marks that scroed 90+)


let marks=[97,64,32,49,99,96,86];
let topper=marks.filter((val)=>{
    return val>90;

});
console.log(topper);


//practice problem 2(sum of all numbers and product of all numbers)using reduce method

let n=prompt("enter a number");
let array=[];
for (let i=1; i<=n;i++)
{
    array[i-1]=i;
}
//sum of n numbers
console.log(array);
let total=array.reduce((res, curr)=>{
    return res+curr;
});
console.log(total);

//mul of n numbers
let multi=array.reduce((res,curr)=>
{
    return res*curr;
});
console.log(multi);




