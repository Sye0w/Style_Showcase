import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ThemeSwitchService } from './model/services/theme-switch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, MainComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Style_Showcase';
  themeMode: boolean = false;

  constructor(private themeService: ThemeSwitchService) {

  }

  ngOnInit(){
    this.themeService.theme$.subscribe(mode  => this.themeMode = mode);
  }
}
