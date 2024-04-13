/*document.addEventListener("DOMContentLoaded", function () {
  let firstCard = null;
  let secondCard = null;
  let isClickable = true; // flag to prevent clicking while cards are flipping

  const cards = document.querySelectorAll(".card-position");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      if (!isClickable) return; // prevent clicking while cards are flipping
      if (!firstCard && !card.classList.contains("flipped")) {
        firstCard = card;
        openCard(card);
      } else if (
        card !== firstCard &&
        !secondCard &&
        !card.classList.contains("flipped")
      ) {
        secondCard = card;
        openCard(card);
        setTimeout(checkMatch, 1000);
      }
    });
  });

  function openCard(card) {
    card.classList.add("flipped");
  }

  function closeCard(card) {
    card.classList.remove("flipped");
  }

  function disableClick() {
    isClickable = false;
  }

  function enableClick() {
    isClickable = true;
  }

  function checkMatch() {
    disableClick(); // prevent clicking while checking for match
    const firstImgAlt = firstCard.querySelector("img").getAttribute("alt");
    const secondImgAlt = secondCard.querySelector("img").getAttribute("alt");

    if (firstImgAlt === secondImgAlt) {
      firstCard = null;
      secondCard = null;
      enableClick(); // enable clicking after checking for match
    } else {
      setTimeout(() => {
        closeCard(firstCard);
        closeCard(secondCard);
        firstCard = null;
        secondCard = null;
        enableClick(); // enable clicking after cards are closed
      }, 3000);
    }
  }
});
*/
