const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');
const menuLink = document.querySelectorAll(".menu-lateral__link");

botaoMenu.addEventListener("click", function(){
  menu.classList.toggle('menu-lateral--ativo')
})

for (var i = 0; i < menuLink.length; i++){
  menuLink[i].addEventListener("click", function(){
    menu.classList.toggle('menu-lateral--ativo')
  })

}