import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsachComponent } from './chinhsach.component';

describe('ChinhsachComponent', () => {
  let component: ChinhsachComponent;
  let fixture: ComponentFixture<ChinhsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChinhsachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinhsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
