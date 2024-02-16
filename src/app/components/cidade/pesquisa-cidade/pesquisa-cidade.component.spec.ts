import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCidadeComponent } from './pesquisa-cidade.component';

describe('PesquisaCidadeComponent', () => {
  let component: PesquisaCidadeComponent;
  let fixture: ComponentFixture<PesquisaCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
