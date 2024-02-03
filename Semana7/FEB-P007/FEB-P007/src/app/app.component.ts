import { Component , OnInit} from '@angular/core';
import { ServicoService } from './servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  categorias: string[] = [];
  veiculos: any = {};
  
  titulo = 'FEB-P007';
  categoriaSelecionada: string | null = null;
  veiculoSelecionado: any | null = null;
  veiculosSelecionados: any[] = [];

  constructor(private appService:ServicoService ){ }

  ngOnInit(){
    this.appService.getVeiculos().subscribe(data=>{
      this.veiculos = data;
      this.categorias = Object.keys(this.veiculos);
    });
  }

  selecionarCategoria(categoria:string){
    this.categoriaSelecionada = categoria;
    this.veiculoSelecionado = null;
  }

  selecionarVeiculo(veiculo:any){
    this.veiculoSelecionado = veiculo;
  }

  addVeiculoCarrinho(){
    if(this.veiculoSelecionado){
      this.veiculosSelecionados.push(this.veiculoSelecionado);
      this.veiculoSelecionado = null;
    }
    else{
      alert('Selecione um veículo!!!');
    }
  }

  removerVeiculoCarrinho(index:number){
    this.veiculosSelecionados.splice(index, 1);
  }
}
