//Array Methods and Objects//
//1. Push Multiple Elements
//Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.
  
let colors =["red","green"];
colors.push("blue");
colors.push("black");
console.log(colors)

//2. Shift Multiple Times
//Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after each removal.

let fruits=["Apple","Banana", "Dates","Grapes","Orange"];
fruits.shift();
fruits.shift();
console.log(fruits)


//3. Unshift with Multiple Arguments
//Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning in a single line and print the array.

let sports=["basketball","cricket"];
    sports.unshift("footbal","volleyball","throwball")
console.log(sports);

//4. Find Non-Existing Element with indexOf()
//Write a program to find the index of "Laptop" in an array of 3 devices. Print the result

let devices=["tap","laptop","mobile"];
 console.log(devices.indexOf("laptop"));

 //5. Split String with Different Delimiter
//Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.
  let string="HTML-CSS-JavaScript";
  let str= string.split('-');
  console.log(str)


 // 6. Reverse Order of Array Using pop()
//Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a new array in reverse order. 
//Print the reversed array.

let numbers=[1,2,3,4];
let empty =[];
for(let i=numbers.length-1;i>=0;i--){
    empty.push(numbers[i]);
}
console.log(empty)


//7. Joining Array Elements Without a Separator
//Create an array of 4 fruits. Use join() without any separator to combine the array elements into a single string and print the result


let fruit =["apple","banana","cherry","dragon"];
let array = fruit.join(" ")
console.log(array)

//8. Object with Simple Properties
//Write a program to create an object car with properties make, model, and year. Print the model of the car.

let car ={
    make:"toyto",
    model: "camery",
    year: 2009
}
console.log( "model:"+car.model)

//9. Array of Objects (Books)
//Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.

let books=[{title:"DonQuixote", author:"MigueldeCervantes"},
           {title:"Dracula", author:"BramStoker"}]

console.log("tittle:"+books[0].title)



/*10. Adding New Property to Objects in an Array  
You have an array of 4 objects, each representing a car with properties brand and model. 
Write a program to add a new property year to each object and assign a value, 
then print the updated array. */

let cars =[  { brand: "Tata", model: "Nano" },
    { brand: "Honda", model: "Civic" },
    {brand:"audi", model:"audi-etron"},
    {brand:"hyundai",model:"sedan"}
]
cars[0].year=2000;
cars[1].year=2001;
cars[2].year=2002;
cars[3].year=2003
console.log(cars)

//11. Summing Object Property Values in an Array  
 //  You have an array of 3 objects, each representing a product with properties name and price.
 //   Write a program to calculate and print the total price of all the products in the array.

  let products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    {name:"tab",price:700}
 ]
let sum=0;
for(let i = 0; i < products.length; i++){
    sum += products[i].price; 
    
}

console.log(sum);
/* 
12. Finding an Object by Property Value in an Array  
You have an array of 5 objects, each representing a student with properties name and grade.
 Write a program to find and print the name of the student whose grade is "A". */


   let students = [
    { name: "Amar", grade: "A" },
    { name: "Akbar", grade: "B" },
    { name: "Anthony", grade: "A" },
    { name:"siva", grade:"B"},
    {name:"sheriff", grade:"A"}

  ]
  let value=[]
  for(let i=0; i<students.length;i++){
    if(students[i].grade=="A"){
        value.push(students[i].name)
        
    }
  }
  console.log(value)


 
  let strings=" "
  for(let i=0; i<=5; i++){
    strings=strings+"*"+" "
    console.log(strings)
  }
  

  
