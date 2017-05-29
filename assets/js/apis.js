
var titulo = document.getElementById("modalTitulo").value;

var mensaje = document.getElementById("modalTexto").value;

var btnEnviar= document.getElementById("mandarTexto");

var areaPublicaciones= document.getElementById("area");




btnEnviar.addEventListener("click", agregarTexto);



function agregarTexto(){	
	var nuevaPubli = document.createElement("div");
	var tituloNuevo = document.createElement("h1");
	var textoNuevo = document.createElement("p");
    tituloNuevo.innerHTML = titulo;
	textoNuevo.innerHTML = mensaje;
	nuevaPubli.appendChild(tituloNuevo);
	nuevaPubli.appendChild(textoNuevo);
	areaPublicaciones.appendChild(nuevaPubli);
}


