import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      const title1 = document.getElementById('title1');
      const title2 = document.getElementById('title2');
      const logo = document.getElementById('logo');

      if (title1) {
        title1.classList.remove('animate__fadeIn');
        title1.classList.add('animate__fadeOut');
      }

      if (title2) {
        title2.classList.remove('animate__fadeIn');
        title2.classList.add('animate__fadeOut');
      }

      if (logo) {
        logo.classList.remove('animate__fadeIn');
        logo.classList.add('animate__fadeOut');
      }

    }, 7000); // 7000ms = 7 segundos
  }
}