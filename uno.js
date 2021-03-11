/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
*el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
*el precio (validar entre 100 y 300),
*la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
*el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
*Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/

function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var tipoInflamable;
	var nombreMarca;
	var promedioAlcohol;
	var contadorAlcohol=0;
	var promedioIac;
	var contadorIac=0;
	var promedioQuat;
	var contadorQuat=0;
	var acumuladorUnidadesMax;
	var flagAcumuladorUnidadesMax=true;
	var acumuladorTipoInflamable;
	var contadorPrecioMenorIac=0;
	var precioProductoMasCaro;
	var flagPrecioProductoMasCaro=true;
	var marcaMasCaro;
	var tipoMasCaro;

		for(var i=0; i<5; i++)
		{
			tipoProducto = prompt("Ingrese tipo de producto (ALCOHOL/IAC/QUAT)");

				while(tipoProducto != "ALCOHOL" && tipoProducto != "IAC" && tipoProducto != "QUAT")
				{
					tipoProducto = prompt("Por favor ingrese un dato válido. (ALCOHOL/IAC/QUAT)");
				}

			precioProducto = parseInt(prompt("Ingrese el precio. Entre $100 y $300."));

				while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
				{
					precioProducto = parseInt(prompt("Por favor ingrese un precio entre $100 y $300."));
				}

			cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades."));

				while(isNaN(cantidadUnidades) ||cantidadUnidades <= 0 || cantidadUnidades > 1000)
				{
					cantidadUnidades = parseInt(prompt("Dato incorrecto. Por favor ingrese un numero entre 1 y 1000."));
				}

			tipoInflamable = prompt("Ingrese el tipo de inflamable. (ignifugo/combustible/explosivo");

				while(tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
					{
						tipoInflamable = prompt("ERROR. Ingrese el tipo de inflamable correcto. (ignifugo/combustible/explosivo");
					}

			nombreMarca = prompt("Ingrese la marca");

//a) El promedio de cantidad por tipo de producto
			switch(tipoProducto)
			{
				case "ALCOHOL":
					contadorAlcohol++;
					break;

				case "IAC":
					contadorIac++;
					break;

				case "QUAT":
					contadorQuat++;
					break;
			}

//b) El tipo de inflamable con más cantidad de unidades en total de la compra
			if(flagAcumuladorUnidadesMax)
					{
						acumuladorUnidadesMax = cantidadUnidades;
						acumuladorTipoInflamable = tipoInflamable;

						flagAcumuladorUnidadesMax = false;
					}
					else
					{
						if(cantidadUnidades > acumuladorUnidadesMax)
						{
							acumuladorUnidadesMax = cantidadUnidades;
							acumuladorTipoInflamable = tipoInflamable;
						}
					}
//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
			if(precioProducto<= 200 && tipoProducto == "IAC")
			{
				contadorPrecioMenorIac++;
			}

//d) la marca y tipo del más caro de los productos

			if(flagPrecioProductoMasCaro)
			{
				precioProductoMasCaro = precioProducto;
				marcaMasCaro = nombreMarca;
				tipoMasCaro = tipoProducto;
				flagPrecioProductoMasCaro=false;
			}
			else
			{
				if(precioProducto > precioProductoMasCaro)
				{
					precioProductoMasCaro = precioProducto;
					marcaMasCaro = nombreMarca;
					tipoMasCaro = tipoProducto;
				}
			}
		}

		promedioAlcohol = contadorAlcohol/5*100;
		promedioIac = contadorIac/5*100;
		promedioQuat = contadorQuat/5*100;

		document.write("Promedio de Alcohol: %"+promedioAlcohol);
		document.write("<br>Promedio de IAC: %"+promedioIac);
		document.write("<br>Promedio de QUAT: %"+promedioQuat+"<br>");
		document.write("<br>Tipo de inflamable: "+acumuladorTipoInflamable+". Cantidad total de unidades : "+acumuladorUnidadesMax);
		document.write("<br>Unidades de IAC con precios menores a 200: "+contadorPrecioMenorIac);
		document.write("<br>Marca: "+marcaMasCaro+". Tipo: "+tipoMasCaro+". Precio del producto: $"+precioProductoMasCaro);

}
