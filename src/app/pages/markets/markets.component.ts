import { Component, OnInit, ViewChild } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { FiltrosService } from '../../services/filtros.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent {
  displayedColumns: string[] = ['name', 'symbol', 'id', 'button'];
  dataSource = new MatTableDataSource();

  constructor(private cryptoService: CryptoService, private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.cryptoService.getCoins().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
