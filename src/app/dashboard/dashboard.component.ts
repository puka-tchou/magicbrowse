import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagicTheGatheringService } from '../shared/services/magic-the-gathering.service';
import { CardsAutocomplete } from '../shared/models/magicthegathering/magic-the-gathering.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public query: string;
  // public searchedCard: string;
  public cards: CardsAutocomplete['data'];

  constructor(
    private activeRoute: ActivatedRoute,
    private card: MagicTheGatheringService
  ) {
    this.query = null;
  }

  ngOnInit() {
    this.activeRoute.url.subscribe(
      () => (this.query = this.activeRoute.snapshot.params['query'])
    );
  }

  /**
   * Search a card
   */
  search(event: KeyboardEvent) {
    // Check if the event comes from the user
    if (event.isTrusted) {
      const searchedCard: String = (<HTMLTextAreaElement>event.target).value;
      // If the query is not empty
      if (searchedCard.length !== 0) {
        // Subscribe to the API answer
        this.card.searchCard(searchedCard).subscribe(
          // When we get a response
          (response: CardsAutocomplete) => {
            // If the response has data to display
            if (response.total_values !== 0) {
              // Populate the Array
              this.cards = response.data;
              // Log the answer
              console.info(this.cards);
            }
          },
          // If the answer is an error
          (err: Error) => {
            // TODO: improve the error handling
            // Log the error
            console.error(err);
          }
        );
      }
    }
  }
}
