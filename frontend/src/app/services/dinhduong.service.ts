import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { DinhDuong } from '../types/dinhduong';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DinhduongService {
  // http = inject(HttpClient);
  // constructor() {}
  // getDinhDuongById(id: string) {
  //   return this.http.get<DinhDuong>(environment.apiUrl + '/dinhduong/' + id);
  // }
  // constructor(private http: HttpClient) {}
  // // Lấy danh sách sản phẩm
  // getProductList(): Observable<DinhDuong[]> {
  //   return this.http.get<DinhDuong[]>(`${environment.apiUrl}/dinhduong`);
  // }
  // // Lấy thông tin dinh dưỡng cho sản phẩm theo tên
  // getDinhDuongByName(name: string): Observable<DinhDuong> {
  //   return this.http.get<DinhDuong>(`${environment.apiUrl}/dinhduong/${name}`);
  // }
  private apiUrl = `${environment.apiUrl}/dinhduong`; // URL của API

  constructor(private http: HttpClient) {}

  getNutritionInfo(foodName: string): Observable<DinhDuong> {
    return this.http.get<DinhDuong>(`${this.apiUrl}/${foodName}`);
  }
}
