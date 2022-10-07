/*let nome = prompt('Digite seu nome')
document.write(`Olá, ${nome}! Crie sua lista para me presentear este aniversário!`)*/
function add() {
    let text = document.getElementById('texto').value;
    let list = document.getElementById('lista').innerHTML;
    list += `<li> <input type='checkbox' onclick="marca(${text})" id="${text}" > ${text} </input> <button onclick="Excluir(${text})">  excluir  </button>  </li> `

    document.getElementById('lista').innerHTML = list;
}
function marca(nome) {
    if (nome.checked) {
        let popup = document.getElementById('popup').style.display = "block";
    }
}
let valores = 0
function preco(){
    let f = Number.parseFloat(document.getElementById('valor').value)
    let total = document.getElementById('total')
   valores += f
   total.innerHTML = valores
} 
    
function fechar(){
    let f = document.getElementById('popup').style.display = "none";
}
function Excluir(nome) {
    let X = nome.parentElement
    X.style.display = "none";
}