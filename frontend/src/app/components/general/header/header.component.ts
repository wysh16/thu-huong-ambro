import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DanhMucCongThucService } from '../../../services/danhmucongthuc.service';
import { DanhMucCongThuc } from '../../../types/danhMucCongThuc';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  products: any = [];
  filteredProducts: any = [];
  newProducts: any = [];
  productCategories: string[] = [];
  errMsg: string = '';
  selectedCategory: string = 'Tất cả sản phẩm'; // Lưu danh mục đã chọn
  isDropdownOpen: boolean = false; // Biến để điều khiển dropdown

  constructor(private productService: ProductService, private router1: Router) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;  
        this.filterProductsByCategory(this.selectedCategory); // Áp dụng lọc theo danh mục đã chọn
      },
      error: (err) => (this.errMsg = err),
    });
  }

  loadCategories() {
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.productCategories = ['Tất cả sản phẩm', ...categories];
      },
      error: (err) => (this.errMsg = err),
    });
  }

  filterProductsByCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'Tất cả sản phẩm') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product: any) => product.category === category
      );
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  navigateToProducts(category: string) {
    this.filterProductsByCategory(category); // Lọc sản phẩm theo danh mục đã chọn
    this.router1.navigate(['/products', { category: category }]);
  }















  authService = inject(AuthService);
  router = inject(Router);
  //   logout() {
  //     this.authService.logout();
  //     this.router.navigateByUrl('/login');
  //   }
}
