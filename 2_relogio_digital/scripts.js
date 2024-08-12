//Vamos criar uma função para pegar os dados de horas, minutos e segundos//

function updateClock() {
  //Passo 1: Selecionar os Elementos HTML//
  const hoursElement = window.document.querySelector(".hours");
  const minutesElement = window.document.querySelector(".minutes");
  const secondsElement = window.document.querySelector(".seconds");

  //Passo 2: Obter Hora Atual e Armazená-la em Constantes//
  //Para tanto vamos usar o objeto Date e extrair as horas, minutos e segundos dele//
  //Além disso vamos formatar em strings e garantir que tenham 2 dígitos//
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  
  //Passo 3: Atualizar o Conteúdo dos Elementos HTML//
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  
  console.log(now);
}

//Passo 4: Atualizar o Relógio a Cada Segundo//
//updateClock vai atualizar a função updateClock a cada segundo. //
setInterval(updateClock, 1000);
