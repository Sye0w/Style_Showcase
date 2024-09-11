import { Component } from '@angular/core';
import { ThemeSwitchComponent } from "../theme-switch/theme-switch.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
