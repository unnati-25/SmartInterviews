var globalVar = "I'm global";

function scopeTest() {
  var functionVar = "I'm local to the function";
  if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar);
  }
  console.log(globalVar);
  console.log(functionVar);
}

scopeTest();
