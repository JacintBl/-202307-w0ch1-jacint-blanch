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

  buttonInitiate.addEventListener("click", function () {
    card1.textContent = randomCard;
    landing.classList.add("hidden");
    game.classList.remove("hidden");
  });
};
playGame();
