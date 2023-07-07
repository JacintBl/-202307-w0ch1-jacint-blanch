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
