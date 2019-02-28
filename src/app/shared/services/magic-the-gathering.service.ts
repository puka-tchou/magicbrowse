import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Cards,
  CardsAutocomplete
} from '../models/magicthegathering/magic-the-gathering.model';

@Injectable({
  providedIn: 'root'
})
export class MagicTheGatheringService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<Cards> {
    return this.http.get<Cards>('https://api.scryfall.com/cards');
  }

  searchCard(): Observable<CardsAutocomplete> {
    return this.http.get<CardsAutocomplete>(
      'https://api.scryfall.com/cards/autocomplete?q='
    );
  }
}
