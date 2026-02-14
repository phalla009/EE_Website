import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  products = signal([
    {
      id: 1,
      name: 'Industrial Circuit Breaker',
      category: 'Electrical Control',
      image:
        'https://images.unsplash.com/photo-1558485940-8ee7766a87bc?auto=format&fit=crop&q=80&w=500',
      specs: 'Voltage: 400V, Current Rating: 63A, Breaking Capacity: 10kA, 3-Pole Design.',
    },
    {
      id: 2,
      name: 'Smart Distribution Board',
      category: 'Power Supply',
      image:
        'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=500',
      specs: 'Material: Galvanized Steel, IP Rating: IP65, Dimensions: 600x400x200mm.',
    },
    {
      id: 3,
      name: 'Automatic Voltage Stabilizer',
      category: 'Protection Device',
      image:
        'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=500',
      specs: 'Capacity: 5kVA, Input Range: 140V-260V, Output Precision: +/- 3%.',
    },
    {
      id: 4,
      name: 'Solar Inverter Pro X1',
      category: 'Renewable Energy',
      image:
        'https://images.unsplash.com/photo-1509391366360-feaffa64829b?auto=format&fit=crop&q=80&w=500',
      specs: 'Efficiency: 98.4%, Max Input: 1000V DC, Pure Sine Wave Output.',
    },
    {
      id: 5,
      name: 'Heavy Duty Power Cable',
      category: 'Wiring Access',
      image:
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=500',
      specs: 'Size: 4-Core 16mm², Insulation: PVC/XLPE, Standard: IEC 60502.',
    },
    {
      id: 6,
      name: 'Digital Energy Meter',
      category: 'Measurement',
      image:
        'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?auto=format&fit=crop&q=80&w=500',
      specs: 'LCD Display, RS485 Communication, Accuracy Class 1.0, DIN Rail Mount.',
    },
    {
      id: 7,
      name: 'Miniature Circuit Breaker (MCB)',
      category: 'Electrical Control',
      image:
        'https://images.unsplash.com/photo-1600172450301-ff85f84c948f?auto=format&fit=crop&q=80&w=500',
      specs: 'Current Rating: 10A-63A, Single Pole, Trip Type: B, C, D.',
    },
    {
      id: 8,
      name: 'LED Indicator Panel',
      category: 'Control Panel',
      image:
        'https://images.unsplash.com/photo-1581091012184-60f26eaa2ebc?auto=format&fit=crop&q=80&w=500',
      specs: 'LED Type: RGB, Voltage: 24V DC, Panel Mount, IP54.',
    },
    {
      id: 9,
      name: 'Programmable Logic Controller (PLC)',
      category: 'Automation',
      image:
        'https://images.unsplash.com/photo-1605902711622-cfb43c443ef0?auto=format&fit=crop&q=80&w=500',
      specs: 'I/O Ports: 24, Communication: Ethernet, Programming: Ladder Logic.',
    },
    {
      id: 10,
      name: 'Electrical Conduit Pipes',
      category: 'Wiring Access',
      image:
        'https://images.unsplash.com/photo-1616501334625-f6a10f3c5589?auto=format&fit=crop&q=80&w=500',
      specs: 'Material: PVC, Diameter: 25-50mm, Fire Retardant, Length: 3m.',
    },
    {
      id: 11,
      name: 'Surge Protection Device (SPD)',
      category: 'Protection Device',
      image:
        'https://images.unsplash.com/photo-1615839054623-66b4f2d0eeda?auto=format&fit=crop&q=80&w=500',
      specs: 'Max Discharge Current: 40kA, Voltage: 275V AC, 3-Phase.',
    },
    {
      id: 12,
      name: 'AC Contactors',
      category: 'Electrical Control',
      image:
        'https://images.unsplash.com/photo-1596518693101-55d3f6f8f39c?auto=format&fit=crop&q=80&w=500',
      specs: 'Coil Voltage: 220V AC, Current: 9A-95A, 3-Pole or 4-Pole Options.',
    },
    {
      id: 13,
      name: 'Electrical Junction Box',
      category: 'Wiring Access',
      image:
        'https://images.unsplash.com/photo-1612832022254-2ef0f0e82c2e?auto=format&fit=crop&q=80&w=500',
      specs: 'Material: ABS Plastic, Size: 150x150x80mm, IP Rating: IP66.',
    },
    {
      id: 14,
      name: 'Transformer 1kVA',
      category: 'Power Supply',
      image:
        'https://images.unsplash.com/photo-1581091012184-50a26eaa2abc?auto=format&fit=crop&q=80&w=500',
      specs: 'Input: 220V AC, Output: 110V AC, Frequency: 50/60Hz, Efficiency: 95%.',
    },
    {
      id: 15,
      name: 'Industrial Socket Outlet',
      category: 'Wiring Access',
      image:
        'https://images.unsplash.com/photo-1617281070507-b2f87c4f2c44?auto=format&fit=crop&q=80&w=500',
      specs: 'Voltage: 400V, Current: 32A, Material: Thermoplastic, IP44.',
    },
    {
      id: 16,
      name: 'Phase Sequence Indicator',
      category: 'Measurement',
      image:
        'https://images.unsplash.com/photo-1591092334651-33f26d9a1930?auto=format&fit=crop&q=80&w=500',
      specs: 'Voltage Range: 110-480V, 3-Phase Detection, LED Display.',
    },
    {
      id: 17,
      name: 'Fuse Holder Kit',
      category: 'Protection Device',
      image:
        'https://images.unsplash.com/photo-1600172450301-11f85f84c948f?auto=format&fit=crop&q=80&w=500',
      specs: 'Rated Current: 6A-32A, Material: Ceramic, Panel Mount.',
    },
    {
      id: 18,
      name: 'Energy Analyzer Meter',
      category: 'Measurement',
      image:
        'https://images.unsplash.com/photo-1605902711622-88f43c443ef0?auto=format&fit=crop&q=80&w=500',
      specs: '3-Phase Monitoring, LCD Display, Data Logging, RS485 Communication.',
    },
    {
      id: 19,
      name: 'DIN Rail Terminal Block',
      category: 'Electrical Control',
      image:
        'https://images.unsplash.com/photo-1616501334625-77a10f3c5589?auto=format&fit=crop&q=80&w=500',
      specs: 'Rated Voltage: 800V, Current: 32A, Material: Polyamide, Screw Type.',
    },
    {
      id: 20,
      name: 'LED Industrial Work Light',
      category: 'Lighting',
      image:
        'https://images.unsplash.com/photo-1617788138017-90ad40651399?auto=format&fit=crop&q=80&w=500',
      specs: 'Power: 50W, Voltage: 220V, Waterproof IP65, Aluminum Body.',
    },
  ]);

  searchTerm = signal('');
  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter(
      (p) => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term),
    );
  });

  updateSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }
}
