function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('year')
    var res = window.document.querySelector('p.res') 

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'homem'
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos`

            if(idade >= 0 && idade < 12) {
                res.innerHTML = `Detectamos um menino com ${idade} anos`
                img.setAttribute('src', 'crianca.webp')
            } else if(idade < 18) {
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', 'homem-adulto.avif')
            } else {
                img.setAttribute('src', 'homem-idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            res.innerHTML = `Detectamos uma ${genero} com ${idade} anos`

            if(idade >= 0 && idade < 12) {
                res.innerHTML = `Detectamos uma menina com ${idade} anos`
                img.setAttribute('src', 'crianca.webp')
            } else if(idade < 18) {
                img.setAttribute('src', 'mulher-jovem.avif')
            } else if(idade < 50) {
                img.setAttribute('src', 'mulher-adulta.avif')
            } else {
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }

        res.appendChild(img)
    }
}