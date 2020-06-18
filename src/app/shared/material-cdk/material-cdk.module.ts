import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [],
  imports: [CommonModule, OverlayModule, MaterialCdkModule],
  exports: [OverlayModule, MaterialCdkModule],
})
export class MaterialCdkModule {}
