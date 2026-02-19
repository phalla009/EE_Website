import { Component, signal, computed, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Productservice } from '../../services/productservice';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, Footer, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  expandedCards: { [key: string]: boolean } = {};
  private productService = inject(Productservice);
  private route = inject(ActivatedRoute);

  private routeParams = toSignal(this.route.params);
  isShow: boolean = false;
  products = this.productService.productslist;

  searchTerm = signal('');
  selectedImg: string | null = null;

  toggleReadMore(key: string | number) {
    this.expandedCards[key] = !this.expandedCards[key];
  }
  selectImage(imgUrl: string) {
    this.selectedImg = imgUrl;
  }
  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const catParam = this.routeParams()?.['id'];

    let list = this.products();
    if (catParam && catParam !== 'all') {
      list = list.filter((p) => {
        return p.category.toLowerCase().includes(catParam.toLowerCase());
      });
    }
    if (term) {
      list = list.filter(
        (p) => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term),
      );
    }
    return list;
  });
  updateSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

  selectedProduct = signal<any | null>(null);
  openDetails(product: any) {
    this.selectedProduct.set(product);
    document.body.style.overflow = 'hidden';
  }
  closeModal() {
    this.selectedProduct.set(null);
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShow = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  customerName: string = '';
  customerPhone: string = '';
  customerNote: string = '';
  formSubmitted: boolean = false;
  isSending: boolean = false;

  // បន្ថែម Variable ទាំងនេះក្នុង class ProductListComponent
  statusMessage: string | null = null;
  statusType: 'success' | 'error' | null = null;

  // បង្កើត Function សម្រាប់បង្ហាញសារ
  private showStatus(msg: string, type: 'success' | 'error') {
    this.statusMessage = msg;
    this.statusType = type;
    setTimeout(() => {
      this.statusMessage = null;
      this.statusType = null;
    }, 3000);
  }

  sendToTelegram(product: any) {
    this.formSubmitted = true;

    if (!this.customerName.trim() || !this.customerPhone.trim()) {
      return;
    }

    this.isSending = true;
    const botToken = environment.telegramToken;
    const chatId = environment.telegramChatId;
    const imageUrl = this.selectedImg || product.image[0];

    const message = `
      <b>🚀 ការសាកសួរផលិតផលថ្មី</b>
      ━━━━━━━━━━━━━━━━━━
      <b>👤 ព័ត៌មានអតិថិជន</b>
      <b>• ឈ្មោះ:</b> ${this.customerName}
      <b>• លេខទូរស័ព្ទ:</b> <code>${this.customerPhone}</code>
      <b>• ចំណាំ:</b> <i>${this.customerNote || 'មិនមាន'}</i>

      <b>📦 ព័ត៌មានផលិតផល</b>
      <b>• ឈ្មោះ:</b> ${product.name}
      <b>• ប្រភេទ:</b> ${product.category}
      <b>• លក្ខណៈ:</b> <code>${product.specs}</code>

      🔗 <a href="${imageUrl}">ចុចទីនេះដើម្បីមើលរូបភាព</a>
      ━━━━━━━━━━━━━━━━━━
      🕒 <i>ម៉ោងផ្ញើ: ${new Date().toLocaleString('km-KH')}</i>
        `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: false,
      }),
    })
      .then((response) => {
        if (response.ok) {
          this.showStatus(
            'បញ្ជូនទិន្នន័យជោគជ័យ! ផ្នែកលក់នឹងទាក់ទងទៅលោកអ្នកក្នុងពេលឆាប់ៗ។',
            'success',
          );
          this.resetForm();
          setTimeout(() => this.closeModal(), 2000);
        } else {
          this.showStatus('បរាជ័យ! សូមព្យាយាមម្តងទៀត ឬទាក់ទងមកយើងផ្ទាល់។', 'error');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        this.showStatus('មិនអាចភ្ជាប់ទៅកាន់ Telegram បានទេ', 'error');
      })
      .finally(() => {
        this.isSending = false;
      });
  }

  resetForm() {
    this.customerName = '';
    this.customerPhone = '';
    this.customerNote = '';
    this.formSubmitted = false;
  }
}
