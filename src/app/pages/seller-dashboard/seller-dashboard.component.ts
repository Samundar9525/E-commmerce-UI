import { Component } from '@angular/core';
import { sellerCardData } from 'src/app/sampleData';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent {
sellerCards: any = sellerCardData;

}
