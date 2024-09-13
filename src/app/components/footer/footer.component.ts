import { Component } from '@angular/core';
import { BgHighlightDirective } from '../../directives/bg-highlight.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BgHighlightDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
