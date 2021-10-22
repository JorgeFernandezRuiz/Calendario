import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoraActualComponent } from './hora-actual/hora-actual.component';
import { DiaActualComponent } from './dia-actual/dia-actual.component';
import { LOCALE_ID } from '@angular/core';
import localeEsEs from '@angular/common/locales/es';
import {registerLocaleData} from "@angular/common";
import { GridDiasComponent } from './grid-dias/grid-dias.component';

registerLocaleData(localeEsEs);
@NgModule({
  declarations: [
    AppComponent,
    HoraActualComponent,
    DiaActualComponent,
    GridDiasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-ES" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
