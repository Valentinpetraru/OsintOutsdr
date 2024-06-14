import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknamesComponent } from './nicknames.component';

describe('NicknamesComponent', () => {
  let component: NicknamesComponent;
  let fixture: ComponentFixture<NicknamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NicknamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NicknamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
