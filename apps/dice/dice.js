const rollDice = () => Math.floor(Math.random() * 6) + 1;

const handleRoll = () => {
  const result = rollDice();
  document.getElementById("result").textContent = result;
  const resultLi = document.createElement("li");
  resultLi.textContent = result;
  document.getElementById("results").append(resultLi);
}

handleRoll();

document.getElementById("roll").addEventListener("click", handleRoll);
