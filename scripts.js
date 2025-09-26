//cotação do dia
const USD = 5.16
const EUR = 5.53
const GBP = 6.20

//obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/g 
    amount.value = amount.value.replace(hasCaractersRegex, "") 
})


//capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        }
}

//função para converter o valor da moeda
function convertCurrency(amount, price, symbol) {

    try {
        //exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //calculando o valor total
        let total = amount * price
        total = formatCurrencyBRL(total)

        //exibe o resultado total
        result.textContent = `${total}`
        
        //aplica a classe que exibe o footer
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)

        //remove a classe que exibe o footer
        footer.classList.remove("show-result")
        alert("Ocorreu um erro, tente novamente.")
    }
}

//formatando o valor para o padrão brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL" 
    })
}
