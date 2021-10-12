var price = 10;
var day = "";
var age = 0;
var code = "";

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

function changePriceAge(){
  age = document.getElementById("Age").value;
  if (age<=5){
    price=5;
  }else if (age>=65){
    price=5;
  }
}

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

function displayPrice(){
  price = 10;
  changePriceAge();
  changePriceDay();
  couponCode();
  document.getElementById("Price").innerHTML = price;
}
