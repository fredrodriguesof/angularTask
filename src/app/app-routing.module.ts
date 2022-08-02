import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { MarketsComponent } from './markets/markets.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'markets', component: MarketsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
