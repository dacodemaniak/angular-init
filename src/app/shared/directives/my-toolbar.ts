import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyToolbar]'
})
export class MyToolbar {

  private _isOpened = true

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const nativeElement = this.elementRef.nativeElement
    this.renderer.setStyle(nativeElement, 'display', 'flex')
    this.renderer.setStyle(nativeElement, 'backgroundColor', 'red')
    this.renderer.setStyle(nativeElement, 'width', '100%')
    this.renderer.setStyle(nativeElement, 'height', '3em')
    this.renderer.setStyle(nativeElement, 'transition', 'height .7s 0s ease-out')
  }

  @HostListener('click') onClick() {
    if (this._isOpened) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'height', '.5em')
      this._isOpened = false
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'height', '3em')
      this._isOpened = true
    }
    
  }

}
