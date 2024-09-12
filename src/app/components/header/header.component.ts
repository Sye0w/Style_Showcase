import { Component } from '@angular/core';
import { ThemeSwitchComponent } from "../theme-switch/theme-switch.component";
import { ThemeSwitchService } from '../../model/services/theme-switch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitchComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  themeMode: boolean = false

  constructor(private themeService: ThemeSwitchService){}

  ngOnInit(){
    this.themeService.theme$.subscribe( mode => this.themeMode = mode)
  }
}
