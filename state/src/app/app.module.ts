import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { GridComponent } from './Components/Grid/grid';
import { CartState } from './State/app.state';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      CartState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, GridComponent]
})
export class AppModule { }
