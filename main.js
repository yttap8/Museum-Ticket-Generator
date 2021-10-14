//global variables that will be changed later
var price = 10;
var day = "";
var age = 0;
var code = "";

//changes the price depending on the day of week selected
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

//changes the price depending on user input of age
function changePriceAge(){
  age = document.getElementById("Age").value;
  if (age<=5){
    price=5;
  }else if (age>=65){
    price=5;
  }
}

//changes the price depending on user input of coupon code
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

//runs the functions to change price and then displays the number with dollar sign
function displayPrice(){
  price = 10;
  changePriceAge();
  changePriceDay();
  couponCode();
  document.getElementById("Price").innerHTML = "$" + price;
}
