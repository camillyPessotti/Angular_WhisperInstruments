import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tela-carrinho',
  templateUrl: './tela-carrinho.component.html',
  styleUrls: ['./tela-carrinho.component.css']
})
export class TelaCarrinhoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService,
  ) { }

  lista = [];
  codigo

  ngOnInit() {
    this.usuariosService.buscar_carrinho()
      .then((resultados: any) => {
        resultados.forEach(resultado => {
          if (resultado.CLIENTE_CODIGO == localStorage.getItem("CODIGO")) {
            this.usuariosService.buscar_produtos()
              .then((resultadosProduto: any) => {
                resultadosProduto.find(produto => {
                  if (produto.CODIGO == resultado.PRODUTO_CODIGO) {
                    this.lista.push(produto);
                  };
                });
              });
          };
        });
      });
  };

  fazerLogin() {
    this.router.navigate(['/tela-login']);
  };

  irProHome() {
    this.router.navigate(['']);
  };

  excluirProduto(produto_codigo) {
    this.usuariosService.buscar_carrinho()
      .then((resultados: any) => {
        resultados.find(resultado => {
          if (resultado.CLIENTE_CODIGO == localStorage.getItem("CODIGO")) {
            if (resultado.PRODUTO_CODIGO == produto_codigo) {
              Swal.fire({
                title: 'Você tem certeza?',
                text: "Você não pode reverter isto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7066e0',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Excluir'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  await Swal.fire(
                    'Excluído!',
                    'Seu produto foi excluído do carrinho.',
                    'success'
                  );
                  this.usuariosService.excluir_produto(resultado.CODIGO);
                  location.reload();
                };
              });
            };
          };
        });
      });
  };
};