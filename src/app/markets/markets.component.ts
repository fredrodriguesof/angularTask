import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { FiltrosService } from '../services/filtros.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styles: [],
})

export class MarketsComponent implements OnInit {

  displayedColumns: string[] = ['name', "symbol", 'id', 'button'];

  public coins: any = [];
  dataSource = new MatTableDataSource(this.coins);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).name;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {}

  constructor(
    private cryptoService: CryptoService,
    private filterService: FiltrosService
  ) {
    this.cryptoService.getMarkets().subscribe((res: any) => {
      console.log(res);
      this.coins = res;

      this.cryptoService.setIsLoading(false);
    });
  }

  isLoading() {
    return this.cryptoService.getIsLoading();
  }

  getPatron() {
    return this.filterService.getPatron();
  }

  setPatron(event: any) {
    this.filterService.setPatron(event.target.value);
  }
}
