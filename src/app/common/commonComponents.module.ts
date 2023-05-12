import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [BrowserModule, MatRadioModule, FormsModule, HttpClientModule],
  providers: [],
  exports: [NavBarComponent, FooterComponent],
})
export class CommonComponentsModule {}
