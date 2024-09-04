import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzorroComponent } from './ngzorro.component';

describe('NgzorroComponent', () => {
  let component: NgzorroComponent;
  let fixture: ComponentFixture<NgzorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgzorroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgzorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
