import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntlInputComponent } from './intl-input/intl-input.component';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InltInputTempFormComponent } from './inlt-input-temp-form/inlt-input-temp-form.component';


@NgModule({
  declarations: [
    AppComponent,
    IntlInputComponent,
    InltInputTempFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
		ReactiveFormsModule,
		NgxIntlTelInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
