import { Component, HostListener, OnInit } from '@angular/core';
import { productDummydata } from 'src/app/sampleData';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  categories: { [key: string]: any } = {
    clothing: { name: 'shirts', state: false },
    watches: { name: 'watches', state: false },
    footwear: { name: 'shoes', state: true },
    bottomwear: { name: 'jeans', state: false },
    sunglasses: { name: 'sunglasses', state: false },
    television: { name: 'televisions', state: false },
    headphones: { name: 'headphones', state: false },
    airConditioners: { name: 'air_conditioners', state: false },
  };
  isSidebarVisible: boolean = true;
  currentSelectedProduct: string = '';
  offset = 1;
  limit = 100;
  isMobileView: boolean = false;
  products: any[] = [];
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service
      .getProductDataByCategory('shoes', this.limit, this.offset)
      .subscribe(async (res) => {
        this.currentSelectedProduct = 'Shoes';
        const validProducts = await this.filterProductsWithValidImages(res);
        this.products = validProducts;
      });
  }

  getKeys() {
    return Object.keys(this.categories);
  }

  onCategoryChange(category: string) {
    this.offset = 1;
    this.limit = 100;
    if(this.isMobileView && this.isSidebarVisible){
      this.isSidebarVisible = false;
    }
    Object.values(this.categories).map((res) => {
      if (res.name != this.categories[category].name) {
        res.state = false;
      }
    });
    if (this.categories[category].state) {
      this.currentSelectedProduct = this.categories[category].name;
      this.service
        .getProductDataByCategory(
          this.categories[category].name,
          this.limit,
          this.offset
        )
        .subscribe(async (res) => {
          const validProducts = await this.filterProductsWithValidImages(res);
          this.products = validProducts;
          console.log(this.products);
        });
    }
  }

  // Function to filter products based on valid image URLs
  async filterProductsWithValidImages(products: any[]): Promise<any[]> {
    const validProducts = await Promise.all(
      products.map(async (product) => {
        const isValid = await this.isImageValid(product.image);
        return isValid ? product : null;
      })
    );
    return validProducts.filter((product) => product !== null);
  }

  // Function to check if the image URL is valid
  isImageValid(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }
  loadMoreContent() {
    this.service
      .getProductDataByCategory(
        this.currentSelectedProduct,
        this.limit,
        this.offset
      )
      .subscribe(
        async (res) => {
          const validProducts = await this.filterProductsWithValidImages(res);
          this.products = [...this.products, ...validProducts];
          console.log(this.products);
        },
        (error) => {
          // Handle the error here
          console.error('Error loading products:', error);
        }
      );
  }

  scrollHandler(ev: any) {
    console.log(ev);
    if (ev === 'down') {
      this.offset += this.limit;
      this.loadMoreContent();
    } else if (ev === 'up') {
      if (this.offset > this.limit) {
        this.offset -= this.limit;
        this.loadMoreContent();
      }
    }
  }
  checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
    if (this.isMobileView) {
      this.isSidebarVisible = false;
    } else {
      this.isSidebarVisible = true;
    }
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
