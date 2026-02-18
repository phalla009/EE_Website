import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact/contact';
import { ProductListComponent } from '../product-list/product-list';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Contact, ProductListComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  isShow: boolean = false;
  blogData = {
    header: {
      tagline: 'LATEST UPDATES',
      title: 'ចំណេះដឹង និងប្លុកបច្ចេកវិទ្យាអគ្គិសនី',
      desc: 'តាមដានរាល់និន្នាការបច្ចេកវិទ្យាគ្រឿងអគ្គិសនី និងការរីកចម្រើននៃប្រព័ន្ធឧស្សាហកម្មទំនើប។',
    },
    articles: [
      {
        id: 'post1',
        category: 'Technology',
        date: 'Feb 14, 2026',
        title: 'កង្ហារបូមខ្យល់ឧស្សាហកម្ម (Industrial Exhaust Fan)',
        shortDesc: 'បង្កើនប្រសិទ្ធភាពការងារ និងសុវត្ថិភាពក្នុងរោងចក្រ...',
        fullDesc:
          'បង្កើនប្រសិទ្ធភាពការងារ និងសុវត្ថិភាពក្នុងបរិវេណរោងចក្រ ជាមួយប្រព័ន្ធខ្យល់ចេញចូលទំនើប ដែលជួយកាត់បន្ថយកម្ដៅ និងធូលីបានយ៉ាងមានប្រសិទ្ធភាព។',
        img: 'https://devashish.net/wp-content/uploads/2024/08/Industrial-Exhaust-Fan-1.jpg',
      },
      {
        id: 'post2',
        category: 'Technology',
        date: 'Feb 14, 2026',
        title: 'ប្រអប់បញ្ជាម៉ូទ័រ (Magnetic Starter)',
        shortDesc: 'ការការពារ និងគ្រប់គ្រងម៉ូទ័រអគ្គិសនីឱ្យមានសុវត្ថិភាព...',
        fullDesc:
          'ការការពារ និងគ្រប់គ្រងម៉ូទ័រអគ្គិសនីរបស់លោកអ្នកឱ្យមានសុវត្ថិភាពខ្ពស់ បញ្ហាកាត់បន្ថយការឆ្លងចរន្ត និងពន្យារអាយុកាលប្រើប្រាស់គ្រឿងម៉ាស៊ីន។',
        img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1KrVutQnIiwkyxJDsASaO-pXtWP5OyDJPqCcGCur2D7sWzRkA6mv-xiHddISN',
      },
      {
        id: 'post3',
        category: 'Technology',
        date: 'Feb 14, 2026',
        title: 'អាមពែម៉ែត្រគាប (Multi-functional Clamp Meter)',
        shortDesc: 'ឧបករណ៍វាស់ស្ទង់អគ្គិសនីដែលមានភាពសុក្រឹតខ្ពស់...',
        fullDesc:
          'ឧបករណ៍វាស់ស្ទង់អគ្គិសនីដែលមានភាពសុក្រឹតខ្ពស់បំផុត សម្រាប់ការងារត្រួតពិនិត្យ ជួសជុល និងថែទាំប្រព័ន្ធអគ្គិសនីក្នុងវិស័យឧស្សាហកម្ម។',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hgZCe5dcuTGdcI7G1EgkRo-NTfqt_dKnUeTu6lGYhcrFZBDG3GaL_c-rIdn6',
      },
    ],
  };
  expandedCards: { [key: string]: boolean } = {};
  toggleReadMore(cardId: string) {
    this.expandedCards[cardId] = !this.expandedCards[cardId];
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
}
