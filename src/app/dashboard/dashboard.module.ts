import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { CardGridModule } from "./card-grid/card-grid.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, CardGridModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
