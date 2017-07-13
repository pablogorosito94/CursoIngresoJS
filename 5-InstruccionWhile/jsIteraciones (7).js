function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while (respuesta=='si')
	{
		valor=parseInt(prompt("ingrese valor"));
		acumulador=acumulador+valor;
		respuesta=prompt("Quiere ingresar mas numeros? <si/no>");
		contador=contador+1
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN