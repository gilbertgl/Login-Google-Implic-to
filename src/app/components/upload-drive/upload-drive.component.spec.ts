import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDriveComponent } from './upload-drive.component';

describe('UploadDriveComponent', () => {
  let component: UploadDriveComponent;
  let fixture: ComponentFixture<UploadDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
