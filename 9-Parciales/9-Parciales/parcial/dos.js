function Mostrar()
{
  var importe=parseInt(prompt("ingrese valor, y se informa el iva: "));
  document.getElementById('importeFinal').value=((importe*0.21)+importe);
}
