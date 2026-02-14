import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  private route = inject(ActivatedRoute);
  private routeParams = toSignal(this.route.params);
  products = signal([
    {
      id: 1,
      name: 'Industrial Circuit Breaker',
      category: 'Electrical Control',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSME4jOlBZm5ozskylQq-Fv7ojXzphUSwqIAxgr7aBLHkitae2OAn1LIqkNu9Rz',
      specs: 'Voltage: 400V, Current Rating: 63A, Breaking Capacity: 10kA, 3-Pole Design.',
    },
    {
      id: 2,
      name: 'Smart Distribution Board',
      category: 'Power Supply',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHxoa4KoJckUkPVilsqDDVrq_xnY-I4h_KPjCB4RfqrAoiznZP1JyrDFI2_P3G',
      specs: 'Material: Galvanized Steel, IP Rating: IP65, Dimensions: 600x400x200mm.',
    },
    {
      id: 3,
      name: 'Automatic Voltage Stabilizer',
      category: 'Protection Device',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ljgIy0lUjNYJsGWw2xAIE0n7jEm111qyzyxMMkVrqPGqLPN8F59NCGzkqWTG',
      specs: 'Capacity: 5kVA, Input Range: 140V-260V, Output Precision: +/- 3%.',
    },
    {
      id: 4,
      name: 'Solar Inverter Pro X1',
      category: 'Renewable Energy',
      image:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCR7UyA1qM2b9cqAFSDO7kRPaWej8U1IbxZR8ZjS5OO8rSC8oh72YXEoV_CzOp',
      specs: 'Efficiency: 98.4%, Max Input: 1000V DC, Pure Sine Wave Output.',
    },
    {
      id: 5,
      name: 'Heavy Duty Power Cable',
      category: 'Wiring Access',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1Kx0_mFSqGniVrgjOxmz7me2dDYINGgrDqNMAT6Zcxl334CwX78E7VN6Owk0D',
      specs: 'Size: 4-Core 16mm², Insulation: PVC/XLPE, Standard: IEC 60502.',
    },
    {
      id: 6,
      name: 'Digital Energy Meter',
      category: 'Measurement',
      image:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmn58igKgSM5LHp5GTfnG27NNsQUHsIZ9wIFuOpyx3FMQr2-mSlRLzQ549EKYZ',
      specs: 'LCD Display, RS485 Communication, Accuracy Class 1.0, DIN Rail Mount.',
    },
    {
      id: 7,
      name: 'Miniature Circuit Breaker (MCB)',
      category: 'Electrical Control',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hOMfyr8ppQ6LhIi46v9spSR5BZ-NYrdgiNvb_nL-kEZtxbvmNtxB2njLM_JS',
      specs: 'Current Rating: 10A-63A, Single Pole, Trip Type: B, C, D.',
    },
    {
      id: 8,
      name: 'LED Indicator Panel',
      category: 'Control Panel',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0p0n-SYTveEO5jpSAI7IWPD9oxk8Lv7RF3sTovd-MZ3i72mvmKgG79AIQefwe',
      specs: 'LED Type: RGB, Voltage: 24V DC, Panel Mount, IP54.',
    },
    {
      id: 9,
      name: 'Programmable Logic Controller (PLC)',
      category: 'Automation',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYujEIwX-8cGccmkBR7L2lFLOH0gBYcVt5GHtXI3in8nUznzmnAJdhpUk_Uq5',
      specs: 'I/O Ports: 24, Communication: Ethernet, Programming: Ladder Logic.',
    },
    {
      id: 10,
      name: 'បំពង់ទុយោអគ្គិសនី',
      category: 'Wiring Access',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQV3O8shYZySA6dCfArT1Y8crmlvq8nHKKfmZRK8Bis-kBEXDGWWppN_Rz_665',
      specs: 'Material: PVC, Diameter: 25-50mm, ធន់នឹងភ្លើង, ប្រវែង: 3m.',
    },
    {
      id: 11,
      name: 'Surge Protection Device (SPD)',
      category: 'Protection Device',
      image:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfVzsAcp1PPt_zvxFDsj4bQ60b39flzkQVhfqBr5iBOOqLplp1vpumazLWPdQJ',
      specs: 'Max Discharge Current: 40kA, Voltage: 275V AC, 3-Phase.',
    },
    {
      id: 12,
      name: 'AC Contactors',
      category: 'Electrical Control',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQQw3_eHr7T1gh-fdxmo5Chry02QOg4mT224NfH1lnFuuYh2Cb4VtVKVcA-fNM',
      specs: 'Coil Voltage: 220V AC, Current: 9A-95A, 3-Pole or 4-Pole Options.',
    },
    {
      id: 13,
      name: 'Electrical Junction Box',
      category: 'Wiring Access',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTis2RV_SO62SIx5HmbmRCwEBwTwTR0_8YHW0MwMatUBTNN2rjokqeqFfJON216',
      specs: 'Material: ABS Plastic, Size: 150x150x80mm, IP Rating: IP66.',
    },
    {
      id: 14,
      name: 'Transformer 1kVA',
      category: 'Power Supply',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNwcb59LM40UDbiTcYz393r06WOghiEni0r1L3EGlEOpxvX2x1MiHs5jYIejAK',
      specs: 'Input: 220V AC, Output: 110V AC, Frequency: 50/60Hz, Efficiency: 95%.',
    },
    {
      id: 15,
      name: 'Industrial Socket Outlet',
      category: 'Wiring Access',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQId5RiMXiga2VFWKXMLS25MH4n_hi-mfFGwqRDHz3k-uB1Kwm5Kr3DBMRwszrS',
      specs: 'Voltage: 400V, Current: 32A, Material: Thermoplastic, IP44.',
    },
    {
      id: 16,
      name: 'Phase Sequence Indicator',
      category: 'Measurement',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9n4o_oBK91iImFaX7rZ26ODXDEURJXTvPciqxOoGIju2za6VTvi34w2EP5P_x',
      specs: 'Voltage Range: 110-480V, 3-Phase Detection, LED Display.',
    },
    {
      id: 17,
      name: 'Fuse Holder Kit',
      category: 'Protection Device',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAoMWLWNOdLynZ1pnKZMbgGMBO6kkx6GlI-4kJYr_tpnXMKtK987AqMrubL035',
      specs: 'Rated Current: 6A-32A, Material: Ceramic, Panel Mount.',
    },
    {
      id: 18,
      name: 'Energy Analyzer Meter',
      category: 'Measurement',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfk8cAmGwIsbx7ZWruXSiGEdPa2zfIiI5EH-yaVdgOa8gLW0e1sM4Qgw-K-6gY',
      specs: '3-Phase Monitoring, LCD Display, Data Logging, RS485 Communication.',
    },
    {
      id: 19,
      name: 'DIN Rail Terminal Block',
      category: 'Electrical Control',
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWepmrI-2mtsDPKvDWaD7Ces2afWgEEH50cUGezxvtSOM8RLJHVEztT6bUqas8',
      specs: 'Rated Voltage: 800V, Current: 32A, Material: Polyamide, Screw Type.',
    },
    {
      id: 20,
      name: 'LED Industrial Work Light',
      category: 'Lighting',
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSF7_HLvzEuD7g-qbjvIrXXr5ET-8IburtZcNjhnQNpIbm6-N3UKEU7hEox4nLt',
      specs: 'Power: 50W, Voltage: 220V, Waterproof IP65, Aluminum Body.',
    },
  ]);
  searchTerm = signal('');
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
}
