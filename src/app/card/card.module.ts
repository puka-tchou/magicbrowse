import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { CardRoutingModule } from "./card-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, SharedModule, CardRoutingModule],
  exports: [CardComponent]
})
export class CardModule {}
