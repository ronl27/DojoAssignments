// CREATE A DECK OBJECT CONSTRUCTOR W/ THE FOLLOWING FUNCTIONALITY:
// The Deck should contain the 52 standard cards *
// The Deck should be able to shuffle  *
// The Deck should be able to reset *
// The Deck should be able to deal a random card *
// Deal should return the card that was dealt and remove it from the deck *


// CREATE A PLAYER CONSTRUCTOR W/ THE FOLLOWING FUNCTIONALITY:
// The Player should have a name *
// The Player should have a hand *
// The Player should be able to take a card (use the deck.deal method)
// The Player should be able to discard a card

function Deck(){
  // when function is invoked, run this code to populate deck with cards
  this.buildDeck();
}
// DECK calls the function, prototype adds a method called buildDeck
Deck.prototype.buildDeck = function(){
  var suits = ['diamonds', 'clubs', 'hearts', 'spades'],
      values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'],
      // Snapshot of this for use in callback
      self = this;

      // Cards will be placed in an empty array
      this.cards = [];
      // Using nested for loops will iterate over suits and values to create new cards
      suits.forEach(function(suit){
        values.forEach(function(value){
          self.cards.push(new Card(value, suit));
        });
      });
      return this;
}
// creating shuffle method
Deck.prototype.shuffle = function(){
  // using bost.ocks.org/mike/shuffle for shuffle logic
  var unshuffled = this.cards.length,
      cardToShuffle,
      temp;

  // While there remain elements to shuffle
  while (unshuffled > 0){
  // Select an element  in the unshuffled portion
  cardToShuffle = Math.floor(Math.random() * unshuffled);
  // Move unshuffled closer to the front of the array
  unshuffled -= 1;
  // Swap the chosen card to the back
  temp = this.cards[cardToShuffle]
  this.cards[cardToShuffle] = this.cards[unshuffled]
  this.cards[unshuffled] = temp;
  }
return this
}

Deck.prototype.reset = function(){
  this.buildDeck().shuffle();
}

Deck.prototype.dealRandomCard = function(){
  return (this.cards.length > 0) ? this.cards.pop() : null;
}

function Card(value, suit){
  this.value = value;
  this.suit = suit;
}

function Player(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.takeCard = function(deck){
  // method receives a deck, and pulls a card from the deck to add to player's hand
  this.hand.push(deck.dealRandomCard());
  return this;
}

Player.prototype.discard = function(cardIdx){
  // method receives a location of the card to remove and deletes it from the players hand
  if(this.hand.length > cardIdx){
    this.hand.splice(cardIdx, 1);
  }
  return this;
}
var ryan = new Player('Ryan');
var deck = new Deck()
