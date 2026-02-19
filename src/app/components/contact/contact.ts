import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, Footer],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9,}$/)]],

      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  successMessage = false;

  onSubmit() {
    if (this.contactForm.valid) {
      const botToken = environment.telegramToken;
      const chatId = environment.telegramChatId;

      const formData = this.contactForm.value;

      const message = `
        📩 New Contact Form Submission

        👤 Name: ${formData.name}
        📧 Email: ${formData.email}
        📱 Phone: ${formData.phone}
        📝 Message: ${formData.message}
        `;

      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Telegram response:', data);
          this.successMessage = true;
          this.contactForm.reset();

          setTimeout(() => {
            this.successMessage = false;
          }, 3000);
        })
        .catch((error) => {
          console.error('Error sending to Telegram:', error);
        });
    }
  }
}
