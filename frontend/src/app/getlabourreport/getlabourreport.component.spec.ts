import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetlabourreportComponent } from './getlabourreport.component';

describe('GetlabourreportComponent', () => {
  let component: GetlabourreportComponent;
  let fixture: ComponentFixture<GetlabourreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetlabourreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetlabourreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
