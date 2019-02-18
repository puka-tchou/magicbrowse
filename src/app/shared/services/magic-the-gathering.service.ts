import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MagicTheGatheringModel } from '../models/magicthegathering/magic-the-gathering.model';

@Injectable({
  providedIn: 'root'
})
export class MagicTheGatheringService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<MagicTheGatheringModel> {
    return this.http.get<MagicTheGatheringModel>(
      'https://api.scryfall.com/cards'
    );
  }
}
