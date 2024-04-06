document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  const cardId = document.getElementById("cardTitle");
  const cardQuote = document.getElementById("cardQuote");
  const cardBtn = document.getElementById("cardBtn");

  async function result() {
    let url = "https://api.adviceslip.com/advice";
    const urlData = await fetch(url);
    const response = await urlData.json();
    const data = await response.slip;
    console.log(response);
    if (data.id === parseInt(cardId.innerText.slice(8))) {
      result();
    } else {
      cardId.innerText = `advice #${data.id}`;
      cardQuote.innerText = `"${data.advice}"`;
    }
  }
  cardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    result();
  });
  result();
}
