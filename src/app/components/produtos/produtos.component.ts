import { Component } from '@angular/core';
import { ProdutoModel } from 'src/app/model/produto.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  public produtos: ProdutoModel[] = [
    new ProdutoModel(1, "Coca-cola 600ml", 10),
    new ProdutoModel(2, "Coxinha de frango com catupiry", 6),
    new ProdutoModel(3, "X-salada", 25.5),
  ];

  constructor(private pedidoService: PedidoService) { }

  adicionarItem(id: number) {
    const produto: ProdutoModel | undefined = this.produtos.find( produto => produto.id === id);
    if (produto) {
      this.pedidoService.adicionarItem(produto);
    }
  }

  removerItem(produto: ProdutoModel) {
    this.pedidoService.removerItem(produto);
  }

}
