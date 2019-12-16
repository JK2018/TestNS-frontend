import { DeckService, Card } from './../../service/deck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  private deck: Card[];

  constructor(private deckService: DeckService) {}

  ngOnInit() {
    this.showDeck();
  }


   /**
   * Bonus1
   * Allows to shuffle the deck
   */
  doShuffle() {
    this.shuffleArray(this.deck);
  }


  showDeck() {
    this.deckService
      .generateCardsAndGetDeck()
      .subscribe(data => (this.deck = data));
  }


  shuffleArray(deck) {
    var m = deck.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
    return deck;
  }







}
