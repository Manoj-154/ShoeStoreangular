import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenandwomenComponent } from './menandwomen.component';

describe('MenandwomenComponent', () => {
  let component: MenandwomenComponent;
  let fixture: ComponentFixture<MenandwomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenandwomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenandwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
