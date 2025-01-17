const HEADS = "Heads";
const TAILS = "Tails";

const tossCoin = () => (Math.random() >= 0.5 ? HEADS : TAILS);

const handleToss = () => {
  const result = tossCoin();
  document.getElementById("result").textContent = result;
  const resultLi = document.createElement("li");
  resultLi.textContent = result;
  document.getElementById("results").append(resultLi);
}

handleToss();

document.getElementById("toss").addEventListener("click", handleToss);
