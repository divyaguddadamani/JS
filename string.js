//strings
 let str="hello world";
 let str2="i am divya";
 console.log(str[0]);

 //template literals

 let sentence=`this is a template literal`;
 console.log(sentence);
 console.log(typeof sentence);

 //access the value from the object

 let obj={
    name:"xyz",
    price:1230
 };
 let output=`the cost of the ${obj.name} is ${obj.price} rupees`;
 console.log(output);
 console.log(obj.name,obj.price);

 //escape characters

 console.log("hi i am divya \n i live in gokak \t belagavi");

 //string methods i js
 
 let value="    hi welcome to js tutorials   ";
 //toupperCase
 console.log(value.toUpperCase());
 //tolowerCase
 console.log(value.toLowerCase());
 //trim
 console.log(value.trim());
//slice
 let str3="0123456789";
 console.log(str3.slice(1,7));
//concat
 let ans=str.concat(str2);
 let ans2=str+str2+str3
 console.log(ans);
 console.log(ans2);
 //replace
 let str4="hello";
 console.log(str4.replace("h","y"));
 //charAt
 let str5="i love js";
 str5[0]="s";//immutable 
 console.log(str5.charAt(3));

 // practice problem using string method
let fullName=prompt("enter your name with no gap");
console.log(fullName);
let userName="@"+fullName+fullName.length;
console.log(userName);






