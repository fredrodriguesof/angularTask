import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CoinDetail } from 'src/app/models/coin.model';
import { CryptoService } from '../../../services/crypto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {

  private id: string = "";

  // public readonly coin$: Observable<CoinDetail> = this.route.params.pipe(switchMap(res => this.cryptoService.getCoinById(res['id'])));
  public coin: CoinDetail;

  constructor(
    private route: ActivatedRoute,
    private cryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
    });

    this.cryptoService.getCoinById(this.id).subscribe((res: any) => {
      this.coin = res;
    });
  }

}
