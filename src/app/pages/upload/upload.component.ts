import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fileData = e.target.result;
        console.log('Archivo subido exitosamente:', fileData);
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  }
}
