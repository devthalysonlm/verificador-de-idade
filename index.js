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
                //Criança
            } else if(idade < 18 ){
                //Adolescente
            } else if (idade < 50){
                //Adulto
            } else {
                //Idoso
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade < 12){
                img.setAttribute('src','mulher-criança.png')
                //Criança
            } else if(idade < 18 ){
                //Adolencete
            } else if(idade < 50){
                //Adulta
            } else {
                //Idosa 
            }
        }
        res.innerHTML = `Identificado ${genero} com ${idade} anos`
    }
    
    
}
