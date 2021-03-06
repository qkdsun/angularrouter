import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ChatComponent } from './chat/chat.component';
import { PermissionGuard } from './Permission.Guard';
import { FocusGuard } from './focusGuard';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HomeComponent,
    Code404Component,
    BuyerListComponent,
    SellerListComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard,FocusGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
