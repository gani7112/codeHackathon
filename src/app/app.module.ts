import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CodeathonComponent } from './codeathon/codeathon.component';
import { CodeathonparentComponent } from './codeathonparent/codeathonparent.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeathonComponent,
    CodeathonparentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
