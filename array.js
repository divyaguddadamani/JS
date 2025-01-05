//arrays in java
let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);

let heroes=["ironman","thor","hulk","spiderman","shaktiman","antman"];
console.log(heroes);
console.log(heroes[2]);

//looping over array (for)
for(let ind=0;ind<heroes.length;ind++)
{
    console.log(heroes[ind]);
}

//for of loop
for(let hero of heroes){
    console.log(hero);
}

let cities=["bangalore","belagavi","mumbai","delhi","mysore"];
for(let city of cities)
{
    console.log(city);
}

//practice question 1

let studentMarks=[85,97,44,37,76,60];
let sum=0;

for (let val of studentMarks)
{
    sum=sum+val;
}
console.log(sum);
let avg=sum/studentMarks.length;
console.log(`avg marks of class =${avg}`);

//practice problem 2

let item=[250,645,300,900,50];
let index=0;
for(let price  of item)
{
    console.log(price);
    console.log(`value at index ${index}=${price}`);
    let offer=price/10;
    item[index]=item[index]-offer;
    console.log(`value after offer=${item[index]}`);
    index++;
}
//another way 
for (let j=0; j<item.length;j++)
{
    let offer1=item[j]/10;
    item[j]-=offer1;

}
console.log(item);

//push mehod

let food=["potato","apple","tomato","chilly","cake","mango"];
console.log(food);
food.push("chips","panner","juice");
console.log(food);

//pop method
 let deletedFood=food.pop();
console.log(food);
console.log(deletedFood);

//toString method

console.log(food.toString());

//concat array

let hero=["thor","spiderman","ironman"];
let more=["superman","batman","punitha"];
let heros=hero.concat(more);
console.log(heros);

//slice
console.log(heros.slice(1,5));

//splice
let arr=[1,2,3,4,5,6,7];
console.log(arr);
let arr1=arr.splice(2,2,101,102);
console.log(arr1);
console.log(arr);
//add using splice
let arr2=arr.splice(2,0,103);
console.log(arr2);
console.log(arr);
//delete using splice
let arr3=arr.splice(3,1);
console.log(arr3);
console.log(arr);
//replace using splice
let arr4=arr.splice(3,1,105)
console.log(arr4);
console.log(arr);


//practice promblem on array methods

let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift();
companies.splice(1,1,"ola");
companies.push("amazon");