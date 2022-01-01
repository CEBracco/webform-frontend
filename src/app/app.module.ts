import { LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es-AR';
registerLocaleData(localeEs, 'es-AR');
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { registerLocaleData, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-AR" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: '$' },
    CurrencyPipe,
    DecimalPipe,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
