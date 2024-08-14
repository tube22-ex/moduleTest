function hello(){
  console.log("hello");
}

function goodbye(t){
  console.log("goodbye: " + t);
}

hello()

window.goodbye = goodbye;
