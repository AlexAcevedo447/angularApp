import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartnavbarComponent } from './startnavbar.component';

describe('StartnavbarComponent', () => {
  let component: StartnavbarComponent;
  let fixture: ComponentFixture<StartnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
