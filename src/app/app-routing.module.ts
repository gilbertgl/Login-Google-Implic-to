import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UploadDriveComponent } from './components/upload-drive/upload-drive.component';

const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent
  },
  {
    path: "upload",
    component: UploadDriveComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
