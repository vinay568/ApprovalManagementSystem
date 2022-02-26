import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersApiComponent } from './users-api.component';

describe('UsersApiComponent', () => {
  let component: UsersApiComponent;
  let fixture: ComponentFixture<UsersApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
