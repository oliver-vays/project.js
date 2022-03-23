setStyle("screen1", "height:1500px");
setStyle("divApplab", "overflow:scroll");

function main() {
  var firstName = "Oliver"; // Add your first name
  var lastName = "Vays"; // Add your last name
  write("Name: " + firstName + " " + lastName);  
  write("Unit 5 Project");
  write("Welcome to My Restaurant!");
  
  var myorder={};
  var choice = "";
  
  do {
    choice = prompt("What is your choice\n" + 
    "A - Appetizers\n" + 
    "E - Entrees\n" +
    "D - Desserts\n" + 
    "S - Wing Specials\n" + 
    "P - Place Order\n" + 
    "Q - Quit"
    );
    switch (choice) {
      case "A":
      appetizers(myorder);
      
        break;  
      case "E":
      entrees(myorder);
      
        break;
      case "D":
      desserts(myorder);
      
        break;
      case "S":
      wingspecials(myorder);
      
        break;
      case "P":
      var placeordervar= prompt("Would you like to place your order?")
      placeorder(myorder,placeordervar);
          
      
      
        break;
      case "Q":
        write("Thank you for order!");   
        break;
    }      
  } while (choice != "Q");
}

function appetizers(myorder) {
  // Appetizers Function
  var appetizersmenu={
      "Mozzarella Sticks": 8.99,
      "Fried Pickles": 8.99,
      "Ultimate Nachos": 10.49,
      "Buffalo Mac & Cheese": 12.49,
      "Buffalo Chicken Tots": 12.49
      };
      var appetizerschoice=prompt("Which appetizer would you like?\n"+
      "Mozzarella Sticks: $8.99\n"+
      "Fried Pickles: $8.99\n"+
      "Ultimate Nachos: $10.49\n"+
      "Buffalo Mac & Cheese: $12.49\n"+
      "Buffalo Chicken Tots: $12.49\n");
      myorder[appetizerschoice]=appetizersmenu[appetizerschoice];
      
}

function entrees(myorder,entreeschoice) {
  // Entrees Function
      var entrees={
      "Cheese Curd Bacon Burger": 14.79,
      "Smoked Brisket Burger": 16.79,
      "Nashville Hot Chicken Sandwich": 12.79,
      "Smoked Brisket Sandwich": 14.29,
      "Grilled Chicken Buffalitos": 11.79
      };
      var entreeschoice=prompt("Which entree would you like?\n"+
      "Cheese Curd Bacon Burger: $14.79\n"+
      "Smoked Brisket Burger: $16.79\n"+
      "Nashville Hot Chicken Sandwich: $12.79\n"+
      "Smoked Brisket Sandwich: $14.29\n"+
      "Grilled Chicken Buffalitos: $11.79\n")
      if(entreeschoice in entrees){
        myorder[entreeschoice]=entrees[entreeschoice];
      }
}

function desserts(myorder,dessertschoice) {
  // Desserts Function
    var desserts={
      "Chocolate Fudge Cake": 6.79,
      "New-York Style Cheesecake Slice": 6.79,
      "Vanilla Loaded Ice Cream": 3.29,
      "Chocolate Loaded Ice Cream": 3.29,
      "Strawberry Loaded Ice Cream": 3.29
      };
      var dessertschoice=prompt("Which dessert would you like?\n"+
      "Chocolate Fudge Cake: $6.79\n"+
      "New-York Style Cheesecake Slice: $6.79\n"+
      "Vanilla Loaded Ice Cream: $3.29\n"+
      "Chocolate Loaded Ice Cream: $3.29\n"+
      "Strawberry Loaded Ice Cream: $3.29\n")
      if(dessertschoice in desserts){
        myorder[dessertschoice]=desserts[dessertschoice];
      }
}

function wingspecials(myorder,wingspecialschoice){
  // Wing Specials Function
   var wingspecials={
      "Honey BBQ Traditional Wings": 16.49,
      "Lemon Pepper Traditional Wings": 16.49,
      "Original Buffalo Traditional Wings": 16.49,
      "Teriyaki Traditional Wings": 16.49,
      "Nashville Hot Traditional Wings": 16.49
      };
     var wingspecialschoice=prompt("Which wings special would you like?\n"+
      "Honey BBQ Traditional Wings: $16.49\n"+
      "Lemon Pepper Traditional Wings: $16.49\n"+
      "Original Buffalo Traditional Wings: $16.49\n"+
      "Teriyaki Traditional Wings: $16.49\n"+
      "Nashville Hot Traditional Wings: $16.49\n")
      if(wingspecialschoice in wingspecials){
        myorder[wingspecialschoice]=wingspecials[wingspecialschoice];
      }
}

// Place Order Function
function placeorder(myorder){
  var total=0;
  for (var key in myorder){
    write (key+" "+myorder[key]);
    total=total+myorder[key];
    total=Math.round(100*total)/100
  }
  write ("Subtotal: $"+total);
  var discount= prompt("Do you have a discount code?")
  if (discount="Yes"){
    var discountsubtotal=100*(total*0.9)/100;
    discountsubtotal=Math.round(100*discountsubtotal)/100
    write ("Subtotal after discount: $"+discountsubtotal);
    var tax=discountsubtotal*.06625
    tax=Math.round(100*tax)/100
    write("Tax: $"+tax);
    var dtsubtotal=discountsubtotal*1.06625
    dtsubtotal=Math.round(100*dtsubtotal)/100
    write ("Subtotal after discount and tax: $"+dtsubtotal);
  } else{
    var tax2=total*.06625
    tax2=Math.round(100*tax2)/100
    write("Tax: $"+tax2);
    var taxsubtotal=total*1.06625
    taxsubtotal=Math.round(100*taxsubtotal)/100
    write ("Subtotal after tax: $"+taxsubtotal);
  }
}

main();
