import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent {
  productForm: FormGroup;
  fields: any[] = [];
  selectedImage: File | null = null;
  imagePreview: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<ModelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { fields: any[] },
    private fb: FormBuilder
  ) {
    this.fields = data.fields;
    this.productForm = this.fb.group({});
    this.fields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      this.productForm.addControl(field.name, this.fb.control('', validators));
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0]; // Store the selected file

    if (this.selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string; // Set the preview image URL
      };
      reader.readAsDataURL(this.selectedImage); // Read the file as Data URL
    } else {
      this.imagePreview = null; // Reset preview if no file is selected
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = new FormData();

      if (this.selectedImage) {
        formData.append('image', this.selectedImage); // Append the image only if it exists
      }

      Object.keys(this.productForm.value).forEach(key => {
        formData.append(key, this.productForm.value[key]);
      });

      this.dialogRef.close(formData); // Close dialog with formData
    }
  }
}
