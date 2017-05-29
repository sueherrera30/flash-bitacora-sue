
var titulo = document.getElementById("modalTitulo").value;

var mensaje = document.getElementById("modalTexto").value;

var btnEnviar= document.getElementById("mandarTexto");

var areaPublicaciones= document.getElementById("area");




btnEnviar.addEventListener("click", agregarTexto);



function agregarTexto(){	
   var publicacion = document.getElementById("Publicacion");
	var tituloNuevo = document.getElementById("titulo-nuevo");
	var textoNuevo = document.getElementById("texto-nuevo");
    tituloNuevo.innerHTML = titulo;
	textoNuevo.innerHTML = mensaje;
	Publicacion.appendChild(tituloNuevo);
	Publicacion.appendChild(textoNuevo);
	areaPublicaciones.appendChild(Publicacion);
}


