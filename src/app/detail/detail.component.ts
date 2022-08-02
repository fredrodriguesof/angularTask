import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {

private id: string = "";

coin: any = {};

  constructor(
    private route: ActivatedRoute,
    private cryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
    });

    this.getCoin();
  }

  getCoin() {
    return this.cryptoService.getCoinById(this.id).subscribe((res: any) => {
      console.log(res);

      this.coin.name = res.name;
      this.coin.image = res.image.large;
      this.coin.imageIcon = res.image.thumb;
      this.coin.symbol = res.symbol;
      this.coin.genesis_date = res.genesis_date;
      this.coin.categories = res.categories;
      this.coin.id = res.id;
      this.coin.desc = res.description.en;
    });
  }
}
