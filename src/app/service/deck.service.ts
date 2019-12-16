
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DeckService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * I could have also generated the the cards & deck on the front end
   * then have a first observable in order to save them into the database
   * while the second observable would only fetch the deck from the DB.
   * But i found it more convenient in this test to have the deck logic on the backend.
   */
  generateCardsAndGetDeck(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl + "/deckDb");
  }
}


export class Card {
  private id: number;
  private detail: string;

  constructor() {}
}
