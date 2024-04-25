function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.getElementById('res')
    if(fano.value.lenght == 0 || fano.value  > ano){
        window.alert('[ERRO] Ano inválido, tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 12){
                img.setAttribute('src','imagens/homem-criança.png')
                //Criança
            } else if(idade < 18 ){
                img.setAttribute('src','imagens/homem-adolecente.png')
                //Adolescente
            } else if (idade < 50){
                img.setAttribute('src','imagens/homem-adulto.png')
                //Adulto
            } else {
                img.setAttribute('src','imagens/homem-idoso.png')
                //Idoso
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade < 12){
                img.setAttribute('src','imagens/mulher-criança.png')
                //Criança
            } else if(idade < 18 ){
                img.setAttribute('src','imagens/mulher-adolecente.png')
                //Adolencete
            } else if(idade < 50){
                img.setAttribute('src','imagens/mulher-adulta.png')
                //Adulta
            } else {
                img.setAttribute('src','imagens/idosa.png')
                //Idosa 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
    
    
}
