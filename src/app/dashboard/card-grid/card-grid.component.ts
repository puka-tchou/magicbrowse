import { Component, OnInit } from "@angular/core";
import { CardModel } from "src/app/shared/models/magicthegathering/card-list/card.model";
import { HttpClient } from "@angular/common/http";
import { CardListModel } from "src/app/shared/models/magicthegathering/card-list/card-list.model";

@Component({
  selector: "app-card-grid",
  templateUrl: "./card-grid.component.html",
  styleUrls: ["./card-grid.component.scss"]
})
export class CardGridComponent implements OnInit {
  public cards: CardModel[];
  constructor(private http: HttpClient) {
    this.cards = [];
  }

  ngOnInit() {
    this.http.get("https://api.magicthegathering.io/v1/cards").subscribe(
      (data: CardListModel) => {
        this.cards = data.cards;
      },
      err => {
        console.log(err);
      }
    );
  }
}
