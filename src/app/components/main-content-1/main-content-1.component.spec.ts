import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContent1Component } from './main-content-1.component';

describe('MainContent1Component', () => {
  let component: MainContent1Component;
  let fixture: ComponentFixture<MainContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContent1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
