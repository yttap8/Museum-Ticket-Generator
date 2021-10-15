//global variables that will be changed later
var price = 10;
var day = "";
var age = 0;
var code = "";

//changes the price so that weekends = 15 and mondays = 5 depending on value from day of week input
function changePriceDay(){
  day = document.getElementById("Day").value;
  if (day == "Saturday"){
    price = 15;
  }else if (day == "Sunday"){
    price = 15;
  }else if (day == "Monday"){
    price =5;
  }
}

//changes the price so that 5&under and 65&over = 5 depending on user input of age
function changePriceAge(){
  age = document.getElementById("Age").value;
  if (age<=5){
    price=5;
  }else if (age>=65){
    price=5;
  }
}

//changes the price depending on user input of coupon code and day of week. Coupon "APCSP" does not work on weekends and monday.
function couponCode(){
  code = document.getElementById("Code").value;
  if (code == "APCSP" && day == "Tuesday"){
    price =5;}
  else if (code == "APCSP" && day == "Wednesday"){
    price =5;}
  else if (code == "APCSP" && day == "Thursday"){
    price =5;}
  else if (code == "APCSP" && day == "Friday"){
    price =5;}
}

//runs all the functions above to change the price and then displays the number with dollar sign
function displayPrice(){
  price = 10;
  changePriceAge();
  changePriceDay();
  couponCode();
  document.getElementById("Price").innerHTML = "$" + price + ", " + age + " years old, " + day;
}
