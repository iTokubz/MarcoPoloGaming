import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarclifeComponent } from './marclife.component';

describe('MarclifeComponent', () => {
  let component: MarclifeComponent;
  let fixture: ComponentFixture<MarclifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarclifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarclifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
