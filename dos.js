/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/

function mostrar()
{
 	var tipoCursada;
 	var cantidadMaterias;
 	var sexo;
 	var nota;
 	var edad;
 	var nombre;
 	var notaALta;
 	var flagNotaAlta = true;
 	var arrayAlumnoNotaAlta = [];
 	var contadorNotaAlta = 0;
 	var respuesta;
 	var flagEdad = true;
 	var arrayNombreMasJoven = [];
 	var menorEdad;
 	var contadorMenorEdad = 0;
 	var promedioNotaMasculino;
 	var contadorMasculino = 0;
 	var promedioNotaFemenino;
 	var contadorFemenino = 0;
 	var promedioNotaNoBinario;
 	var contadorNoBinario = 0;
 	var acumuladorNotaNoBinario = 0;
 	var acumuladorNotaFemenino = 0;
 	var acumuladorNotaMasculino = 0;
 	var masMaterias;
 	var nombreMasMaterias;
 	var edadMasMaterias;
 	var flagMaterias = true;

	 	do{

	 		nombre = prompt("Ingrese su nombre");
	 			while(!(isNaN(nombre)))
	 			{
	 				nombre = prompt("Ingrese un nombre válido");
	 			}
	 			console.log("Nombre: "+nombre);

	 		tipoCursada = prompt("Ingrese tipo de cursasda. (libre/presencial/remota)");
	 			while(tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota")
	 			{
	 				tipoCursada = prompt("ERROR.Ingrese tipo de cursasda valido. (libre/presencial/remota)");
	 			}
	 			console.log(tipoCursada);

	 		cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias."));
	 			while(isNaN(cantidadMaterias) || cantidadMaterias < 1 || cantidadMaterias > 7)
	 			{
	 				cantidadMaterias = parseInt(prompt("ERROR. la cantidad de materias tiene que ser entre 1 y 7."));
	 			}
	 			console.log(cantidadMaterias);

	 		sexo = prompt("Ingrese su sexo.");
	 			while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
	 			{
	 				sexo = prompt("ERROR. El sexo debe ser: masculino/femenino/no binario");
	 			}
	 			console.log("Sexo: "+sexo);

	 		nota = parseInt(prompt("Ingrese nota promedio"));
	 			while(isNaN(nota) || nota <0 || nota > 10)
	 			{
	 				nota = parseInt(prompt("La nota promedio debe ser entre 0 y 10"));
	 			}
	 			console.log("Nota: "+nota);

	 		edad = parseInt(prompt("Ingrese su edad."));
	 			while(isNaN(edad) || edad < 18 || edad > 99)
	 			{
	 				edad = parseInt(prompt("Ingrese una edad válida."));
	 			}
	 			console.log(edad);
	 			
// a) El nombre del mejor promedio que no sea masculino
			if(sexo != "masculino" && (nota == notaALta ||flagNotaAlta))
			{
				notaALta = nota;
				arrayAlumnoNotaAlta.push(nombre);
				contadorNotaAlta++;
				flagNotaAlta = false;
			}
			else
			{
				if(nota > notaALta && sexo != "masculino")
				{
					for(var i=contadorNotaAlta; i>=0; i--)
					{
					notaALta = nota;
					arrayAlumnoNotaAlta.splice(i);
					}

					arrayAlumnoNotaAlta.push(nombre);
					contadorNotaAlta = 1;
				}
			}
			
//b) El nombre del mas joven de los alumnos entre los que la dan libre
			if(tipoCursada == "libre" && (edad == menorEdad ||flagEdad))
			{
				arrayNombreMasJoven.push(nombre);
				menorEdad = edad;
				contadorMenorEdad++;
				flagEdad=false;
			}
			else
			{
				if(edad < menorEdad && tipoCursada == "libre")
				{
					for(var i=contadorMenorEdad; i>=0; i--)
					{
						menorEdad = edad;
						arrayNombreMasJoven.splice(i);
					}

					arrayNombreMasJoven.push(nombre);
					contadorMenorEdad = 1;
				}
			}
//d) El promedio de nota por sexo

			switch(sexo)
			{
				case "masculino":
					contadorMasculino++;
					acumuladorNotaMasculino = acumuladorNotaMasculino + nota;
					break;

				case "femenino":
					contadorFemenino++;
					acumuladorNotaFemenino = acumuladorNotaFemenino + nota;
					break;

				case "no binario":
					contadorNoBinario++;
					acumuladorNotaNoBinario = acumuladorNotaNoBinario + nota;
					break;
			}
//f) La edad y nombre del que cursa mas materias que no sean en forma remota

			if(tipoCursada != "remota" && (flagMaterias || cantidadMaterias > masMaterias))
			{
				masMaterias = cantidadMaterias;
				nombreMasMaterias = nombre;
				edadMasMaterias = edad;
				flagMaterias = false;
			}


			respuesta = confirm("Desea ingresar mas datos?");
	}while(respuesta)

			for(var i=0; i<contadorNotaAlta; i++)
			{
				document.write("Nombre/s con nota más alta: "+arrayAlumnoNotaAlta[i]+". Nota: "+notaALta+"<br>");
			}

			for(var i=0; i<contadorMenorEdad; i++)
			{
				document.write("Nombre del mas joven de los alumnos entre los que dan libre: "+arrayNombreMasJoven[i]+". Su edad es: "+menorEdad);
			}

			promedioNotaMasculino = acumuladorNotaMasculino/contadorMasculino;
			promedioNotaFemenino = acumuladorNotaFemenino/contadorFemenino;
			promedioNotaNoBinario = acumuladorNotaNoBinario/contadorNoBinario;

			
			if(!(isNaN(promedioNotaMasculino)))
			{
				document.write("<br><br>Promedio de nota Masculino: "+promedioNotaMasculino);
			}
			
			if(!(isNaN(promedioNotaFemenino)))
			{
				document.write("<br>Promedio de nota Femenino: "+promedioNotaFemenino);
			}
			
			if(!(isNaN(promedioNotaNoBinario)))
			{
				document.write("<br>Promedio de nota No binario: "+promedioNotaNoBinario);
			}
			
			if(nombreMasMaterias != undefined)
			{
				document.write("<br><br>La edad y nombre del que cursa mas materias que no sean en forma remota. <br><br>Nombre: "+nombreMasMaterias+"<br>Edad: "+edadMasMaterias+"<br>Cantidad de materias: "+masMaterias);
			}
			
}
