import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDesignComponent } from './mat-design.component';

describe('MatDesignComponent', () => {
  let component: MatDesignComponent;
  let fixture: ComponentFixture<MatDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
