const generateBalotoNumbers = () => {
  const mainNumbers = [];
  while (mainNumbers.length < 5) {
    const num = Math.floor(Math.random() * 43) + 1;
    if (!mainNumbers.includes(num)) mainNumbers.push(num);
  }
  const bonusNumber = Math.floor(Math.random() * 16) + 1;
  return { mainNumbers, bonusNumber };
}

const handleGenerate = () => {
  const { mainNumbers, bonusNumber } = generateBalotoNumbers();
  const result = `${mainNumbers.sort((a, b) => a - b).join(", ")} | ${bonusNumber}`;
  document.getElementById("result").textContent = result;
  const resultLi = document.createElement("li");
  resultLi.textContent = result;
  document.getElementById("results").append(resultLi);
}

handleGenerate();

document.getElementById("generate").addEventListener("click", handleGenerate);
