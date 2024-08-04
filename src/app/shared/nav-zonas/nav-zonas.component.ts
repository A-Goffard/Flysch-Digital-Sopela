import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-zonas',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-zonas.component.html',
  styleUrl: './nav-zonas.component.css'
})
export class NavZonasComponent {

  mobileNavOpenZ1 = false;
  animating = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownNav = document.querySelector('.dropdown-navZ1') as HTMLElement | null;
    const iconZ1Button = document.querySelector('.mariposita button') as HTMLElement | null;
  
    if (dropdownNav && iconZ1Button && this.mobileNavOpenZ1) {
      if (!dropdownNav.contains(target) && !iconZ1Button.contains(target)) {
        this.closeMobileNavZ1();
      }
    }
  }
  
  toggleMobileNavZ1() {
    if (this.animating) return;
    this.mobileNavOpenZ1 = !this.mobileNavOpenZ1;
    this.animating = true;
  
    const dropdownNav = document.querySelector('.dropdown-navZ1') as HTMLElement | null;
    const maripositaIconZ1 = document.querySelector('.mariposita') as HTMLElement | null;
  
    if (dropdownNav) {
      if (this.mobileNavOpenZ1) {
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
  
    if (maripositaIconZ1) {
      maripositaIconZ1.style.transform = this.mobileNavOpenZ1 ? 'rotate(45deg)' : 'rotate(0deg)';
    }
  }
  
  closeMobileNavZ1() {
    if (this.animating) return;
    this.mobileNavOpenZ1 = false;
    this.animating = true;
  
    const dropdownNav = document.querySelector('.dropdown-navZ1') as HTMLElement | null;
    const maripositaIconZ1 = document.querySelector('.mariposita') as HTMLElement | null;
  
    if (dropdownNav) {
      dropdownNav.classList.remove('open', 'animate__fadeInLeft');
      dropdownNav.classList.add('close', 'animate__animated', 'animate__fadeOutLeft');
      dropdownNav.addEventListener('animationend', () => {
        this.animating = false;
        dropdownNav.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fadeOutLeft');
      }, { once: true });
    }
  
    if (maripositaIconZ1) {
      maripositaIconZ1.style.transform = 'rotate(0deg)';
    }
  }
}
