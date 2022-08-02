import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin, CoinDetail } from '../models/coin.model';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private readonly URI: string = 'https://api.coingecko.com/api/v3';

  private isLoading: boolean = false;

  constructor(private http: HttpClient) {
  }

  getCoinById(id: string): Observable<CoinDetail> {
    return this.http.get<CoinDetail>(`${this.URI}/coins/${id}`);
  }

  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${this.URI}/coins/list`);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  getIsLoading() {
    return this.isLoading;
  }
}
