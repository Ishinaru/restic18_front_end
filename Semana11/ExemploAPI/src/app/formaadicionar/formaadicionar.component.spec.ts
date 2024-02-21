import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaadicionarComponent } from './formaadicionar.component';

describe('FormaadicionarComponent', () => {
  let component: FormaadicionarComponent;
  let fixture: ComponentFixture<FormaadicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormaadicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormaadicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
