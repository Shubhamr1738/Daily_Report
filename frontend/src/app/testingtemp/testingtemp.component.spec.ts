import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingtempComponent } from './testingtemp.component';

describe('TestingtempComponent', () => {
  let component: TestingtempComponent;
  let fixture: ComponentFixture<TestingtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingtempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
