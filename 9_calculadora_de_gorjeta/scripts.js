const calculateBtn = document.querySelector("#calculateBtn");

function calculateTip() {
  // Obter valor da conta e qualidade do serviço
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const serviceQuality = parseFloat(
    document.getElementById("serviceQuality").value
  );

  // Validar entrada
  if (billAmount === "" || serviceQuality == 0) {
    alert("Por favor, preencha os campos!");
    return;
  }

  // Calcular gorjeta e valor total
  const tipAmount = billAmount * serviceQuality;
  const totalAmount = billAmount + tipAmount;

  // Exibir resultados
  const tipAmountInput = document.querySelector("#tipAmount");
  const totalAmountInput = document.querySelector("#totalAmount");

  tipAmountInput.value = tipAmount.toLocaleString("pt-Br", {
    style: "currency",
    currency: "BRL",
  });
  totalAmountInput.value = totalAmount.toLocaleString("pt-Br", {
    style: "currency",
    currency: "BRL",
  });
}

calculateBtn.addEventListener("click", calculateTip);
