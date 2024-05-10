const form = document.getElementById('form-cadastro')
const contatos = []
const numerosTel = []

let linhas = ''

form.addEventListener('submit', function (e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroCadastrado = document.getElementById('numero-cadastrado')

    if (contatos.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido.`)
    } else {
        contatos.push(inputNomeContato.value)
        numerosTel.push(Number(inputNumeroCadastrado.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroCadastrado.value}</td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroCadastrado.value =''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}