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
      const cont = document.getElementById('cont');

      if (cont) {
        cont.classList.remove('animate__fadeIn');
        cont.classList.add('animate__fadeOut');
      }

    }, 5000); // 7000ms = 7 segundos
  }
}