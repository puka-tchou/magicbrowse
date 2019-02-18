import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardPopupModule } from './card-popup/card-popup.module';
import { CardPopupComponent } from './card-popup/card-popup.component';

@NgModule({
  declarations: [CardGridComponent],
  imports: [CommonModule, CardPopupModule, SharedModule],
  entryComponents: [CardPopupComponent],
  exports: [CardGridComponent]
})
export class CardGridModule {}
