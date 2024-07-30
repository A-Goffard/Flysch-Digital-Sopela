import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-nav-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  mobileNavOpen = false;

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
    const hojitasIcon = document.querySelector('.hojitas') as HTMLElement;
    if (hojitasIcon) {
      hojitasIcon.style.transform = this.mobileNavOpen ? 'rotate(45deg)' : 'rotate(0deg)';
    }
  }

  closeMobileNav() {
    this.mobileNavOpen = false;
    const hojitasIcon = document.querySelector('.hojitas') as HTMLElement;
    if (hojitasIcon) {
      hojitasIcon.style.transform = 'rotate(0deg)';
    }
  }
}
