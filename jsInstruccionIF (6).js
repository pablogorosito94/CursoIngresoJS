function Mostrar()
{
var edad=document.getElementById('edad').value;
if(edad>=18){
	alert ("Es mayor de edad.");
}else if(edad>=13 && edad<=18){
	alert ("Es un adolescente");
}else{
	alert ("Es un niño");
}





}