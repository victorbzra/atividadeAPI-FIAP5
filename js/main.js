let inputCEP = document.querySelector('#inputCEP')
let inputLOGA = document.querySelector('#inputLOGA')
let inputBAIRRO = document.querySelector('#inputBAIRRO')
let inputESTADO = document.querySelector('#inputESTADO')
let inputCIDADE = document.querySelector('#inputCIDADE')
const buttonProx = document.querySelector('.prosseguir')

const searchCEP = async(cep) => {
    if(inputCEP.value == false) {
        alert('Insira seu CEP!')
    }
    else {
        cep = inputCEP.value
        url = `https://viacep.com.br/ws/${cep}/json/`
    
        const dados = await fetch(url)
        const endereco = await dados.json()
        
        inputLOGA.value = endereco.logradouro
        inputBAIRRO.value = endereco.bairro
        inputESTADO.value = endereco.uf
        inputCIDADE.value = endereco.localidade
    }
}

buttonProx.addEventListener('click', searchCEP)