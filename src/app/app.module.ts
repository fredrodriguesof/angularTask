import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketsComponent } from './markets/markets.component';
import { DetailComponent } from './detail/detail.component';
import { SearchPipe } from './filtros/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MarketsComponent,
    DetailComponent,
    SearchPipe,
    NavComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule,  MatTableModule, FormsModule, MatFormFieldModule, MatInputModule  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
