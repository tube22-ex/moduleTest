function hello(){
  console.log("hello");
  console.log(hello2("he"));
}

function goodbye(t){
  console.log("goodbye: " + t);
}

window.hello = hello;
window.goodbye = goodbye;
