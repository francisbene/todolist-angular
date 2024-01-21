import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiterNumberComponent } from './emiter-number.component';

describe('EmiterNumberComponent', () => {
  let component: EmiterNumberComponent;
  let fixture: ComponentFixture<EmiterNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmiterNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmiterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
