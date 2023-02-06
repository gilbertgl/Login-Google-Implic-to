import { Component } from '@angular/core';
import { UpdloadService } from './updload.service';

declare function getToken(): any;

@Component({
  selector: 'app-upload-drive',
  templateUrl: './upload-drive.component.html',
  styleUrls: ['./upload-drive.component.css'],
})
export class UploadDriveComponent {
  file!: File;
  token!: string;

  constructor(private service: UpdloadService) {}

  uploadFile() {
    this.service
      .CreateFileOnDrive(this.file, getToken())
      .subscribe((result) => {
        this.service
          .UploadFileToDrive(
            result.headers.get('location'),
            this.file,
            getToken()
          )
          .subscribe({
            next: (result) => {
              console.log(result);
            },
          });
      });
  }

  OnChangeFileSelected(event: any) {
    this.file = event.files[0];
    this.token = getToken();
  }
}
