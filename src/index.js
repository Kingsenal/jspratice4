const clockTitle = document.querySelector(".js-clock");

function getXmas() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const Xmas = new Date(2021, 11, 25);
  const gap = Xmas.getTime() - date.getTime();
  const result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  clockTitle.innerText = `${result}d ${hours}h ${minutes}m ${seconds}s`;
}

getXmas();
setInterval(getXmas, 1000);
