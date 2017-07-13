/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) 
y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 //aca ingresamos la edad,si es incorrecta, va a seguir ingresandola hasta que este bien.
 var edad=prompt("Ingrese edad entre 18 y 90 inclusive: ");

 while(edad<18 || edad>90)
 {	
 	edad=prompt("Dato incorrecto, ingrese edad entre 18 y 90 inclusive: ");
 }

 document.getElementById("Edad").value=edad;

//aca ingresa el sexo, hasta que este bien
 var sexo=prompt("Ingrese sexo <m/f>");

 while (sexo!="m" && sexo!="f" && sexo!="M" && sexo!="F")
 {
 	sexo=prompt("Dato incorrecto, Ingrese sexo <m/f>");
 }
 document.getElementById("Sexo").value=sexo;
//aca ingresa su estado por los numeros...hago un if para cada respuesta, despues de cada if, hacer un documnentbyid
 var estado=prompt("Ingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")

 while(estado!=1 && estado!=2 && estado!=3 && estado!=4)
 {
 	estado=prompt("Dato incorrecto, Ingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");

 }
 //aca empiezo a hacer los "if", para el estado civil.
 if (estado==1)
 {
 	document.getElementById("EstadoCivil").value=estado;
 }
 else if (estado==2)
 {
 	document.getElementById("EstadoCivil").value=estado;

 }
 else if (estado==3)
 {
 	document.getElementById("EstadoCivil").value=estado;

 }
 else if(estado==4)
 {
 	document.getElementById("EstadoCivil").value=estado;

 }
//aca vemos lo del sueldo, igual que todo lo anterior

 var sueldo=prompt("Ingrese sueldo en bruto, mayor a $8000")
 while (sueldo<8000)
 {
 	sueldo=prompt("Usted es muy pobre,Ingrese sueldo en bruto, mayor a $8000")
 }
 document.getElementById("Sueldo").value=sueldo

 //.................................................................................LEGAJO.............
//aca hago el legajo...todavia estoy pensando como hacer lo de que no haya ceros a la izquierda
//que en si, son todos los numeros menores a 100, ej:0094/0060 osea con 0160 no pasaria nada
 var legajo=prompt("Ingrese legajo de 4 cifras, sin ceros a la izquierda")
 while (legajo<100 && legajo!=00)
 	{
 		legajo=prompt("Dato incorrecto,Ingrese legajo de 4 cifras, sin ceros a la izquierda")
 	}
 document.getElementById("Legajo").value=legajo
 	
//................................................NACIONALIDAD........................
//a para argentinos, e para extranjeros, n para nacionalizadosw

var nacion=prompt("Ingrese nacionalidad, a para argentinos, e para extranjeros, n para nacionalizados")
while(nacion!= "a" && nacion!="A" && nacion!="e" && nacion!="E" && nacion!="n" && nacion!="N")
{
	nacion=prompt("Dato incorrecto, Ingrese nacionalidad, a para argentinos, e para extranjeros, n para nacionalizados ")
}
document.getElementById("Nacionalidad").value=nacion
 
 





 
 

}
