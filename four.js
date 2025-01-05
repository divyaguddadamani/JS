// for loop
for(let i=1; i<=5;i++){
console.log("hi");
}

//calculate sum of 1 to 10

let sum=0
let n=15
for (let j=0; j<=n;j++)
{
    sum=sum+j;
}
console.log(sum);

//while loop
 let k=1
while(k<=10)
{
    console.log(k);
        k++;
}

//do-while loop

let l=1;
do{
    console.log("hello");
    l++;
}
while(l<=10);

//for-of loop

let size=0;
let str="divya";
for(let val of str){
    console.log(val);
    size++;
}
console.log(size);

//for-in loop

let student={
    name:"darshu",
    age:21,
    isPass:true,
    cgpa:7.6
};

for(let s in student)
{
    console.log(s,":",student[s]);
}

//even numbers from 0 to 100(practice problem 1)

for(let e=0; e<=100; e++)
{
    if(e%2===0)
    {
        console.log(e)
    }
    else{

    }
}

//practice problem 2
let gameNum=25;
let guess=prompt("guess the number");


while(guess!=gameNum){

    guess=prompt("guess again");
}
console.log("right number");



