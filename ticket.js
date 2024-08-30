const ticketFare = 800;
const age = 70;
const isStudent = false;
 
if (age < 10){
    console.log("Children free");
}
else if (isStudent){
    //50% discount for students
    const discount= ticketFare* 50 / 100;
    const payTicket = ticketFare - discount;
    console.log(payTicket)
}
else if (age >= 60){
    //15% Discount for Senior citizens\
    const discount = ticketFare*15/100;
    const payTicket = ticketFare - discount;
    console.log(payTicket)
}
else{
    console.log(ticketFare)
}