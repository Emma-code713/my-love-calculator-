
function submit(){
var male = document.getElementById("male").value;
var female =document.getElementById("female").value;
var make =document.getElementById("make");
var maz = Math.round(Math.random()*100)

make.innerHTML = male + " and " + female + " your love compatibility is " 
+ maz +"%," + " which means" 
+ zaki() + " thank you";

function zaki() {
    if (maz >=80 &&  maz <=100 ){
        return " your love will be sweet";
       }
       else if(maz >=70 && maz <= 79 ){
        return " your love might not experience breakfast ";
       }
        else if (maz >=60 &&  maz<= 69){
        return " your love is quite reasonable";
       }
     else if (maz >=45 &&  maz <= 59){
        return " your love is an average love";
       }  
       else if (maz >=30 && maz <= 44){
        return " your love level is low";
       } 
       else if (maz >=20 &&  maz <= 29){
        return " you go chop breakfast";
       } 
       else if (maz >=0 &&  maz <=19){
        return " the love is not real ";
       } 
       else {
        return " you go see shege";}
        

       

   
}
}
    
      




