import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { KhuyenMai } from '../types/khuyenmai';

@Injectable({
  providedIn: 'root',
})
export class KhuyenmaiService {
  constructor(private http: HttpClient) {}

  // Lấy danh sách tất cả khuyến mãi
  getAllPromotions(): Observable<KhuyenMai[]> {
    return this.http.get<KhuyenMai[]>(`${environment.apiUrl}/khuyenmai`);
  }

  // Lấy thông tin chi tiết của một chương trình khuyến mãi theo id
  getPromotionById(id: number): Observable<KhuyenMai> {
    return this.http.get<KhuyenMai>(`${environment.apiUrl}/khuyenmai/${id}`);
  }
}
