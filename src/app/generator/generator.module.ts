import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components';

@NgModule({
  declarations: [FormComponent],
  imports: [BrowserModule, MatRadioModule, FormsModule, HttpClientModule],
  providers: [],
  exports: [FormComponent],
})
export class GeneratorsModule {}
