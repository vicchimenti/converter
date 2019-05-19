import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentigradeComponent } from './centigrade.component';

describe('CentigradeComponent', () => {
  let component: CentigradeComponent;
  let fixture: ComponentFixture<CentigradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentigradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentigradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
