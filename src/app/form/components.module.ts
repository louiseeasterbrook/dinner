import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormComponent, ResultComponent } from './components';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormComponent, ResultComponent],
  imports: [BrowserModule, MatRadioModule, FormsModule, HttpClientModule],
  providers: [],
  exports: [FormComponent, ResultComponent],
  bootstrap: [ComponentsModule],
})
export class ComponentsModule {}
