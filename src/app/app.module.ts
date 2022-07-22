import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSettingsFormsComponent } from './user-settings-forms/user-settings-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
