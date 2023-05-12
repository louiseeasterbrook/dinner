import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipePageComponent, SearchPageComponent } from './components';
import { CommonComponentsModule } from '../common/commonComponents.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RecipePageComponent, SearchPageComponent],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    CommonComponentsModule,
    CommonModule,
    MatIconModule,
  ],
  providers: [],
  exports: [SearchPageComponent, RecipePageComponent],
})
export class RecipeModule {}
