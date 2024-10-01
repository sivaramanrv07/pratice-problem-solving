/* Loops, Conditionals and Functions
1. Fix the issues in this code

calculateArea();
greetUser();

function calculateArea() {
 const radius = 5;
 let area;
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 console.log(userName);
 var userName = "John";
} */

 //debug the code//

function calculateArea(radius) {
 let area = Math.trunc(Math.PI * radius * radius);
 console.log(area);
}
calculateArea(5)

function greetUser(userName) {
    let name = userName;
 console.log( "name:"+name);

}
greetUser("siva")


/* 2. Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?
let count = 1;
while (count > 0) {
 console.log("Counting down: " + count);
 count = count + 1;
} */

 // Debug in this code //
 let count = 1;
while (count<=100) {
 console.log("Counting down: " + count);
 count = count + 1;
}


/* 3. Why always It's cold outside. is printed irrespective of the temperature value. Fix this!
let temperature = 30;if (temperature = 20) {
 console.log("It's cold outside.");
} else {
 console.log("It's warm outside.");
} */

 // debug in this code//
 let temperature = 30;
 if (temperature<=20) {
    console.log("It's cold outside.");
   } else {
    console.log("It's warm outside.");
   }



/*    4. Fix the issues in the code so that output is printed correctly
checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);function checkNumber(num) {
  if (num > 0);
    console.log("Negative");
  else if (num < 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
} */


// debug in this code//

checkNumber(-5);
checkNumber(0);
checkNumber(10,20);function checkNumber(num) {
  if (num < 0){
    console.log("Negative");
  }
  else if (num > 0) {
    console.log("positive");
  } 
  else {
    console.log("zero");
  }
} 

//5. Write a function sumNumbers that takes a number n as a parameter
// and returns the sum of all numbers from 1 to n using a while loop.

function sumNumbers(n){
    let sum=0;
    let i=1;
    while(i<=n){
        sum=sum+i;
        i++
    }
    return sum;
}
 let value=sumNumbers(5);
console.log(value);

//for loop method//
function sumNumbers(n){
    let sum =0;
    for(let i=1; i<=n; i++){
        sum=sum+i;
    }
    return sum
}
let values=sumNumbers(5);
console.log( "sum:"+values);




//6. Write a function calculateFactorial that takes a number n as a parameter
// and returns the factorial of that number using a while loop.


function calculateFactorial(n){
    let a=1;
    let i=n;
    while(i>1){
       a= a*i
        i--
    }
    return a
}
calculateFactorial(7)
console.log(calculateFactorial(7));



//7. Write a function printEvenNumbers that takes a number n as a parameter
// and prints all even numbers from 1 to n using a while loop.

function printEvenNumbers(n){
  let i =1;
  while(i<=n){
if(i%2==0){
console.log(i)
}
i++
}
  }

printEvenNumbers(20);

//for loop method//
function printEvenNumbers(n){
  for (let i=1; i<=n; i++){
    if(i%2==0){
     console.log(i);
    }
  }
  
}
printEvenNumbers(20)



//8. Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.
/* 
function sumNumbers(n) {
  let sum = 0;
  let i = 0;  while (i < n) {
    sum += i;
    i++;
  }  return sum; */

  //debug the code//

  function sumNumbers(n) {
    let sum = 0;
    let i = 1;  
    while (i<=n) {
      sum =sum+i
      i++;
    } 
   return sum;
  }
  sumNumbers(10);
  console.log(sumNumbers(10));
  

  /* 9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

  If the number is divisible by 3, return "Divisible by 3".
  If the number is divisible by 5, return "Divisible by 5".
  If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
  If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5". */


  function classifyNumber(num){
    if (num%3==0 && num%5==0){
      return "divisible by 3 and 5";
    }
    else if(num%3==0){
      return "divisible by 3";
    }
    else if (num%5==0){
      return "divisible by 5";
    }
    else {
      return "not divisible by 3 and 5";
    }
      
  }
classifyNumber(15)
console.log(classifyNumber(15));


  //10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week.//


  function getDayName(dayNumber) {
    switch (dayNumber) {
      case 1:
        return "Sunday";
        break;
      
      case 2:
        return "Monday";
        break;

      case 3:
        return "Tuesday";
        break;
      
      case 4:
        return "Wednesday";
        break;
        
      case 5:
        return "Thursday";
        break;
      
      case 6:
        return "Friday";
        break;
        
      case 7:
        return "Saturday";
        break;
      
      default:
        return "Invalid day number. Please enter a number from 1 to 7.";
        break;
        
    }
  }
  getDayName(3)
  console.log(getDayName(3))


 // 11. Write a function printMultiplicationTable that takes a number n, range r 
 // and prints the multiplication table for that number in reverse order.

  function printMultiplicationTable(n,r){
    for(let i =r; i>=1; i--){
      let result =(n*r)
    
      console.log(`${n}*${i}=${result}`)
    }
 }
 printMultiplicationTable(5,6) ;


 //12. Write a program where a robot must complete 10 laps around a circuit. 
// Use a while loop to count the laps and display the lap number each time the robot completes one.

function totalLapcount(n){
  let count =0;
  while(count<n){
    count++
  console.log(`lapcount ${count} completed`)
  }

}
totalLapcount(10)
console.log("all laps count completed")

//for loop method

function loops(n){
  let lap =0;
  for(let i=lap; i<n; i++){
   console.log(`lapcount ${i} completed`)
  }
}
loops(10);
console.log('All lapcounts are completed')


13. //A robot moves forward as long as its battery level is above 20%. 
//Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level.
// Once the battery level is below 20%, Display Battery is low.


function battery(n){
  while(n>=20){
    console.log(`remaining battery level ${n} %`)
     n-=5
  }
 
  console.log("battery level low")
}
battery(100)

 //14. A robot can move in 4 directions: North, South, East, and West.
 // Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement

  let x=0;
 let y=0;
 function move(direction){
  switch(direction){
      case "North":
      y++;
     break;
      case "South":
      y--;
      break;
     case "East":
     x++;
     break;
     case "West":
     x++;
    break;
     default:
         console.log("Invalid direction");
 }
 }
  move(3);


//15. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. //
//Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

function altitudecurrently(n){
  for(let i=n; i>0; i-=10){
  console.log( "flight is"+" "+i +"ft")
  } 
  console.log("flight arrived")

}
 let a= altitudecurrently(1000)


 //16. Based on the flight’s destination, direct the airplane to a specific runway. 
 //Use a switch statement to assign the runway depending on the destination entered by the user.

 function assigned(destination){
  let platform =" ";
  switch(destination){
    case "chennai":
     platform ="platform 1";
     break; 

     case "madurai":
     platform ="platform 2";
     break; 

     case "bangalore":
     platform ="platform 3";
     break; 

     case "mumbai":
     platform ="platform 4";
     break; 

     default:
      platform ="no platform";
      break;
  }
 
  console.log(`Assigned for platform no: ${platform}`)
 }
 assigned("chennai");


 //17. Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. 
 //Use a for loop to display the altitude after each interval.

 function climbsaltitude(n){
  for(let i=100; i<=n; i+=100){
    console.log(i+"ft");
  }
  

 }
 climbsaltitude(1000)
 








