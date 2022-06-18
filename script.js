function percentage_1() {
  var percent = 10;
  var num = document.getElementById("num").value;
  document.getElementById("value1").value = (num / 100) * percent;
}

function percentage_2() {
  var percent = 30;
  var num = document.getElementById("num2").value;
  document.getElementById("value2").value = (num / 100) * percent;
}