import { Component, HostListener } from '@angular/core';
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
  animating = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownNav = document.querySelector('.dropdown-nav') as HTMLElement;
    const iconButton = document.querySelector('.icon button') as HTMLElement;
    
    if (this.mobileNavOpen && dropdownNav && !dropdownNav.contains(target) && !iconButton.contains(target)) {
      this.closeMobileNav();
    }
  }
  
  toggleMobileNav() {
    if (this.animating) return;
    this.mobileNavOpen = !this.mobileNavOpen;
    this.animating = true;
    const dropdownNav = document.querySelector('.dropdown-nav') as HTMLElement;
    if (dropdownNav) {
      if (this.mobileNavOpen) {
        dropdownNav.classList.remove('close', 'animate__fadeOutLeft');
        dropdownNav.classList.add('open', 'animate__animated', 'animate__fadeInLeft');
      } else {
        dropdownNav.classList.remove('open', 'animate__fadeInLeft');
        dropdownNav.classList.add('close', 'animate__animated', 'animate__fadeOutLeft');
      }

      dropdownNav.addEventListener('animationend', () => {
        this.animating = false;
        dropdownNav.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fadeOutLeft');
      }, { once: true });
    }
    const hojitasIcon = document.querySelector('.hojitas') as HTMLElement;
    if (hojitasIcon) {
      hojitasIcon.style.transform = this.mobileNavOpen ? 'rotate(45deg)' : 'rotate(0deg)';
    }
  }

  closeMobileNav() {
    if (this.animating) return;
    this.mobileNavOpen = false;
    this.animating = true;
    const dropdownNav = document.querySelector('.dropdown-nav') as HTMLElement;
    if (dropdownNav) {
      dropdownNav.classList.remove('open', 'animate__fadeInLeft');
      dropdownNav.classList.add('close', 'animate__animated', 'animate__fadeOutLeft');
      dropdownNav.addEventListener('animationend', () => {
        this.animating = false;
        dropdownNav.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fadeOutLeft');
      }, { once: true });
    }
    const hojitasIcon = document.querySelector('.hojitas') as HTMLElement;
    if (hojitasIcon) {
      hojitasIcon.style.transform = 'rotate(0deg)';
    }
  }
}
