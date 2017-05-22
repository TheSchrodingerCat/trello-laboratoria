

//constructor lista
function ListaNueva(id){
	this.id = id;
	this.agregar = function(){
		var nameList = document.getElementById("ingresoLista").value;
		document.getElementById("ingresoLista").value = "";
		var contenedor = document.getElementById("my-section");
		var contenedor2 = document.getElementById("todasLasTareas");

		var lista = document.createElement("div");
		lista.setAttribute("class","listas");
		lista.setAttribute("id","div" + this.id);
		var nombreLista = document.createTextNode(nameList);

		var saltoLinea = document.createElement("br"); //crea salto de linea entre el nombre de la lista y la tarea

		//INPUT de cada tarea
		var inputTarea = document.createElement("textarea");
		inputTarea.setAttribute("id","input" + this.id);

		//BOTON de cada tarea
		var botonTarea = document.createElement("button");
		botonTarea.setAttribute("id","boton" + this.id);
		var contenidoBoton = document.createTextNode("Agregar tarea");
		botonTarea.appendChild(contenidoBoton);

		//LISTA debe anidar el nombre, salto de linea, label, input y boton de cada tarea
		lista.appendChild(document.createElement("br"));
		lista.appendChild(nombreLista);
		lista.appendChild(saltoLinea);
		lista.appendChild(inputTarea);
		lista.appendChild(document.createElement("br"));
		lista.appendChild(botonTarea);
		contenedor2.appendChild(lista);
		contenedor.appendChild(contenedor2);

	};
}


//esta funcion crea el input y el boton cuando se precione el enlace


function primera(){
	var touch = document.getElementById("my-section");
	var inputLista = document.createElement("input");
	inputLista.setAttribute("type","text");
	inputLista.setAttribute("id","ingresoLista");
	var elBoton = document.createElement("button");
	elBoton.setAttribute("id","botoncito");
	var contElBoton = document.createTextNode("Añadir");
	elBoton.appendChild(contElBoton);

	touch.appendChild(inputLista);
	touch.appendChild(elBoton);
	touch.appendChild(document.createElement("br"));




	var i=0;
	var boton = document.getElementById("botoncito");
	boton.addEventListener("click",function(){
		var agregoLista = new ListaNueva(i.toString());
		i++;
		agregoLista.agregar();

		//constructor tareas
		function TareaNueva(id_tarea,id_lista){
			this.id_tarea = id_tarea;
			this.id_lista = id_lista;
			this.agregar = function(){
				var nameWork = document.getElementById("input" + agregoLista.id).value;
				document.getElementById("input" + agregoLista.id).value = "";
				var contenedorTarea = document.getElementById("div" + agregoLista.id);

				var imprimirTarea = document.createElement("div");
				imprimirTarea.setAttribute("class","tareas");
				var miUl = document.createElement("ul");
				var miLi = document.createElement("li");
				var textoTarea = document.createTextNode(nameWork);

				miLi.appendChild(textoTarea);
				miUl.appendChild(miLi);
				imprimirTarea.appendChild(miUl);

				contenedorTarea.appendChild(imprimirTarea);
			}
		}



		function segunda(){
			var agregoTarea = new TareaNueva(j.toString(),agregoLista.id);
			j++;
			agregoTarea.agregar();
		}


		var j=0;
		var botonTarea = document.getElementById("boton" + agregoLista.id);
		botonTarea.addEventListener("click",segunda);
	});

}

document.getElementById("newList").addEventListener("click",primera);
	

