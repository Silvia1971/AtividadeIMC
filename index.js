function verificarresult() {

  var num1 = Number(document.getElementById("n1").value);
  var num2 = Number(document.getElementById("n2").value);

  
  var total = Number(num1/(num2*num2));
  console.log(total);
  
  if (total < 17)
  {
    alert("Muito abaixo do peso");
  }
  else if (total >=17 && total<=18.49)
  {
    alert("Abaixo do peso");
  }
  else if (total >=18.49 && total<=24.99)
  {
    alert("Peso Normal");
  }
  else if (total >=25 && total<=29.99)
  { 
    alert("Acima do peso");
  }
  else if (total >=30 && total<=34.99)
  { 
    alert("Obesidade I");
  }
  else if (total >= 35 && total<=39.99)
  {
    alert("Obesidade II");
  }
}
