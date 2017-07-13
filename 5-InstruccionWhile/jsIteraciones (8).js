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
			contador=contador+1
		}
		else
		{
			negativo=negativo*valor
			contador=contador+1
		}
		respuesta=prompt("Quiere ingresar mas numeros? <si/no>");
		contador=contador+1
	}
	if (contador==0)
	{
		
		document.getElementById('producto').value=0;
			else:

	}




}//FIN DE LA FUNCIÓN