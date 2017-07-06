function Mostrar()
{
var edad=document.getElementById('edad').value;
var estado=document.getElementById('estadoCivil').value;
if (edad<18 && estado!="Soltero"){
	alert ("Es muy pequeño para NO ser soltero")
}
}