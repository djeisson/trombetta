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


let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2000);

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}