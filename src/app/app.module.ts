import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { CodeathonComponent } from './codeathon/codeathon.component';
import { CodeathonparentComponent } from './codeathonparent/codeathonparent.component';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CodeathonComponent,
    CodeathonparentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"",component:AppComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    
  }
}
