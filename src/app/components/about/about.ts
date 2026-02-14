import { Component, OnInit } from '@angular/core';
import { Footer } from "../footer/footer";
declare var AOS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [Footer],
})
export class About implements OnInit {
  ngOnInit(): void {
    AOS.init({ duration: 1200 });
  }
  
}
