//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

function calculateNetSalary(basicSalary){

    // culculate gross salary 
    let grossSalary = basicSalary + benefits

    // culculate benefits
    let benefits = ""
    
    // culculate NSSF Using the old rates
    let nssfDeduction = (5/100 * grossSalary*2)

    // culculate PAYE
    if (basicSalary < 24000){

     payAsYouEarn = (basicSalary * 10/100)
    }
    else if (basicSalary > 24000 && basicSalary < 32333){

      payAsYouEarn = (basicSalary* 25/100)
    }
    else {
      payAsYouEarn = (basicSalary * 30/100)
    }

    //culculate NHIF deductions 
    let nhifDeductions = 0
    if (basicSalary < 5999){
        
     nhifDeductions = 150

    }
    else if ( basicSalary > 6000 && basicSalary < 7999){

      nhifDeductions = 300

    }
    else if(basicSalary > 8000 && basicSalary < 11999){

       nhifDeductions = 400   

    }
    else if( basicSalary > 12000 && basicSalary < 14999 ){

         nhifDeductions = 500
    }

    else if (basicSalary > 15000 && basicSalary < 19999) {

           nhifDeductions = 600
    }
    else if (basicSalary > 20000 && basicSalary < 24999){
      nhifDeductions = 750
    }
    else if (basicSalary > 25000 && basicSalary < 29999){

        nhifDeductions = 850
    }
    else if (basicSalary > 30000 && basicSalary < 34999){

         nhifDeductions = 900
    }
    else if (basicSalary > 35000 && basicSalary < 39999){
         nhifDeductions = 950
    }
    else if (basicSalary > 40000 && basicSalary < 44999){
       nhifDeductions = 1000
    }
    else if (basicSalary > 45000  && basicSalary < 49999){
       nhifDeductions =  1100
    }
    else if (basicSalary > 50000 && basicSalary < 59999){
       nhifDeductions = 1200
    }
    else if (basicSalary > 60000 && basicSalary < 69999){
        nhifDeductions = 1300
    }
    else if (basicSalary > 70000 && basicSalary < 79999){
         nhifDeductions = 1400
    }
    else if (basicSalary > 80000 && basicSalary < 89999){
         nhifDeductions = 1300
    }
    else if (basicSalary > 90000 && basicSalary < 99999){
         nhifDeductions = 1300
    }
    else {
         nhifDeductions = 1700
    }

    //



}