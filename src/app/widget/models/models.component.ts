import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})

export class ModelsComponent {
  addProductForm!: FormGroup;
  deleteProductForm!: FormGroup;
  fields: any[] = [];
  selectedImage: File | null = null;
  imagePreview: string | null = null;
  formRawData:any;

  constructor(
    public dialogRef: MatDialogRef<ModelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder, private sellerService: SellerService) {
      if(data.addProduct){
        this.fields = data.fields;
        this.addProductForm = this.fb.group({});
        this.fields.forEach(field => {
          const validators = field.required ? [Validators.required] : [];
          this.addProductForm.addControl(field.name, this.fb.control('', validators));
        });
      } else if (data.deleteProduct) {
        this.fields = data.fields;
        this.deleteProductForm = this.fb.group({});
        this.fields.forEach(field => {
          const validators = field.required ? [Validators.required] : [];
          this.deleteProductForm.addControl(field.name, this.fb.control('', validators));
        });
      }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedImage);
    } else {
      this.imagePreview = null;
    }
  }

  onUpload() {
    if (this.selectedImage) {
      this.sellerService.uploadFile(this.selectedImage).subscribe(
        (response) => {
          console.log('File uploaded successfully!', response);
          let obj = {image:response.fileUrl}
          Object.assign(this.formRawData,obj)
          this.dialogRef.close(this.formRawData);
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
    } else {
      console.error('No file selected for upload.');
    }
  }

  onSubmit(): void {
    if(this.data.addProduct){
      if (this.addProductForm.valid) {
        this.formRawData = this.addProductForm.getRawValue();
        this.onUpload();
        // let obj = {image:'http://www.test.com'}
        // Object.assign(data,obj)
      }
    } else if (this.data.deleteProduct){
      this.dialogRef.close(this.deleteProductForm.getRawValue())
    } else if (this.data.confirmation) {
      this.dialogRef.close(true);
    }

  }

}
