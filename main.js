/*
LEARNING OUTCOME

EVENT.TARGET == This gives you access to the attributes such as value or id or src of the element that triggered
the event

.toFixed(n) rounds to a certain number of decimal places where n is the number of decimal places you wan t


*/
function colors(){
    document.getElementById("reset").style.background = "hsl(172, 67%, 45%)";}


function discounts(){
    var check = event.target.id ;
    var people = document.getElementById("input2").value;
    var bill =  document.getElementById("input1").value;
    document.getElementById("input1").style.border  = ""
    document.getElementById("input2").style.border  = ""

    if( people == "" || people == 0){
        document.getElementById("input2").style.border  = "2px solid red";

        alert("Please enter a valid number of People");}

    if(bill == "" || bill == 0){
        document.getElementById("input1").style.border  = "2px solid red";
        alert("Please enter a valid bill amount");}

    if ( bill != "" && people != "" ){

         if(check == "t1"){
            disc = bill * 0.05;
            pp = disc / people;}

        else if (check == "t2"){
            disc = bill * 0.10;
            pp = disc / people;}

        else if (check == "t3"){
            disc = bill * 0.15;
            pp = disc / people;}

        else if(check == "t4"){
            disc = bill * 0.20;
            pp = disc / people;}

        else if (check == "t5"){
            disc =bill * 0.25;
            pp = disc / people;}

        else if(check == "t6"){
            disc = bill * (event.target.value/100);
            pp = disc / people;}

        document.getElementById("show1").innerHTML = "$"+ pp.toFixed(2);
        document.getElementById("show2").innerHTML = "$"+ ((bill/people) + pp).toFixed(2)}
    }

function reset(){

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("show1").innerHTML = "$0.00";
    document.getElementById("show2").innerHTML = "$0.00";
    document.getElementById("reset").style.background = "hsl(186, 14%, 43%)";
     document.getElementById("input1").style.border  = "";
     document.getElementById("input2").style.border  = "";}

/*function finishAlert(){
     document.getElementById("input2").style.border  = "";
     document.getElementById("input1").style.border  = "";}
*/
