//1.Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format,
// find the earliest train to depart.

let train_departures=[10,15,7,20,5]
   let earliest_train=train_departures[0];
   for(let i=1;i<train_departures.length; i++){
    earliest_train=train_departures[i];
   }
   console.log("earliest train to depart:"+ earliest_train);


 

  //2.Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, 
 //  count the total number of available seats.
   
 let seat =[1, 0, 1, 1, 0, 0, 1, 0];
    let count=0;
    for(let i=0; i<seat.length; i++){
        if(seat[i]==0){
            count++;
        }
    }
  
   console.log("number of available seats:"+count);

  // 3.Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, 
  // find the region with the highest number of soldiers.
  

  let  solider=[120, 300, 250, 180, 150];
  let highest= solider[0];
  for(let i=0; i<solider.length; i++){
       if(highest <solider[i]){
        highest =solider[i]
       }
         
    }
    console.log( "highest number of soldiers is:"+highest)


    //4.Given the array populations = [50, 60, 70, 80, 90], 
    //where each element represents the population of an Indian state over the last 5 years,
     //calculate the average population.

     function averagepopulation(people){
        let total=0;
         for( let i=0; i<people.length; i++){
             total=total+people[i];
         }
         return total/people.length;
     }
     let people=[50,60,70,80,90];
     console.log ("average population is:"+(averagepopulation(people))); 

     //reduce method//


     let peoples=[50,60,70,80,90];
     let average =people.reduce(function(previous,current){
        return previous+current/people.length
     
     },0); 
     console.log(average)

     //5.Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, 
     //find the tank with the lowest water level.


  let  waterlevels = [30, 50, 20, 40, 60];
 let lowestWaterLevel = waterlevels[0];
for (let i = 1; i < waterlevels.length; i++) {
    if (waterlevels[i] < lowestWaterLevel) {
        owestWaterLevel = waterlevels[i];
    }
}

console.log("The lowest water level is " + lowestWaterLevel);
  
  //.6.Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents
      //the number of days left until an important festival, find the closest upcoming festival.


      let festival=[30, 15, 45, 10, 25];
      let current=Infinity;
      for (let i=0; i<festival.length;i++){
        if(festival[i]<current){
            current=festival[i]
            
        }  
      }
      console.log("upcoming festival is:"+ current)


    /*  7. Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land,
       check if any two helicopters are scheduled to land at the same time. */

       let landing_times = [12, 15, 12, 18, 20];
        let hasDuplicates = (landing_times);
       if (hasDuplicates) {
           console.log("Two or more helicopters are scheduled to land at the same time.");
       }
       else {
           console.log("No helicopters are scheduled to land at the same time.");
       }
      
    
    //8. Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, 
     //identify which regions have temperatures above 80 degrees.


     let temperatures=[75, 80, 72, 85, 90];
     for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > 80){
            console.log(temperatures[i])
        }
        
    }

/*      9.Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students 
    assigned to different bus routes, 
    calculate the total number of buses required 
    if each bus can hold a maximum of 50 stud */
    


    let students_per_route = [45, 55, 30, 60, 40];
    let bus=0;
    for(let i=0;i<students_per_route.length;i++){
        bus=bus+students_per_route[i];
    }
    console.log((`${Math.round(bus/50)} buses required`));
        


//10.You have an array of daily expenses for a week. 
//Write a function that calculates the total expenses for the week.

function dailyexpense(expense){
    let sum=0;
    for(let i=0; i<expense.length; i++){
        sum =sum+expense[i];
    }
    return sum
    
}
let expense=[49,55,59,63,75,78,79];
console.log( "total expense:"+dailyexpense(expense)); 

// 11.You are given an array of student grades. Write a function that calculates the average grade.

function averageGrade(Grade){
   let sum=0;
   for( let i=0; i<Grade.length; i++){
        sum=sum+Grade[i];
    }
    return sum/Grade.length;
}
let Grade=[20,30,40,50,60];
console.log ("average grade:"+(averageGrade(Grade))); 

//reduce method//

 let grade=[20,30,40,50,60];
 let value=grade.reduce(function(previous,current){
     return previous+current/grade.length

}, 0);
console.log(value) 


//12.You have an array of people ages. Write a function that filters out people who are 18 years old or older.
function totalAges(Age){
    for(let i=0; i<Age.length; i++){
        if(Age[i]>=18){
            console.log(Age[i]);
        }
    }

}
let Age=[18,12,15,30,35];
 totalAges(Age);


 //13.You have an array of integers. Write a function that returns the count of the even numbers in the array.
 function printEvenNumbers(even){
    let count =0;
    for(let i=0;i<even.length; i++){
        if(even[i]%2==0)
            count++;
    }
    return count
 }
 let even=[2,5,7,9,12,14,18,20]
 console.log(printEvenNumbers(even));
    



