//Arquivo de scripts
//Função que pega os dados do index html e escreve na tela
function create(){
    var t1 = document.getElementById('txt1')
    var t2 = document.getElementById('title')
    var t3 = document.getElementById('theme')
    var res  = document.getElementById('res')

    var name = t1.value
    var title = t2.value
    var theme = t3.value
    //Escreve na tela
    res.innerHTML = `Seus dados são: ${name} o titulo do seu projeto é ${title} o tema é ${theme}`
}
