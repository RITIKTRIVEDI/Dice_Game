//alert("HI! IT IS WORKING....");
var ran1=Math.floor(Math.random()*6)+1;
var ran2=Math.floor(Math.random()*6)+1;

//alert(ran);
var finalstring1="images/dice"+ran1+".png";
var finalstring2="images/dice"+ran2+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",finalstring1);
//or
//document.querySelectorAll("img")[0].setAttribute("src",finalstring1);

document.querySelectorAll("img")[1].setAttribute("src",finalstring2);
if(ran1>ran2){
document.querySelector("h2").innerHTML="Player 1 Wins!";
}
else if(ran1<ran2){

    document.querySelector("h2").innerHTML="Player 2 Wins!";
}
else {
    document.querySelector("h2").innerHTML="Draw";
}