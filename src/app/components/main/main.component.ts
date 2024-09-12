import { Component } from '@angular/core';
import { MainContent1Component } from "../main-content-1/main-content-1.component";
import { MainContent2Component } from "../main-content-2/main-content-2.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainContent1Component, MainContent2Component],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
