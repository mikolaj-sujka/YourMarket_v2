import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3005/api/order';

  constructor(private http: HttpClient) {}

  createOrder(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, {});
  }

  getOrderHistory(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/history`);
  }
}
