import { ProdutoModule } from './produto.module';

describe('ProdutoModule', () => {
  let produtoModule: ProdutoModule;

  beforeEach(() => {
    produtoModule = new ProdutoModule();
  });

  it('should create an instance', () => {
    expect(produtoModule).toBeTruthy();
  });
});
