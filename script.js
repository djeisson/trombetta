function abrirMenu() {
    const menu = document.getElementById('menuMobile')
    if (menu.style.display === 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none'
    }
}

function fechar() {
    const menu = document.getElementById('menuMobile')
    menu.style.display = 'none'
}

AOS.init();