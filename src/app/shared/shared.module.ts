import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, HttpClientModule, RouterModule],
  exports: [MaterialModule, HttpClientModule, RouterModule],
})
export class SharedModule {}
