import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3005/api/order';

  constructor(private http: HttpClient) {}

  createOrder(userId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, { userId });
  }

  getOrders(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/history`, {
      params: { userId },
    });
  }
}
