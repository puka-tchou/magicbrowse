import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardModel } from 'src/app/shared/models/magicthegathering/card-list/card.model';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list/card-list.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { MatDialog } from '@angular/material';
import { CardPopupComponent } from './card-popup/card-popup.component';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  public cards: CardModel[];
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
      (data: CardListModel) => {
        this.cards = data.cards;
      },
      err => {
        console.log(err);
      }
    );
  }

  openDialog(id: string, name: string, imageUrl: string): void {
    this.dialog.open(CardPopupComponent, {
      // height: '400px',
      // width: '600px',
      data: {
        id,
        name,
        imageUrl
      }
    });
  }
}
