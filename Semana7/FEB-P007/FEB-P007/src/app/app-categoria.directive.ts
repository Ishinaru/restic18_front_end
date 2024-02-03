import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppCategoria]'
})
export class AppCategoriaDirective implements OnInit{
  @Input('appAppCategoria') categoria: string = '';

  constructor(private elemento:ElementRef, private geraCor: Renderer2) { }

  ngOnInit(): void {
    this.aplicarEstilo();
  }

  private aplicarEstilo():void{
    const corPorCategoria:{[key:string]:string}={
      Avioes:'blue',
      Carros:'yellow',
      Barcos:'#22d425'
    };

    const cor = corPorCategoria[this.categoria];

    this.geraCor.setStyle(this.elemento.nativeElement, 'background-color',cor);
    this.geraCor.setStyle(this.elemento.nativeElement, 'color','white');
    this.geraCor.setStyle(this.elemento.nativeElement, 'padding','10px');
    this.geraCor.setStyle(this.elemento.nativeElement, 'border-radius','5px');
    this.geraCor.setStyle(this.elemento.nativeElement, 'cursor', 'pointer');
  }

}
