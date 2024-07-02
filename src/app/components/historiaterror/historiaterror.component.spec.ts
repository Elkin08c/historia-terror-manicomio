import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaterrorComponent } from './historiaterror.component';

describe('HistoriaterrorComponent', () => {
  let component: HistoriaterrorComponent;
  let fixture: ComponentFixture<HistoriaterrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaterrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
