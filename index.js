const randOne =  Math.floor(Math.random()*6 + 1);
var randomImage = "images/"+"dice"+randOne+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",randomImage);


const randTwo =  Math.floor(Math.random()*6 + 1);
var randomImage = "images/"+"dice"+randTwo+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",randomImage);

if(randOne > randTwo){
  document.getElementsByClassName("heading-1")[0].innerText="Player-1 Wins";
}
else if(randOne<randTwo){
  document.getElementsByClassName("heading-1")[0].innerText="Player-2 Wins";
}
else{
  document.getElementsByClassName("heading-1")[0].innerText="Draw";
}
  


