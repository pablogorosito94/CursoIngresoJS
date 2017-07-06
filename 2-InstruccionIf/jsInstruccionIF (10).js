function Mostrar()
{
	var alea=Math.floor((Math.random() * 10) + 1);
	if(alea==9 ||alea==10){
		alert ("EXCELENTE"+"la nota era"+alea);
	}
	else{
		if(alea>3){
			alert ("APROBO"+"la nota era"+alea);
		}
		else{
			alert ("Vamos, la proxima se puede"+"la nota era"+alea);
		}
	}
	

}