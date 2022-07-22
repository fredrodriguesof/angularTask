import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfCoinsComponent } from './table-of-coins.component';

describe('TableOfCoinsComponent', () => {
  let component: TableOfCoinsComponent;
  let fixture: ComponentFixture<TableOfCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOfCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
