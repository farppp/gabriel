function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente![ERRO]")
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =  document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'um Homen'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src','criancah.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemh.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adultoh.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoh.jpg')
            }
        } else {
            genero = 'uma Mulher'
            if (idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src', 'criancam.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adultom.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosom.jpg')
            }
        }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}