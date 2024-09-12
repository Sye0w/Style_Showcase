import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContent2Component } from './main-content-2.component';

describe('MainContent2Component', () => {
  let component: MainContent2Component;
  let fixture: ComponentFixture<MainContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
