const quotes = [
  {
    quote: "A persistência é o caminho do êxito.",
    author: "Charles Chaplin",
  },
  {
    quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
    author: "Steve Jobs",
  },
  {
    quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    author: "Robert Collier",
  },
  {
    quote:
      "O fracasso é a oportunidade de começar de novo, com mais experiência.",
    author: "Henry Ford",
  },
  {
    quote: "Não espere por oportunidades, crie você mesmo as suas.",
    author: "Autor desconhecido",
  },
  {
    quote:
      "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
    author: "Winston Churchill",
  },
  {
    quote:
      "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
    author: "Winston Churchill",
  },
  {
    quote: "Acredite em si próprio e todo o resto virá naturalmente.",
    author: "Elon Musk",
  },
  {
    quote:
      "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
    author: "Autor desconhecido",
  },
];

const quoteBtn = window.document.querySelector("#quoteBtn");
const quoteText = window.document.querySelector(".text");
const quoteAuthor = window.document.querySelector(".author");

function getQuote() {
  //vamos criar uma constante para selecionar aleatoriamente um dos elementos do Array quotes
  // Math.randow vai gerar números aleatório entre 0 e 1
  // quotes.length é o comprimento do array
  //A multiplicação de Math.random() * quotes.length faz com que o número aleatório máximo seja o número de elemntos do Array
  //Por exemplo, se o Array quotes contiver 5 elementos, quotes.length será 5.
  // O Math.floor é pra arrendodar o resultado para um numero natural
  //Resumindo, esse trecho todo faz com que seja gerado números aleatório entre zero e o número de elementos do array quotes
  const index = Math.floor(Math.random() * quotes.length);

  // Agora vamos pegar as propriedades de cada objeto (texto do autor)
  // quotes[index] acessa um objeto no array quotes que está na posição index.
  // quotes[index].quote acessa a propriedade de nome quote do objeto selecionado anteriormente
  //que tem dentro o texto da citação.
  // quoteText.textContent joga como texto dentro do elemento selecionado no html.
  quoteText.textContent = quotes[index].quote;

  //O trecho a seguir faz o mesmo, só que para pegar o nome do autor da citação
  quoteAuthor.textContent = "- " + quotes[index].author;
  console.log(index);
}

quoteBtn.addEventListener("click", getQuote);

//IDEIA PRA INCREMENTAR
// Construir um backend que forneça as citações e por meio de um fetch (uma requisição assincrona)
// trazer estes dados para o projeto com dados que podem ser alterados por meio de uim banco de dados
