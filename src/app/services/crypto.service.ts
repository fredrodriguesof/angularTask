import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private URI: string = '';

  private isLoading: boolean = false;

  constructor(private http: HttpClient) {
    this.URI = `https://api.coingecko.com/api/v3/coins/list`;
  }

  getCoinById(id: string) {
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  }

  getMarkets() {
    this.isLoading = true;

    return this.http.get(this.URI);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  getIsLoading() {
    return this.isLoading;
  }
}
