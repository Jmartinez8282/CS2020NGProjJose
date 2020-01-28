import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { MainComponent } from './views/main/main.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDescComponent } from './views/product-desc/product-desc.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModaldescComponent } from './shared/modaldesc/modaldesc.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductListComponent,
    ProductDescComponent,
    ModaldescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
