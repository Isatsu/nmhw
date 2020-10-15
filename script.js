//Arquivo de scripts
//Função que pega os dados do index html e escreve na tela
function create(){
    var t1 = document.getElementById('txt1')
    var t2 = document.getElementById('title')
    var t3 = document.getElementById('theme')
    var res  = document.getElementById('res')

    //Dados do usuario 
    var name = t1.value
    var title = t2.value
    var theme = t3.value

    //Cria o pdf
    var doc = new jsPDF()
    doc.text(`Nome: ${name}`, 10, 10)
    doc.text(`${title}`, 80, 20)
    doc.save(`${title}.pdf`)

    //Escreve na tela
    res.innerHTML = `Seus dados são: ${name} o titulo do seu projeto é ${title} o tema é ${theme}`
}
