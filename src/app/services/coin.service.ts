import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private infoCoins: any = [];

  constructor() {

  }

 getCoinInfo(coinName: any) {
    if (!this.infoCoins.some((coin: any) => coinName.id == coin.id)) {
      this.infoCoins.push(coinName);
    }
  }

  getInfoCoins() {
    return this.infoCoins;
  }

}
