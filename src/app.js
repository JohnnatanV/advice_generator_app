const main = () => {
  result();
  const cardId = document.getElementById("cardTitle");
  const cardQuote = document.getElementById("cardQuote");
  const cardBtn = document.getElementById("cardBtn");

  function result() {
    const results = fetch("https://api.adviceslip.com/advice");

    results
      .then((res) => res.json())
      .then((response) => {
        const data = response.slip;

        cardId.innerText = `Advice #${data.id}`;
        cardQuote.innerText = data.advice;
      });
  }

  cardBtn.addEventListener("click", result);
};

document.addEventListener("DOMContentLoaded", main);
