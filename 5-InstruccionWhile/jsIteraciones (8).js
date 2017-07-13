function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while (respuesta=='si')
	{
		valor=parseInt(prompt("ingrese valor"));
		if (valor>0)
		{
			positivo=positivo+valor
		}
		else
		{
			negativo=negativo*valor
		}
		respuesta=prompt("Quiere ingresar mas numeros? <si/no>");
		contador=contador+1
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN