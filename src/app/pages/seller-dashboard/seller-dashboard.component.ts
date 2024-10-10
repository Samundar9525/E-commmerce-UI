import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { productColumn, productRowData, sellerCardData } from 'src/app/sampleData';
import { ModelsComponent } from 'src/app/widget/models/models.component';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent {
sellerCards: any = sellerCardData;
tableColumn: any[] = productColumn;
tableData: any[] = productRowData;

constructor(public dialog: MatDialog) {}

openDialog(): void {
  const fieldConfig = [
    { label: 'Name', name: 'name', type: 'text', required: true },
    { label: 'Rate', name: 'rate', type: 'number', required: true },
    { label: 'Discount', name: 'discount', type: 'number', required: true },
    { label: 'Category', name: 'category', type: 'text', required: true }
  ];

  const dialogRef = this.dialog.open(ModelsComponent, {
    width: '600px',
    data: { fields: fieldConfig }, // Pass the field configuration
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log(result)
    }
  });
}

}
