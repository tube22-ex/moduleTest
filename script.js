function hello(){
  console.log("helloあああああ");
}

function goodbye(t){
  console.log("goodbye: " + t);
}

hello()

window.goodbye = goodbye;
