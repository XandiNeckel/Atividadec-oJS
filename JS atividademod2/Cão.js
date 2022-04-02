// alert(`Olá, você será direcionado para preencher os dados de seu doguinho, favor clicar em OK!`);
var btnLatir = document.querySelector('#btn-Latir')
var btnComer = document.querySelector('#btn-Comer')

var Dog = {
    //Propriedades / VARIAVEIS 
    Raca: '',
    Cor: '',
    Porte: '',
    Idade: 0,
    Nome: '',           //'' espaços vazios são os que serão declarados nos campos de textos
    Personalidade: '',
    Temperamento: '',
    Adestrado: '',
    Castrado: '',

    InsertDog: function (PRaca, PCor, PPorte, PIdade, PNome, PPersonalidade, PTemperamento, PAdestrado, PCastrado) {
        Dog.Raca = PRaca; //P no inicio de todos por ser PARAMETRO
        Dog.Cor = PCor; 
        Dog.Porte = PPorte;
        Dog.Idade = PIdade;
        Dog.Nome = PNome;
        Dog.Personalidade = PPersonalidade;
        Dog.Temperamento = PTemperamento;
        Dog.Adestrado = PAdestrado;
        Dog.Castrado = PCastrado;

        btnLatir.style.display='block' //estilizar o botão
        btnComer.style.display='block' //estilizar o botão
        
    },
    GetDog: function() {
        alert(`
        Raça: ${Dog.Raca}\n
        Cor: ${Dog.Cor}\n
        Porte: ${Dog.Porte}\n
        Idade: ${Dog.Idade}\n
        Nome: ${Dog.Nome}\n
        Personalidade: ${Dog.Personalidade}\n
        Temperamento: ${Dog.Temperamento}\n
        Adestrado: ${Dog.Adestrado}\n
        Castrado: ${Dog.Castrado}
        `);
    },
    Latir: function () {
        alert(`${Dog.Nome} Está Latindo!`)
    },
    Comer: function () {
        alert(`${Dog.Nome} Está Comendo!`)
    }

}

//queryselector é oque eu seleciono no HTML id(puxar nome com #)      classes(com . ) ou só nome ex: form
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault() // PREVINIR O EVENTO (SUBMIT)
})
                                            //adicionar um evento ex: 'click' [click é padrão]
document.querySelector('#btn-send').addEventListener('click', function () {
    
    Dog.InsertDog(document.getElementById('Raca').value, // [value é o preenchimento(que o usuario preencheu) no campo de texto]
        document.getElementById('Cor').value,
        document.getElementById('Porte').value,
        document.getElementById('Idade').value,
        document.getElementById('Nome').value,
        document.getElementById('Personalidade').value,
        document.getElementById('Temperamento').value,
        document.getElementById('Adestrado').value,
        document.getElementById('Castrado').value)
})

document.querySelector('#btn-get').addEventListener('click',Dog.GetDog)

btnLatir.addEventListener('click',Dog.Latir)

btnComer.addEventListener('click',Dog.Comer)