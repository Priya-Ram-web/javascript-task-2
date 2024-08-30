//Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//weight-48, height-5.

const BMI = 20.67;
if(BMI < 18.5){
    console.log("you are underweight.")
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log("you are normal.")
}
else if(BMI >=25 && BMI <= 29.9){
    console.log("you are overweight.")
}
else{
    console.log( "you are obese.")
}
