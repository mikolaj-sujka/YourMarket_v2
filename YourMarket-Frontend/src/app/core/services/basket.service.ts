import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private apiUrl = 'http://localhost:3005/api/basket';

  constructor(private http: HttpClient) {}

  addToBasket(userId: string, productId: string, name: string, price: number, quantity: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, { userId, productId, name, price, quantity });
  }

  getBasket(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  updateBasket(userId: string, basket: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${userId}`, basket);
  }

  deleteBasket(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${userId}`);
  }
}
