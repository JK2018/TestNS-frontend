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

  showDeck() {
    this.deckService
      .generateCardsAndGetDeck()
      .subscribe(data => (this.deck = data));
  }
}
