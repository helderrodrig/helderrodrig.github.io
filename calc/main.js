function calcular() 
{
  var num1 = document.getElementById("valor1").value;
  var num2 = document.getElementById("valor2").value;
  var operador1 = document.getElementById("operador").value;


  switch (operador1) 
  {
  case '+':
    var resultado = parseInt(num1) + parseInt(num2)
    break;
  case '-':
    var resultado = parseInt(num1) - parseInt(num2)
    break;
  case '*':
    var resultado = parseInt(num1) * parseInt(num2)
    break;
  case '/':
    var resultado = parseInt(num1) / parseInt(num2)
    break;
  default:
    break;
  }

  document.getElementById("result").value = resultado;
  if(resultado == 666)
  {
    var r=confirm("axzʌnqxznʌq xnzqʌzxqʌuɔzx ʌxzxʞɔdxqɐqɔu sɐoɔuʞɐsoɟısɐɔq sɐ");
    if (r==true)
    {
      document.getElementById("textinhoTit").innerHTML = "ɐɹopɐןnɔןɐɔ ǝp ǝʇıs ɯn";
      document.getElementById("textinhoMen").innerHTML = "ɐɹopɐןnɔןɐɔ ǝp ǝʇıs ɯn ós é";
    }
  }

}

function soma()
{
    document.getElementById("operador").value = "+";

}

function subt()
{
    document.getElementById("operador").value = "-";

}
function multp()
{
    document.getElementById("operador").value = "*";

}

function divs()
{
    document.getElementById("operador").value = "/";

}

function alert1()
{ 
  alert("se clicar no OK é corno");
}