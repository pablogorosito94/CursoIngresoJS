function Mostrar()
{
	var n1=parseInt(prompt("ingreese 1er numero:"));
	var n2=parseInt(prompt("ingrese 2do numero:"));
	if (n1==n2)
	{
		document.write(n1*n2);
	}
	else if (n1>n2)
	{
		document.write(n1-n2);
	}
	else
	{
		document.write(n1+n2);
	}
}	
