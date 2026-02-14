import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductListComponent } from './components/product-list/product-list';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Hero } from './components/hero/hero';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'product', component: ProductListComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
];
