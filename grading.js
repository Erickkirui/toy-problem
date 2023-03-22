//Write a function that prompts the user to input student marks. 
//The input should be between 0 and 100. 
//The output should correspond the correct grade, as shown below:

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function dertermineGradeOfStudent(marks){
    // declare outpt message as variable 
    const msg = 'Your grade is'
    // for marks over 100
    if (marks> 100){
       return 'Not valid marks'
    }
    //A > 79
   else if(marks > 79 ){
       return `${msg} (A)`
   }
   //B - 60 to 79
   else if (marks >= 60 && marks  <=79 ){

       return `${msg} (B)`

   }
   //C -  59 to 49
   else if (marks <= 59 && marks >= 49){
       return `${msg} (C) `
   }

   //D - 40 to 49
   else if (marks >= 40 && marks <=49){

       return `${msg} (D)`
   //E - less 40.
   }
   else{
       return `${msg} (E)`
   }
}
dertermineGradeOfStudent()
console.log(dertermineGradeOfStudent(100))