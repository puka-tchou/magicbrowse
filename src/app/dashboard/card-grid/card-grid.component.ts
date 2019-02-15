import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CardModel } from "src/app/shared/models/magicthegathering/card-list/card.model";
import { CardListModel } from "src/app/shared/models/magicthegathering/card-list/card-list.model";
import { MagicTheGatheringService } from "src/app/shared/services/magic-the-gathering.service";

@Component({
  selector: "app-card-grid",
  templateUrl: "./card-grid.component.html",
  styleUrls: ["./card-grid.component.scss"]
})
export class CardGridComponent implements OnInit {
  public cards: CardModel[];
  constructor(private card: MagicTheGatheringService) {
    this.cards = [];
  }

  ngOnInit() {
    this.card.getCards().subscribe(
      (data: CardListModel) => {
        this.cards = data.cards;
      },
      err => {
        console.log(err);
      }
    );
  }
}
