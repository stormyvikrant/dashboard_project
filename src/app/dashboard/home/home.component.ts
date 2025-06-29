import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from '../grid/grid.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,GridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
