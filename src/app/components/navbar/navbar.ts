import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  isOpen = false;
  isCategoryOpen = false;

  constructor(private elRef: ElementRef) {}
  toggleCategory(event: Event) {
    event.preventDefault();
    this.isCategoryOpen = !this.isCategoryOpen;
  }
  closeMenu() {
    this.isOpen = false;
    this.isCategoryOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
