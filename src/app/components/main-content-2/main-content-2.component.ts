import { Component } from '@angular/core';
import { DataService } from '../../model/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content-2.component.html',
  styleUrl: './main-content-2.component.scss'
})

export class MainContent2Component {
  remainingItems$ = this.dataService.getRemainingItems()

  constructor(private dataService: DataService ){}

  ngOnInit(){
    this.dataService.loadData()
  }
}
