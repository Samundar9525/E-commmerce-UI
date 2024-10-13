import { Component, OnInit } from '@angular/core';
import { productDummydata } from 'src/app/sampleData';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit{
  categories: { [key: string]: any } = {
    clothing: {name: 'shirts',state:false},
    watches:{name: 'watches',state:false},
    footwear:{name: 'shoes',state:true},
    bottomwear:{name: 'jeans',state:false},
    sunglasses:{name: 'sunglasses',state:false},
    television:{name: 'televisions',state:false},
    headphones:{name: 'headphones',state:false},
  };

  currentSelectedProduct:string ='';
  offset = 1;
  limit= 100;
  products:any[] =[]
  constructor(private service: ProductService){}


  ngOnInit(): void {
   this.service.getProductDataByCategory('shoes',this.limit,this.offset).subscribe(async res=>{
      this.currentSelectedProduct = 'Shoes'
      const validProducts = await this.filterProductsWithValidImages(res);
        this.products = validProducts;
   })
  }

  getKeys() {
    return Object.keys(this.categories);
  }

  onCategoryChange(category: string) {
    Object.values(this.categories).map(res=>{
      if (res.name !=this.categories[category].name){
        res.state = false;
      }
    })
    if (this.categories[category].state){
        this.currentSelectedProduct = this.categories[category].name;
      this.service.getProductDataByCategory(this.categories[category].name,this.limit,this.offset).subscribe(async (res)=>{
        const validProducts = await this.filterProductsWithValidImages(res);
        this.products = validProducts;
        console.log(this.products);
       })
    }
  }

    // Function to filter products based on valid image URLs
  async filterProductsWithValidImages(products: any[]): Promise<any[]> {
    const validProducts = await Promise.all(products.map(async (product) => {
      const isValid = await this.isImageValid(product.image);
      return isValid ? product : null;
    }));
    return validProducts.filter(product => product !== null);
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

}
