import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dropDownMenu, productColumn, sellerCardData } from 'src/app/sampleData';
import { SellerService } from 'src/app/services/seller.service';
import { ModelsComponent } from 'src/app/widget/models/models.component';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {
sellerCards: any = sellerCardData;
tableColumn: any[] = productColumn;
tableData!: any[];

constructor(public dialog: MatDialog,private service:SellerService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(){
    this.service.getAllProduct().subscribe(res=>{
      this.tableData = res;
    })
  }

openDialog(model:any): void {
  if(model === 'add'){
        const fieldConfig = [
          { label: 'Name', name: 'name', type: 'text', required: true },
          { label: 'Rate', name: 'rate', type: 'number', required: true },
          { label: 'Discount', name: 'discount', type: 'number', required: true },
          { label: 'Category', name: 'category', type: 'option', options:dropDownMenu ,required: true }
        ];

        const dialogRef = this.dialog.open(ModelsComponent, {
          width: '600px',
          data: {
            addProduct:true,
            fields: fieldConfig
          },
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.service.addProductData(result).subscribe(res=>{
              console.log(res)
            });
          }
        });
    } else if(model ==='delete'){
      const fieldConfig = [{ label: 'Product ID', name: 'id', type: 'text', required: true }];
      const dialogRef = this.dialog.open(ModelsComponent, {
        width: '600px',
        data: {
          deleteProduct:true,
          fields: fieldConfig

        },
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.confirmationPopup().afterClosed().subscribe((res:any)=>{
            if(res){
              this.service.deleteProduct(result.id).subscribe(res=>{
                this.getTableData();
              });
            }
          })

        }
      });
    }
  }

  rowActionHandler(ev:any){
    console.log(ev,'-->')
    if (ev.action === 'edit'){

    }else if(ev.action === 'delete') {
      this.confirmationPopup().afterClosed().subscribe((res:any)=>{
        if(res){
          this.service.deleteProduct(ev.rowdata.id).subscribe(res=>{
            this.getTableData();
          });
        }
      })
    }
  }

  confirmationPopup(): any{
    const dialogRef = this.dialog.open(ModelsComponent, {
      width: '300px',
      data: {
        confirmation :true,
      },
    });
    return dialogRef;
  }


}
