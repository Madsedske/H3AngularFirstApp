import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VittighederComponent } from './vittigheder.component';

describe('VittighederComponent', () => {
  let component: VittighederComponent;
  let fixture: ComponentFixture<VittighederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VittighederComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VittighederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
