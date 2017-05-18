//var nameList = document.getElementById("ingresoLista").value;

//constructor lista
function ListaNueva(id){
	this.id = id;
	this.agregar = function(){
		var nameList = document.getElementById("ingresoLista").value;
		var contenedor = document.getElementById("my-section");

		var lista = document.createElement("div");
		lista.setAttribute("id","div" + this.id);
		var nombreLista = document.createTextNode(nameList);

		//LABEL de cada tarea
		var labelInput = document.createElement("label");
		var nombreLabel = document.createTextNode("Ingrese Tarea");
		labelInput.appendChild(nombreLabel);

		var saltoLinea = document.createElement("br"); //crea salto de linea entre el nombre de la lista y la tarea

		//INPUT de cada tarea
		var inputTarea = document.createElement("input");
		inputTarea.setAttribute("id","input" + this.id);

		//BOTON de cada tarea
		var botonTarea = document.createElement("button");
		botonTarea.setAttribute("id","boton" + this.id);
		var contenidoBoton = document.createTextNode("Agregar tarea");
		botonTarea.appendChild(contenidoBoton);

		//LISTA debe anidar el nombre, salto de linea, label, input y boton de cada tarea
		lista.appendChild(nombreLista);
		lista.appendChild(saltoLinea);
		lista.appendChild(labelInput);
		lista.appendChild(inputTarea);
		lista.appendChild(botonTarea);
		contenedor.appendChild(lista);
	};
}

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
			var contenedorTarea = document.getElementById("div" + agregoLista.id);

			var imprimirTarea = document.createElement("div");
			var textoTarea = document.createTextNode(nameWork);
			imprimirTarea.appendChild(textoTarea);
			contenedorTarea.appendChild(imprimirTarea);
		}
	}

	var j=0;
	var botonTarea = document.getElementById("boton" + agregoLista.id);
	botonTarea.addEventListener("click",function(){
		var agregoTarea = new TareaNueva(j.toString(),agregoLista.id);
		j++;
		agregoTarea.agregar();
	});
});


	





