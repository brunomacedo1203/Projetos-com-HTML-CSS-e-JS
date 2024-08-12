//AÇÃO 1: Selecionar os elementos

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//AÇÃO 3: Fazer a função que converte as unidades

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

  /*AÇÃO 4: Fazer uma validação para a função não executar se os 
    valores de entrada e saída estiverem na mesma unidade*/
    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
      }

  /*AÇÃO 5: Fazer as regras de conversão usando o metro como padrão*/
  
  //PASSO 1: Converter a entrada para metros
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  //PASSO 2: Converter metros para a unidade de saída
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }

  //PASSO 3: Exibir o resultado (result)
 
 output.value = result.toFixed(2);

 // Exibir a mensagem de conversão
 const fromLabel = fromElement.options[fromElement.selectedIndex].text;
 const toLabel = toElement.options[toElement.selectedIndex].text;
 const message = `${
   inputElement.value
 } ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
 messageElement.textContent = message;
}

// Adicionar um ouvinte de eventos ao botão de conversão
convertButton.addEventListener("click", convert);