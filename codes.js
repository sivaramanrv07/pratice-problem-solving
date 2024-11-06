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
    
  
    /* 9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:
  
    If the number is divisible by 3, return "Divisible by 3".
    If the number is divisible by 5, return "Divisible by 5".
    If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
    If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5". */
  
  
    function classifyNumber(num){
      if (num%3==0){
        return "divisible by 3"
      }
      else if(num%3==0){
        return "divisible by 5"
      }
      else if (num%3==0 && num%5==0){
        return "divisible by 3 and 5"
      }
      else {
        return "not divisible by 3 and 5"
      }
        
    }
    classifyNumber(15)