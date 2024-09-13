import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgHighlight]',
  standalone: true
})
export class BgHighlightDirective implements OnInit {
  @Input() defaultColor: string = '#162030';
  @Input('appBgHighlight') bgColor: string = '#162030';

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.bgColor || this.defaultColor;
  }
}
