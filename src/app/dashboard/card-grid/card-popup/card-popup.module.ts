import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPopupComponent } from './card-popup.component';
import { CardSingleModule } from '../../card-single/card-single.module';

@NgModule({
  declarations: [CardPopupComponent],
  imports: [CommonModule, CardSingleModule],
})
export class CardPopupModule {}
