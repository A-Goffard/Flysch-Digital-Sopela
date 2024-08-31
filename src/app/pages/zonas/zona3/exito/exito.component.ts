import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from '../../../../shared/back-component/back-component.component';

@Component({
  selector: 'app-zona3-exito',
  standalone: true,
  imports: [ CommonModule, BackComponentComponent ],
  templateUrl: './exito.component.html',
  styleUrl: './exito.component.css'
})
export class ExitoComponent {

}
