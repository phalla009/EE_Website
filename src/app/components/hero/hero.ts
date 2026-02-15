import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from "../contact/contact"; // សំខាន់សម្រាប់ប្រើ [class.show]

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Contact],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  isShow: boolean = false;
  expandedCards: { [key: string]: boolean } = {};
  toggleReadMore(cardId: string) {
    this.expandedCards[cardId] = !this.expandedCards[cardId];
  }
  // តាមដានការ Scroll របស់ Browser
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // បើ scroll ចុះក្រោមលើសពី 400px ឱ្យ isShow = true
    this.isShow = window.scrollY > 400;
  }

  // Function សម្រាប់ Scroll ទៅលើវិញ
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
