function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Julio":
	case "Agosto":
	alert ("abrigate");
	break;

	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	alert ("Falta para el invierno");

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	alert ("ya paso el invierno");
	break;
}




}//FIN DE LA FUNCIÓN