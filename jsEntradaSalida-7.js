/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var v1=parseInt(document.getElementById('numeroUno'));
	var v2=parseInt(document.getElementById('numeroDos'));
	alert ("la suma es: "+(v1+v2));

}

function restar()
{
	var v1=parseInt(document.getElementById('numeroUno'))
	var v2=parseInt(document.getElementById('numeroDos'))
	alert ("la resta es: "+(v1-v2))
}

function multiplicar()
{ 
	var v1=parseInt(document.getElementById('numeroUno'))
	var v2=parseInt(document.getElementById('numeroDos'))
}	alert ("la multiplicacion es: "+(v1 * v2))

function dividir()
{
	var v1=parseInt(document.getElementById('numeroUno'))
	var v2=parseInt(document.getElementById('numeroDos'))
	alert ("la division es:"+(v1/v2))
}

