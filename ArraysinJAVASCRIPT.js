// practice set on ARRAYS :-

// Q1 :- create an array of numbers and take input from user to add numbers to this array ?
// Q2 :- keeping adding numbers to the array in Q1 until 0 is added to the array ?
// Q3 :- filter the numbers divisible by 10 in an given array ?
// Q4 :- create an array of square of a given number ?
//  Q5 :- use reduce to calculate factorial of a given number from an array of first 'n' natural numbers
//            ('n' being the number whose factorial needs to be calculated) ?


//  Q1 :- 
let arr=[1,2,3,4,5]
let a=prompt("enter the array number to add") 
arr.push(a)
console.log(arr);

// Q2 :-
let arr1=[1,2,3,4,5]
let a1;
while(a!=0){
    a1=prompt("enter the number to add in to an array");
    arr1.push(a1)
    console.log(arr1)
}

// Q3 :- 
let arr2=[1,3,10,5,20,15,40,81,100]
let a2=arr2.filter((a)=>{
    return a%10 == 0;
})
console.log(a2)

// Q4 :- 
let arr3=[1,2,3,4,5,6]
let a3=arr3.map((value)=>{
    return value * value;
})
console.log(a3)

//  Q5 :- 
let a5=[1,2,3,4,5];
 let b=a5.reduce((a1,b1)=>{
    return a1 * b1;
})
console.log(b)
