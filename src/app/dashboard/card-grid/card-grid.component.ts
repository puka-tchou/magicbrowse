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

  getCards() {
    this.card.getCards().subscribe(
      (response: Cards) => {
        this.cards = response.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  openDialog(name: string, imageUris: string): void {
    const dialogRef = this.dialog.open(CardPopupComponent, {
      data: {
        name,
        imageUris
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
