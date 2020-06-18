import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CardGridModule } from './card-grid/card-grid.module';
import { CardSingleModule } from './card-single/card-single.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardGridModule,
    CardSingleModule,
    SearchModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
