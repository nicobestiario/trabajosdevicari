const hamburger = document.querySelector('.menu')
const menu = document.querySelector('.navegacion')
const redSocial = document.querySelector('.linkedin') || document.querySelector('.facebook') || document.querySelector('.instagram');

console.log(menu)
console.log(hamburger)

hamburger.addEventListener('click', ()=>{
   menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburger   ){
        menu.classList.toggle("spread")
    }
})

redSocial.addEventListener('click', e => {
    var resultado = window.confirm('Estás saliendo del sitio');
    if (resultado === true) {
        window.alert('¡Hasta pronto!');
    } 
    
});
