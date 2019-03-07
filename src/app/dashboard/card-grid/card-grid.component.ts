import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/shared/models/magicthegathering/magic-the-gathering.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { MatDialog } from '@angular/material';
import { CardPopupComponent } from './card-popup/card-popup.component';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  public cards: Cards['data'];

  constructor(
    private card: MagicTheGatheringService,
    private dialog: MatDialog
  ) {
    this.cards = [];
  }

  ngOnInit() {
    this.getCards();
  }

  /**
   * Query the API to get an array containing a list of cards
   */
  getCards() {
    // Query the service to get the cards and subscribe to its response
    this.card.getCards().subscribe(
      // If we get a response
      (response: Cards) => {
        // Display only the cards in english lang to avoid duplicates
        response.data.forEach(card => {
          if (card.lang === 'en') {
            // Populates the card array
            this.cards.push(card);
          }
        });
      },
      // If we get an error, log it to the console
      (err: Error) => {
        console.error(err);
      }
    );
  }

  /**
   * Open a popup showing the card
   * @param name string
   * @param imageUris string
   */
  openDialog(name: string, imageUris: string): void {
    // Open a dialog and give it some data to display
    const dialogRef = this.dialog.open(CardPopupComponent, {
      data: {
        name,
        imageUris
      }
    });
    // Wait for it to be closed
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
