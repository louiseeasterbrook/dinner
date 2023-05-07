import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormComponent, NavBarComponent } from './components';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormComponent, NavBarComponent],
  imports: [BrowserModule, MatRadioModule, FormsModule, HttpClientModule],
  providers: [],
  exports: [FormComponent],
  bootstrap: [ComponentsModule],
})
export class ComponentsModule {}
