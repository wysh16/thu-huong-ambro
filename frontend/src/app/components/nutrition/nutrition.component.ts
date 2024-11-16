import { DinhDuong } from '../../types/dinhduong';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component, inject, OnInit } from '@angular/core';
import { DinhduongService } from '../../services/dinhduong.service';

import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css',
})
export class NutritionComponent {
  foodName: string = '';
  nutritionData?: DinhDuong;
  errorMessage: string = '';

  constructor(private nutritionalInfoService: DinhduongService) {}

  searchNutrition() {
    this.errorMessage = ''; // Reset error message
    if (this.foodName.trim()) {
      this.nutritionalInfoService.getNutritionInfo(this.foodName).subscribe(
        (data: DinhDuong) => {
          // Chỉ định kiểu cho tham số data
          this.nutritionData = data;
        },
        (error: any) => {
          // Chỉ định kiểu cho tham số error
          console.error('Không tìm thấy thông tin dinh dưỡng', error);
          this.nutritionData = undefined; // Reset nutrition data
          this.errorMessage = 'Không tìm thấy thông tin cho thực phẩm này!'; // Set error message
        }
      );
    }
  }
}
