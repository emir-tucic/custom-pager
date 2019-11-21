class ClientPagerCards {
    private numberOfPages: number; // this number represents number of pages 
    private numberOfCards: number; // this number represents number of cards in pagination
    private activePage: number; // current active page


    private cardNumbers:Array<number> = []; // array of all number of cards in pagination - circular buffer
    private headIndex: number = 0; // head index in circular buffer
    private tailIndex: number = 0; // tail index in circular buffer

    constructor(numberOfPages: number, numberOfCards: number, activePage: number) {
      this.numberOfPages = numberOfPages;
      this.numberOfCards = numberOfCards
      this.activePage = activePage;
      this.setNumberOfPaginationCards();
      this.setCardNumbers();
      this.setHeadIndex();
      this.setTailIndex();
      
    //   console.log('> this.cardNumbers[this.headIndex] broj', this.cardNumbers[this.headIndex])
    //   console.log('> this.cardNumbers[this.tailIndex] broj', this.cardNumbers[this.tailIndex])
      
      this.getActiveCards();

    }
  
    private setNumberOfPaginationCards() {
      if (this.numberOfCards > this.numberOfPages) {
        this.numberOfCards = this.numberOfPages;
      } else {
        this.numberOfCards = this.numberOfCards;
      }
  
    //   console.log('> this.numberOfCards: ', this.numberOfCards);
    }
  
    private setCardNumbers() { // kreiramo niz svih polja u paginaciji 
      for (let i: number = 1; i <= this.numberOfPages; i++) {
        this.cardNumbers.push(i);
      }
    //   console.log('> this.cardNumbers', this.cardNumbers);
    }

    private setHeadIndex(){
        this.headIndex = this.cardNumbers.indexOf(this.activePage) !== -1 ? this.cardNumbers.indexOf(this.activePage) : 0;
        // console.log('> this.headIndex', this.headIndex);
    }

    private setTailIndex(){
        this.tailIndex = this.headIndex + this.numberOfCards <= ( this.cardNumbers.length - 1 ) ? this.headIndex + this.numberOfCards : this.cardNumbers.length - 1
        // console.log('> this.tailIndex', this.tailIndex);
    }

    private getActiveCards(){
        console.log('this.cardNumbers.slice(this.headIndex,this.tailIndex)',this.cardNumbers.slice(this.headIndex,this.tailIndex ));
    }
  }
  
  for(let i = 0; i <= 59; i++){
    new ClientPagerCards(59,10,i);
  }
