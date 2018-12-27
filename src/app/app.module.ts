import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LatestUsersComponent } from './latest-users/latest-users.component';
import { HttpClientModule } from '@angular/common/http';
import { PullToRefreshComponent } from './pull-to-refresh/pull-to-refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestUsersComponent,
    PullToRefreshComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
