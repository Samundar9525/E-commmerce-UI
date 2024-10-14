import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements AfterViewInit {
  @Input() product: any;
  @Output() scrollDirection = new EventEmitter<string>();
  lastPosition: number = 0;

  // addToCart() {
  //   console.log(`${this.productName} added to cart.`);
  // }
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentPosition = entry.boundingClientRect.top;

          if (currentPosition < this.lastPosition) {
            this.scrollDirection.emit('up');
          } else if (currentPosition > this.lastPosition) {
            this.scrollDirection.emit('down');
          }
          this.lastPosition = currentPosition;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }

  getStars(rating: number): string[] {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push('fa-solid fa-star'); // Full star
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push('fa-solid fa-star-half-alt'); // Half star
      } else {
        stars.push('fa-regular fa-star'); // Empty star
      }
    }

    return stars;
  }

  onImageError(event: any) {
    event.target.src = 'https://st.depositphotos.com/1106005/3146/i/380/depositphotos_31468817-stock-photo-coming-soon-sign.jpg';
  }

}
