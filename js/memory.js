class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = [];
    this.pairsGuessed = [];
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5)
  }

  checkIfPair(card1, card2) {}
  isFinished() {}
}

