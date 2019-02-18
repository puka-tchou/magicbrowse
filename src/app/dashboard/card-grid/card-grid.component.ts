import { Component, OnInit } from '@angular/core';
import { MagicTheGatheringModel } from 'src/app/shared/models/magicthegathering/magic-the-gathering.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { MatDialog } from '@angular/material';
import { CardPopupComponent } from './card-popup/card-popup.component';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  public cards: MagicTheGatheringModel[];

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
      (response: MagicTheGatheringModel) => {
        console.log(response.data);
        this.cards = response.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  openDialog(id: string, name: string, image_uris: string): void {
    this.dialog.open(CardPopupComponent, {
      data: {
        name,
        image_uris
      }
    });
  }
}
