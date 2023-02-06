import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdloadService {

  constructor(private http: HttpClient) { }

  CreateFileOnDrive(file: File, token: string): Observable<any> {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=UTF-8')
    .set('Authorization', 'Bearer ' + token);

    return this.http.post<any>('https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable', { name: file.name }, { 'headers': headers, observe: 'response' });
  }

  UploadFileToDrive(url:string, file: File, token: string) {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=UTF-8',)
    .set('X-Upload-Content-Type', file.type,)
    .set('Authorization', 'Bearer ' + token);

    console.log(headers);

    return this.http.put<any>(url, file, { 'headers': headers });
  }
}
