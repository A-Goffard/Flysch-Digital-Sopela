import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  rating: number = 5;
  comment: string = '';
  feedbackSent: boolean = false;

  submitFeedback() {
    const templateParams = {
      to_name: 'Aintzane',
      from_name: 'Alguien de la yincana',
      message: `Puntuación: ${this.rating}\nComentario: ${this.comment}`
    };

    emailjs.send('service_76d4uwi', 'template_lyp8r79', templateParams, 'q7-z9xq1TCcE7aHNP')
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.feedbackSent = true;
        this.comment = ''; // Clear the comment after submission
        this.rating = 5; // Reset rating
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
}
