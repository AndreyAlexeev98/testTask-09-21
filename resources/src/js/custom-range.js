$deg = '5deg';
$base = '#43c2af';
$second = '#7e8bc6';
$trackball = '#43c2af';
$range = '0%';
$bg = '#10252f';

let range = document.getElementById("range");
let base = window.getComputedStyle(document.body).getPropertyValue($base);
let second = window.getComputedStyle(document.body).getPropertyValue($second);

let init = (value) => {
  document.getElementById("value").innerHTML = value;
  document.documentElement.style.setProperty($range, value + "%");
}
let updateValue = (value) => {
  document.getElementById("value").innerHTML = Math.floor(value);
}
let updateVar = (value) => {
  document.documentElement.style.setProperty($deg, value * 3.6 + "deg");
   document.documentElement.style.setProperty($range, value + "%");
  if(value >= 100) {
    document.documentElement.style.setProperty($trackball, second);
  } else {
    document.documentElement.style.setProperty($trackball, base);
  }
  
}

init(range.value);
range.addEventListener("input", () => { 
  let deg = range.value * 3.6; 
  updateVar(range.value);
  updateValue(range.value);
});