import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CardModel } from "../shared/models/magicthegathering/card-list/card.model";
import { CardListModel } from "../shared/models/magicthegathering/card-list/card-list.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
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
