import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

interface corPorCategoria{
  [key:string]:string;
}

@Directive({
  selector: '[appVeiculoEstilo]'
})

export class VeiculoEstiloDirective implements OnInit{
  @Input() categoria:string = '';
  
  constructor(private elemento:ElementRef, private obterCor: Renderer2) { }
  
  ngOnInit(): void {
      this.aplicarEstilo();
  }

  private aplicarEstilo():void{
    const cor = this.obterCorPorCategoria(this.categoria);
    this.obterCor.setStyle(this.elemento.nativeElement, 'background-color', cor);
    this.obterCor.setStyle(this.elemento.nativeElement, 'color', 'white');
    this.obterCor.setStyle(this.elemento.nativeElement, 'padding', '15px');
    this.obterCor.setStyle(this.elemento.nativeElement, 'border-radius', '8px');
    this.obterCor.setStyle(this.elemento.nativeElement, 'cursor', 'pointer');
  }

  private obterCorPorCategoria(categoria:string):string{
    const corPorCategoria: corPorCategoria = {
      Avioes:'blue',
      Carros:'yellow',
      Barcos:'#22d425'
    };

    return corPorCategoria[categoria];
  }

}
