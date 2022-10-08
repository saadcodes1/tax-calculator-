var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





function testResults (form) {
    let TestVar = form.inputbox.value;
    income = TestVar


    

    if ( income >= 600000 && income < 1200000) {
        income = income*0.025
        alert ("Your income is between bracket of 0.6 million and 1.2 million so your tax is: " + "+ "  + income);
      }
    
    else if ( income >= 1200000 && income < 2400000) {
        income = income*0.125 
        alert ("Your income is between bracket of 1.2 million and 2.4 million so your tax is: 15000 flat tax "  + "+ " + income);
      }

    else if ( income >= 2400000 && income < 3600000) {
        income = income*0.2 
        alert ("Your income is between bracket of 2.4 million and 3.6 million so your tax is: 165000 flat tax " + "+ "  + income);
      }
      
    else if ( income >= 3600000 && income < 6000000) {
        income = income*0.25
        alert ("Your income is between bracket of 3.6 million and 6 million so your tax is: 405000 flat tax " + "+ "  + income);
      } 
      
    else if ( income >= 6000000 && income < 12000000) {
        income = income*0.325 
        alert ("Your income is between bracket of 6 million and 12 million so your tax is: 1 million pkr flat tax "  + "+ " + income);
      }

    else if ( income > 12000000 ) {
        income = income*0.35 
        alert ("Your income is between bracket of 12 million and above so your tax is: 2.95 million pkr flat tax " + "+ " + income  );
      }      

     else {
        alert ( " your income is not taxable because it is below 6 lacs")
     } 


   
}






