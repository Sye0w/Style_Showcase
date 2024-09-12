import { Component } from '@angular/core';
import { DataService } from '../../model/services/data.service';
import { CommonModule } from '@angular/common';
import { ThemeSwitchService } from '../../model/services/theme-switch.service';

@Component({
  selector: 'app-main-content-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content-1.component.html',
  styleUrl: './main-content-1.component.scss'
})

export class MainContent1Component {
  firstThreeItems$ = this.dataService.getFirstThreeItems()
  themeMode: boolean = false;

  constructor(private dataService: DataService,
    private themeService: ThemeSwitchService
  ){}

  ngOnInit(){
    this.dataService.loadData()
    this.themeService.theme$.subscribe(mode  => this.themeMode = mode);
  }
}
