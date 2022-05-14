const number = 371;
const secondNumber = number.toString();
const thirdNumber = secondNumber.split("");
if (thirdNumber.length > 3) {
  console.log("Number Should Be Smaller Or Equal To 3");
} else {
  var valueone = 1;
  for (var i = 0; i < thirdNumber.length; i++) {
    var valueone = valueone * thirdNumber[0];
  }
  var valuetwo = 1;
  for (var i = 0; i < thirdNumber.length; i++) {
    var valuetwo = valuetwo * thirdNumber[1];
  }
  var valuethree = 1;
  for (var i = 0; i < thirdNumber.length; i++) {
    var valuethree = valuethree * thirdNumber[2];
  }
  console.log(valueone + valuethree + valuetwo);
  if (valueone + valuethree + valuetwo === number) {
    console.log("Your Number is Armstrong");
  } else {
    console.log("Your Number is not Armstrong");
  }
}