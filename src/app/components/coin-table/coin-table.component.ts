import { ApiService } from 'src/app/services/api.service';
import { Coins } from 'src/app/models/coins.models';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss'],
})
export class CoinTableComponent implements OnInit {

  public displayedColumns: string[] = ["id", "symbol", "name", "details"];
  public coins$: Observable<Coins[]> = of([]);

  constructor(
    private ApiService: ApiService
  ) {}

  ngOnInit(): void {
  this.coins$ = this.ApiService.getCoins();
      // If the user changes the sort order, reset back to the first page.
 }

}

