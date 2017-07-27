function Mostrar()
{
	var largo=parseInt(document.getElementById('alrgo').value);
	var ancho=parseInt(document.getElementById('ancho').value);
	var suma= largo+ancho;
	alert("el cable necesitado es: " + (suma*6));

}
