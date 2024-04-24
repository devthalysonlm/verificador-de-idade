function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.getElementById('res')
    if(fano.value == 0 || fano.value  > ano){
        alert('[ERRO] Ano inválido, tente novamente!')
    } else {
        alert('Tudo ok!')
    }
    
    
}
