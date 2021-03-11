/*
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata 
con un grupo de personas, de cada persona debemos optener los siguientes datos:

*Nombre,
*estado civil ("soltero", "casado" o "viudo"),
*edad( solo mayores de edad, mas de 17),
*temperatura corporal(validar por favor)
*sexo (validar).

NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene 
un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad;
	var temperatura;
	var sexo;
	var respuesta;

	//a) La cantidad de personas con estado "viudo" de mas de 60 años.
	var contadorPersonasViudas = 0;

	//b) el nombre y edad de la mujer soltera mas joven.
	var nombreSolteraMasJoven;
	var edadSolteraMasJoven;
	var flagSoltera = true;

	//c) cuanto sale el viaje total sin descuento.
	var precioPorPasajero = 600;
	var precioTotal;
	var contadorPersonas = 0;

	/*d) si hay mas del 50% de los pasajeros que tiene mas de. 60 años , el precio final tiene 
		 un descuento del 25%, que solo mostramos si corresponde.*/
	var contadorMayores = 0;
	var porcentajePasajerosMayores;


		do{
			nombre = prompt("Ingrese un nombre");
				while(!(isNaN(nombre)))
				{
					nombre = prompt("ERROR. Ingrese un nombre válido");
				}
				console.log(nombre);

			estadoCivil = prompt("Estado civil?")
				while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
				{
					estadoCivil = prompt("ERROR. Ingrese un estado civil válido (soltero/viudo/casado)");
				}
				console.log(estadoCivil);

			edad = parseInt(prompt("Ingrese la edad (+17)"));
				while(isNaN(edad) || edad < 18)
				{
					edad = parseInt(prompt("ERROR. Debe ser mayor a 17"));
				}
				console.log(edad);

			temperatura = parseInt(prompt("temperatura (34°/40°)"));
				while(isNaN(temperatura) || temperatura < 34 || temperatura > 40)
				{
					temperatura = parseInt(prompt("ERROR. ingrese temperatura entre 34°-40°)"));
				}
				console.log(temperatura);

			sexo = prompt("sexo");
				while(sexo != "masculino" && sexo != "femenino")
				{
					sexo = prompt("ERROR. Ingrese un sexo válido (masculino/femenino)");
				}
				console.log(sexo);

//a) La cantidad de personas con estado "viudo" de mas de 60 años.
			if(estadoCivil == "viudo" && edad > 60)
			{
				contadorPersonasViudas++;
			}

//b) el nombre y edad de la mujer soltera mas joven.
			if(sexo == "femenino" && estadoCivil == "soltero" && (flagSoltera || edad < edadSolteraMasJoven))
			{
				nombreSolteraMasJoven = nombre;
				edadSolteraMasJoven = edad;
				flagSoltera = false;
			}

			//(d)
			if(edad > 60)
			{
				contadorMayores++;
			}

			contadorPersonas++;

			respuesta = confirm("Desea ingresar otro pasajero?")
		}while(respuesta);

//c) cuanto sale el viaje total sin descuento.
		precioTotal = contadorPersonas * precioPorPasajero;

/*d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene 
un descuento del 25%, que solo mostramos si corresponde.*/

		porcentajePasajerosMayores = contadorPersonas/2;

		//MOSTRAR
		//(A)
		document.write("Cantidad de personas viudas mayores de 60 años: "+contadorPersonasViudas);
		
		//(B)
		if(nombreSolteraMasJoven != undefined)
		{
			document.write("<br><br>Mujer soltera mas joven: "+nombreSolteraMasJoven+" y su edad es: "+edadSolteraMasJoven);
		}

		//(D)
		if(contadorMayores > porcentajePasajerosMayores)
		{
			precioTotalConDescuento = precioTotal-(precioTotal*25/100);
			document.write("<br><br>El precio por pasajero es de $600.<br>Cantidad de pasajeros ingresados: "+contadorPersonas+"<br>Precio total: $"+precioTotal);
			document.write("<br>Usted accedió al descuento del %25 por ser más de la mitad de los pasajeros mayores a 60 años.");
			document.write("<br>Precio final con descuento (%25): "+precioTotalConDescuento);
		}
		else
		{
			//(C)
		document.write("<br><br>El precio por pasajero es de $600.<br>Cantidad de pasajeros ingresados: "+contadorPersonas+"<br>Precio total: $"+precioTotal);
		}
}
