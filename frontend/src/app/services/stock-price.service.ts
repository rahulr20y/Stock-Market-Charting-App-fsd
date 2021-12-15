import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/Company';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StockPrice } from '../models/StockPrice';
import { Comparison } from '../models/Comparison';

const BACKEND_URL = environment.apiUrl + '/STOCK-PRICE-SERVICE/stockPrices/';

@Injectable({providedIn: 'root'})
export class StockPriceService {

  url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = BACKEND_URL;
  }

  public getStockPrices(): Observable<StockPrice[]> {
    return this.http.get<StockPrice[]>(this.url);
  }

  getStockPrice(id: string): Observable<StockPrice> {
    return this.http.get<StockPrice>(this.url + id);
  }

  addStockPriceList(stockPrices: StockPrice[]) {
    this.http.post<StockPrice[]>(this.url, stockPrices)
      .subscribe(response => response);
  }

  updateStockPrice(stockPrice: StockPrice) {
    this.http.put(this.url, stockPrice)
      .subscribe(response => {
        this.router.navigate(['/stock-prices']);
      });
  }

  deleteStockPrice(id: string) {
    this.http.delete(this.url + id)
      .subscribe(response => {
        this.router.navigate(['/stock-prices']);
      });
  }

  getCompanyStockPrices(comparison: Comparison) {
    return this.http.post<StockPrice[]>(this.url + '/compareCompany', comparison);
  }

  getSectorStockPrices(comparison: Comparison) {
    return this.http.post<StockPrice[]>(this.url + '/compareSector', comparison);
  }
}

