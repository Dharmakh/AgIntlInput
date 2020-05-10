import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InltInputTempFormComponent } from './inlt-input-temp-form/inlt-input-temp-form.component';
import { IntlInputComponent } from './intl-input/intl-input.component';


// const routes: Routes = [];

const routes: Routes = [
  { path: '', component: IntlInputComponent },
  { path: 'template-form', component: InltInputTempFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
