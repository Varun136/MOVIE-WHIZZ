document.querySelector(".one").addEventListener("click",warning);
function warning(){
  var name=prompt("Enter your name");
  var age=prompt("Enter your age");
  if (age<18){
    alert("Heey "+name+" this page may contain details regarding 18+ movies");
  }else{
    alert("Heey "+name+" you are about to enter Movie_whiZz..")
  }
}
function name(){
    var x=document.getElementById("form");
    var name=x[0].value;
    document.getElementById("cat").innerHTML=name;
}
