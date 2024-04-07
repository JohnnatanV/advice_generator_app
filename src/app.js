document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  const cardId = document.getElementById("cardTitle");
  const cardQuote = document.getElementById("cardQuote");
  const cardBtn = document.getElementById("cardBtn");

  let url = "https://api.adviceslip.com/advice";

  async function result(getData) {
    try {
      const urlData = await fetch(getData);
      const response = await urlData.json();
      const data = await response.slip;

      if (data.id === parseInt(cardId.innerText.slice(8))) result(url);

      cardId.innerText = `advice #${data.id}`;
      cardQuote.innerText = `"${data.advice}"`;
    } catch (error) {
      console.log(`Error caught: ${error.message}`);
    }
  }

  cardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    result(url);
  });

  result(url);
}
