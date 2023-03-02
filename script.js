function mudouTamanho(){
    if( window.innerWidth >=768){
       itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu(){
    if (itens.style.display == 'block'){
    itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

let = 1;

document.getElementById("radio1").checked = true;

setInterva( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}