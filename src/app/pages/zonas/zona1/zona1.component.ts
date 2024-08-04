import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/nav-zonas/nav-zonas.component';

@Component({
  selector: 'app-zona1',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent],
  templateUrl: './zona1.component.html',
  styleUrls: ['./zona1.component.css']
})
export class Zona1Component {}
