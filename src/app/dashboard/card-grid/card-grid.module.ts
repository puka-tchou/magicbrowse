import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardGridComponent } from "./card-grid.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CardGridComponent],
  imports: [CommonModule, SharedModule],
  exports: [CardGridComponent]
})
export class CardGridModule {}
