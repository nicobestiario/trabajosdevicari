let edad;

edad = prompt("Introducí tu edad");

if (edad >= 18)
{
alert("Puedes entrar");
} 
else 
{

if (edad <= 18)    
alert("Entrarás bajo tu responsabilidad");
}

var resultado = window.confirm('Estás saliendo del sitio');
if (resultado === true) {
    window.alert('¡Hasta pronto!');
} 