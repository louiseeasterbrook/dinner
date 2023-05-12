import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultBarComponent } from './components/result-bar/result-bar.component';

@NgModule({
  declarations: [NavBarComponent, FooterComponent, ResultBarComponent],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  exports: [NavBarComponent, FooterComponent, ResultBarComponent],
})
export class CommonComponentsModule {}
