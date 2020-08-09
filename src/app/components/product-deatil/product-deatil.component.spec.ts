import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeatilComponent } from './product-deatil.component';

describe('ProductDeatilComponent', () => {
  let component: ProductDeatilComponent;
  let fixture: ComponentFixture<ProductDeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
