//1.Average of Scores
//Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
  
function averagevalue(n){
      let sum=0;
      for (let i=0; i<n.length; i++){
        sum =sum+n[i]
      }
      return sum/n.length

}
let n=[20,30,40,50,60]
console.log(averagevalue(n))


//2.Finding Maximum Score
//You have an array of test scores for 7 students. Write a program to find and print the highest score 
//using the Math.max() function along with the spread operator.
let score =[55,74,65,70,60,78,91];
let highest=score[0];
for(let i=1; i<score.length; i++){
  if(score[i]>highest){
    highest=score[i]
  }
  
}
console.log(highest)

//3.Number System Conversion
//Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent 
//using the toString(2) method and print the binary values.

let decimal=[12,14,16]
for(let i=0; i<decimal.length; i++){
   console.log(decimal[i].toString(2));
}


/*4. Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). 
Perform an AND operation on corresponding elements from both arrays and store the result in a new array.
Print the resulting array. */


let value1=[true, false, true];
let value2=[false, true, true];
let temp=[];
for(let i=0; i<value1.length;i++){
  temp.push(value1[i]&&value2[i]);
}
console.log(temp)

/* 
5.Percentage Increase in Prices
Create an array of old prices for 4 items and another array with the new prices. 
Write a program to calculate and print the percentage increase for each item. */

let oldPrice = [100, 250, 500, 700];
let newPrice = [120, 260, 550, 800];
for(let i = 0; i < oldPrice.length; i++){
    let percentageIncrease = ((newPrice[i] - oldPrice[i]) / oldPrice[i]) * 100;
    console.log(`Item ${i + 1}: ${percentageIncrease.toFixed(2)} % increase`);
}

/* 
 6.Set Theory (Union of Two Sets)
Write a program that takes two arrays of numbers representing two sets. 
Create a new array that represents the union of both sets (without duplicates) and print the result. */

let set1=[30,40,15,35];
let set2=[5,15,70,20];
let unionSet=[...new Set([...set1, ...set2])];
console.log(unionSet);


/* 
 7.Finding the Mode (Most Frequent Element)
Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. 
If there are multiple modes, print any one */

function findMode(arr){
  let maxCount = 0;
  let mode;
  for(let i = 0; i < arr.length; i++){
      let count = 0;
      for(let j = 0; j < arr.length; j++){
          if(arr[i] === arr[j]){
              count++;
          }
      }
      if(count > maxCount) {
          maxCount=count;
          mode = arr[i];
      }
  }
  return mode;
}
console.log(findMode([4, 5, 6, 7, 4, 5, 6, 6, 5, 4, 6]));

/*  8.Modulus Operation for Time Calculation
Create an array of times (in minutes) that different tasks take to complete. 
Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators,
 and save the result in the same array. Print the array. */


 function time(taskTime){
  for(let i = 0; i < taskTime.length; i++){
      let hours = Math.floor(taskTime[i] / 60);
      let minutes = taskTime[i] % 60;
      taskTime[i] = { hours: hours, minutes: minutes };
  }
  return taskTime;
}
console.log(time([100, 300, 220, 340]));


/*  9.Simple Interest Calculation
Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. 
Find the simple interest for each array object and store it in a new array. Print this array. */

let Simple_Interest = [
  { principal : 10000, rateOfInterest : 5, noOfYears: 4},
  { principal : 12000, rateOfInterest : 4, noOfYears: 3},
  { principal : 14000, rateOfInterest : 5, noOfYears: 4},
  { principal : 16000, rateOfInterest : 4, noOfYears: 3},
  { principal : 18000, rateOfInterest : 5, noOfYears: 4},
  { principal : 20000, rateOfInterest : 4, noOfYears: 3},
  { principal : 22000, rateOfInterest : 5, noOfYears: 4},
  { principal : 24000, rateOfInterest : 4, noOfYears: 3},
  { principal : 26000, rateOfInterest : 5, noOfYears: 4},
  { principal : 28000, rateOfInterest : 4, noOfYears: 3},
  ];
  let empty = [];
  for(let i = 0; i < Simple_Interest.length; i++){
       empty.push(Simple_Interest[i].principal * Simple_Interest[i].rateOfInterest * Simple_Interest[i].noOfYears / 100);
  }
  console.log(empty);

 /* 10. Calculating Total Marks of Students 
You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. 
Write a program to calculate the total marks for each student and store them in a new array.
 Print the new array. */


 students = [
  { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
  { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
  { subject1Marks: 70, subject2Marks: 90, subject3Marks: 90 },
  { subject1Marks: 90, subject2Marks: 80, subject3Marks: 55 },
  { subject1Marks: 80, subject2Marks: 100, subject3Marks: 75 },
  { subject1Marks: 95, subject2Marks: 70, subject3Marks: 60 },
  { subject1Marks: 30, subject2Marks: 85, subject3Marks: 40 },
  { subject1Marks: 100, subject2Marks: 40, subject3Marks: 85 },
  { subject1Marks: 80, subject2Marks: 75, subject3Marks: 80 },
  { subject1Marks: 60, subject2Marks: 30, subject3Marks: 45 }
  ];
  let newArr = [];
  for(let i = 0; i < students.length; i++){
      newArr.push(students[i].subject1Marks + students[i].subject2Marks + students[i].subject3Marks);
  }
  console.log(newArr);


  /*  11.Calculating Total Monthly Expenses
You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities.
 Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
 */

 expenses = [
  { rent: 1000, groceries: 500, utilities: 200 },
  { rent: 800, groceries: 400, utilities: 150 },
  { rent: 2000, groceries: 600, utilities: 300 },
  { rent: 1500, groceries: 300, utilities: 350 },
  { rent: 1200, groceries: 550, utilities: 250 },
  { rent: 900, groceries: 480, utilities: 152 },
  { rent: 1300, groceries: 590, utilities: 280 },
  { rent: 180, groceries: 440, utilities: 190 },
  { rent: 1100, groceries: 290, utilities: 220 },
  { rent: 950, groceries: 470, utilities: 190 },
  ];
  let newArrr = [];
  for(let i = 0; i < expenses.length; i++){
      newArrr.push(expenses[i].rent + expenses[i].groceries + expenses[i].utilities);
  }
  console.log(newArrr);

