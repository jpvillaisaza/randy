const getInt = value => {
  const n = parseInt(value);
  if (!isNaN(n) && isFinite(n) && n - value === 0) {
    return n;
  }
  return 59;
};

const params = new URLSearchParams(window.location.search);
const n = getInt(params.get("time"));
const form = document.getElementById("form");
const time = document.getElementById("time");
var second = n;
time.innerText = second;

setInterval(_ => {
  if (second) {
    second = n >= 0 ? second - 1 : second + 1;
  } else {
    second = n;
    form.reset();
  };
  time.innerText = second;
}, 1000);

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("form").reset();
});
