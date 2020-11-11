// abre o menu no celular 
function menuToogle() {
        let menuCll = document.querySelector('.menu-nav');
        if (menuCll.classList.contains('menu-cll') == true ) {
            menuCll.classList.remove('menu-cll');
        } else {
            menuCll.classList.add('menu-cll');
        }
}