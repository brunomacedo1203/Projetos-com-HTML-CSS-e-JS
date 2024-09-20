const numbers = document.querySelectorAll(".number");
const generateBtn = document.querySelector("#generate");

//FUNÇÃO QUE CRIA OS NÚMEROS
function generateNumbers() {
  //definir os números máximos e mínimos

  const max = 60;
  const min = 1;
  // criar um array para depositar os núemros
  const result = [];

  //criar números aleatórios entre o mínimo e o máximo.
  while (result.length < 6) {
    // gera números aleatórios
    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    //garantir que não seja gerado números repitidos
     // verifica se o número já foi gerado
    if (!result.includes(number)) {
     
      result.push(number); 
    }
  }
  console.log(result);

  // exibir na tela os números
  //para a bolinha na posição i vai ser preenchido com o elemento na posição i do array.
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].textContent = result[i]; 
  }

}

generateBtn.addEventListener("click", generateNumbers);
