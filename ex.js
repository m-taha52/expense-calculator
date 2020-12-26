
var incomes = [];
var expense = [];
var incomesdes = [];
var expensedes = [];
function checkBalance() {

 

  
  
    var forms1 = document.getElementById("form");


    incomesdes[0] = document.getElementById("income01").value;
    incomesdes[1] = document.getElementById("income02").value;
    incomesdes[2] = document.getElementById("income03").value;
    incomesdes[3] = document.getElementById("income04").value;
    incomesdes[4] = document.getElementById("income05").value;
    incomesdes[5] = document.getElementById("income06").value;



    expensedes[0] = document.getElementById("expense01").value;
    expensedes[1] = document.getElementById("expense02").value;
    expensedes[2] = document.getElementById("expense03").value;
    expensedes[3] = document.getElementById("expense04").value;
    expensedes[4] = document.getElementById("expense05").value;
    expensedes[5] = document.getElementById("expense06").value;



    

    var sumincomes = 0;
    var sumexpenses = 0;

    

    var income1 = document.getElementById("income1").value;
    var income01 = parseInt(income1);
    var income2 = document.getElementById("income2").value;
    var income02 = parseInt(income2);
    var income3 = document.getElementById("income3").value;
    var income03 = parseInt(income3);
    var income4 = document.getElementById("income4").value;
    var income04 = parseInt(income4);
    var income5 = document.getElementById("income5").value;
    var income05 = parseInt(income5);
    var income6 = document.getElementById("income6").value;
    var income06 = parseInt(income6);

    sumincomes = income01 + income02 + income03 + income04 + income05 + income06;

    var expense1 = document.getElementById("expense1").value;
    var expense01 = parseInt(expense1);
    var expense2 = document.getElementById("expense2").value;
    var expense02 = parseInt(expense2);
    var expense3 = document.getElementById("expense3").value;
    var expense03 = parseInt(expense3);
    var expense4 = document.getElementById("expense4").value;
    var expense04 = parseInt(expense4);
    var expense5 = document.getElementById("expense5").value;
    var expense05 = parseInt(expense5);
    var expense6 = document.getElementById("expense6").value;
    var expense06 = parseInt(expense6);
    sumexpenses = expense01 + expense02 + expense03 + expense04 + expense05 + expense06;

       
    balance = sumincomes - sumexpenses;

    incomes[0] = income01; 
    incomes[1] = income02; 
    incomes[2] = income03; 
    incomes[3] = income04; 
    incomes[4] = income05; 
    incomes[5] = income06; 



    expense[0] = expense01; 
    expense[1] = expense02; 
    expense[2] = expense03; 
    expense[3] = expense04; 
    expense[4] = expense05; 
    expense[5] = expense06; 

           document.getElementById("val").innerHTML = "$"+ sumincomes;
           document.getElementById("val1").innerHTML ="$" + sumexpenses;
           document.getElementById("val2").innerHTML ="$" + balance;

           for (var i=0; i<6; i++) {
            document.getElementById("table").innerHTML += ("<tr><td class=row>" +incomesdes[i] + " is:</td>" +  
            "<td>" + " " + incomes[i] + "</td></tr> <br>");
          
          }
          
          for (var i=0; i < 6; i++) {
            document.getElementById("table1").innerHTML += ("<tr><td>" +expensedes[i] + " is:</td>" +  
            "<td>" + " " + expense[i] + "</td></tr> <br>");
          
          }

}

        
 

























// for (var i = 0; i < forms1.length-1; i++) {
//     if (i % 2 != 0) {
//         figures[i] = forms1.elements[i].value; 
//         console.log(figures.toString()) //undefined  will be even values
//     }
//     if (i % 2 == 0) {
//         des[i] = forms1.elements[i].value;
//         console.log(des.toString()) //undefined will be odd values
//     }
      
// }
// for (var i = figures.length-1; i >= 0; i--) {
//     if (!figures[i]) {
//         figures.splice(i, 1);
//     }
// }
// for (var i = des.length-1; i >= 0; i--) {
//     if (!des[i]) {
//         des.splice(i, 1);
//     }
// }
//  for (var i = 0; i < 6; i++) {
//   sumincomes = sumincomes + parseInt(figures[i])
//      }
     
//     for (var i = 6; i < 12; i++) {
//         sumexpenses = sumexpenses + parseInt(figures[i])     
//            }

         
//     balance = sumincomes - sumexpenses;

//            document.getElementById("val").innerHTML = "$"+ sumincomes;
//            document.getElementById("val1").innerHTML ="$" + sumexpenses;
//            document.getElementById("val2").innerHTML ="$" + balance;




//  }

//  function createtable() {
//     for (var i=0; i<6; i++) {
//      document.getElementById("table").innerHTML += ("<tr><td class=row>" +des[i] + " is:</td>" +  
//      "<td>" + " " + figures[i] + "</td></tr> <br>");
   
//    }
   
//    for (var i=6; i<12; i++) {
//      document.getElementById("table1").innerHTML += ("<tr><td>" +des[i] + " is:</td>" +  
//      "<td>" + " " + figures[i] + "</td></tr> <br>");
   
//    }
//  }

 

