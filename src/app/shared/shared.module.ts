import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    FormsModule,

  ],
  declarations: []
})
export class SharedModule { }
