import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSingleComponent } from './card-single.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CardSingleComponent],
  imports: [CommonModule, SharedModule],
  exports: [CardSingleComponent]
})
export class CardSingleModule {}
