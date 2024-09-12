import { Component } from '@angular/core';
import { DataService } from '../../model/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content-1.component.html',
  styleUrl: './main-content-1.component.scss'
})

export class MainContent1Component {
  firstThreeItems$ = this.dataService.getFirstThreeItems()

  constructor(private dataService: DataService ){}

  ngOnInit(){
    this.dataService.loadData()
  }
}
