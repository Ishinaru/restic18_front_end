import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentelistarComponent } from './componentelistar.component';

describe('ComponentelistarComponent', () => {
  let component: ComponentelistarComponent;
  let fixture: ComponentFixture<ComponentelistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentelistarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentelistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
