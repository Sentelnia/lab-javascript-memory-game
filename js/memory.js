class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5)
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1 === card2){
      this.pairsGuessed ++;
      return true;
    } 
    return false
  }

  isFinished() {
    let guessed = this.pairsGuessed
    let cards = this.cards.length
    if (guessed === (cards/2)){
      return true;
    }
    return false;
  }
}

