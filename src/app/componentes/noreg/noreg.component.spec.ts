import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoregComponent } from './noreg.component';

describe('NoregComponent', () => {
  let component: NoregComponent;
  let fixture: ComponentFixture<NoregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
