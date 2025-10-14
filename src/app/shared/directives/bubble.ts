import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBubble]'
})
export class Bubble {

  private _nativeEl! : any

  private _styles: any = {
    'height': '3em',
    'width': '3em',
    'borderRadius': '50%',
    'backgroundColor': 'rgb(100, 200, 200, .7)',
    'lineHeight': '3em',
    'textAlign': 'center',
    'verticalAlign': 'middle',
    'color': '#fff',
    'font-weight': 'bold'
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
     this._nativeEl = this._elementRef.nativeElement
  }

  ngOnInit() {
   this._doRender()
  }

  private _doRender(): void {
    for (const styleProperty in this._styles) {
      this._renderer.setStyle(this._nativeEl, styleProperty, this._styles[styleProperty])
    }
  }
}
