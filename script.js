//Arquivo de scripts
//Função que pega os dados do index html e escreve na tela
function create(){
    var t1 = document.getElementById('txt1')
    var t2 = document.getElementById('title')
    var res  = document.getElementById('res')
    
    var nome = t1.value
    var title = t2.value
    //Escreve na tela
    res.innerHTML = `Seus dados são: ${nome} o titulo do seu projeto é ${title}`
}
