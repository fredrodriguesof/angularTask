import { Coins } from '../models/coins.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoinsDetails } from '../models/coinsDetails.models'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://api.coingecko.com/api/v3';

  constructor(private http: HttpClient) {
  }

  getCoins(): Observable<Coins[]> {
    return this.http.get<Coins[]>(`${this.baseUrl}/coins/list`);
  }

  getDetailCoins(): Observable<CoinsDetails> {
    return this.http.get<CoinsDetails>(`${this.baseUrl}/coins/list`);
  }

 }
