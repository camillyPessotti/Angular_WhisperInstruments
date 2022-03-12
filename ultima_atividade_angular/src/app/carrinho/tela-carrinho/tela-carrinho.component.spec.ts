import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCarrinhoComponent } from './tela-carrinho.component';

describe('TelaCarrinhoComponent', () => {
  let component: TelaCarrinhoComponent;
  let fixture: ComponentFixture<TelaCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
