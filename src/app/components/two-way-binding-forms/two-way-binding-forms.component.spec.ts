import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingFormsComponent } from './two-way-binding-forms.component';

describe('TwoWayBindingFormsComponent', () => {
  let component: TwoWayBindingFormsComponent;
  let fixture: ComponentFixture<TwoWayBindingFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoWayBindingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
