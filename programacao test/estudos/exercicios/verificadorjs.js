function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '	#DEB887'
    } else if (hora >=12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = ' #00BFFF'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = ' #0000FF'
    }
}
