function hello(){
  console.log("hello");
}

function goodbye(t){
  console.log("goodbye: " + t);
}

window.hello = hello;
window.goodbye = goodbye;
