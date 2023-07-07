const buttonInitiate = document.querySelector(".buttonInitiate");
const landing = document.querySelector(".landing");
const game = document.querySelector(".game");
const gameText = document.querySelector(".gameText");

const gameWon = document.querySelector(".gameWon");
const gameLost = document.querySelector(".gameLost");

const buttonMore = document.querySelector(".buttonMore");
const buttonLess = document.querySelector(".buttonLess");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

const deckCards = () => {
  const cardSuit = ["♥️", "♠️", "♦️", "♣️"];
  const cardValue = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  let deck = [];
  cardValue.forEach((value) => {
    cardSuit.forEach((suit) => {
      let card = `${value} ${suit}`;
      deck.push(card);
    });
  });

  return deck;
};

const pickRandomCard = (deck) => {
  const randomValue = Math.floor(Math.random() * deck.length);
  const randomCard = `${deck[randomValue]}`;

  return randomCard;
};

const playGame = () => {
  const deckToPlay = deckCards();
  let randomCard = pickRandomCard(deckToPlay);

  const initiateGame = () => {
    card1.textContent = randomCard;
    card2.textContent = "Your Card";
    randomCard = pickRandomCard(deckToPlay);
    randomCardCompare = pickRandomCard(deckToPlay);

    gameLost.classList.add("hidden");
    gameWon.classList.add("hidden");
    gameText.classList.remove("hidden");
  };

  buttonInitiate.addEventListener("click", function () {
    card1.textContent = randomCard;
    landing.classList.add("hidden");
    game.classList.remove("hidden");
  });

  buttonMore.addEventListener("click", function () {
    card2.textContent = randomCardCompare;
    if (
      deckToPlay.indexOf(randomCard) >= deckToPlay.indexOf(randomCardCompare)
    ) {
      gameLost.classList.remove("hidden");
      gameText.classList.add("hidden");
    }
    if (
      deckToPlay.indexOf(randomCard) < deckToPlay.indexOf(randomCardCompare)
    ) {
      gameWon.classList.remove("hidden");
      gameText.classList.add("hidden");
    } else if (
      deckToPlay.indexOf(randomCard) === deckToPlay.indexOf(randomCardCompare)
    ) {
      gameLost.classList.remove("hidden");
      gameText.classList.add("hidden");
    }
    setTimeout(initiateGame, 4000);
  });

  buttonLess.addEventListener("click", function () {
    card2.textContent = randomCardCompare;

    if (
      deckToPlay.indexOf(randomCard) <= deckToPlay.indexOf(randomCardCompare)
    ) {
      gameLost.classList.remove("hidden");
      gameText.classList.add("hidden");
    }
    if (
      deckToPlay.indexOf(randomCard) > deckToPlay.indexOf(randomCardCompare)
    ) {
      gameWon.classList.remove("hidden");
      gameText.classList.add("hidden");
    } else if (
      deckToPlay.indexOf(randomCard) === deckToPlay.indexOf(randomCardCompare)
    ) {
      gameLost.classList.remove("hidden");
      gameText.classList.add("hidden");
    }
    setTimeout(initiateGame, 4000);
  });
};
playGame();
