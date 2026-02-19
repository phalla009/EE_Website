import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  private products = signal([
    {
      id: 1,
      name: 'Industrial Circuit Breaker',
      category: 'Electrical Control',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSME4jOlBZm5ozskylQq-Fv7ojXzphUSwqIAxgr7aBLHkitae2OAn1LIqkNu9Rz',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHxoa4KoJckUkPVilsqDDVrq_xnY-I4h_KPjCB4RfqrAoiznZP1JyrDFI2_P3G',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSME4jOlBZm5ozskylQq-Fv7ojXzphUSwqIAxgr7aBLHkitae2OAn1LIqkNu9Rz',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSME4jOlBZm5ozskylQq-Fv7ojXzphUSwqIAxgr7aBLHkitae2OAn1LIqkNu9Rz',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHxoa4KoJckUkPVilsqDDVrq_xnY-I4h_KPjCB4RfqrAoiznZP1JyrDFI2_P3G',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSME4jOlBZm5ozskylQq-Fv7ojXzphUSwqIAxgr7aBLHkitae2OAn1LIqkNu9Rz',
      ],

      specs: 'Voltage: 400V, Current Rating: 63A, Breaking Capacity: 10kA, 3-Pole Design.',
      description: 'Voltage: 400V, Current Rating: 63A, Breaking Capacity: 10kA, 3-Pole Design.',
    },
    {
      id: 2,
      name: 'Smart Distribution Board',
      category: 'Power Supply',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHxoa4KoJckUkPVilsqDDVrq_xnY-I4h_KPjCB4RfqrAoiznZP1JyrDFI2_P3G',
      ],

      specs: 'Material: Galvanized Steel, IP Rating: IP65, Dimensions: 600x400x200mm.',
      description: 'Material: Galvanized Steel, IP Rating: IP65, Dimensions: 600x400x200mm.',
    },
    {
      id: 3,
      name: 'Automatic Voltage Stabilizer',
      category: 'Protection Device',
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ljgIy0lUjNYJsGWw2xAIE0n7jEm111qyzyxMMkVrqPGqLPN8F59NCGzkqWTG',
      ],
      specs: 'Capacity: 5kVA, Input Range: 140V-260V, Output Precision: +/- 3%.',
      description: 'Capacity: 5kVA, Input Range: 140V-260V, Output Precision: +/- 3%.',
    },
    {
      id: 4,
      name: 'Solar Inverter Pro X1',
      category: 'Renewable Energy',
      image: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCR7UyA1qM2b9cqAFSDO7kRPaWej8U1IbxZR8ZjS5OO8rSC8oh72YXEoV_CzOp',
      ],
      specs: 'Efficiency: 98.4%, Max Input: 1000V DC, Pure Sine Wave Output.',
      description: 'Efficiency: 98.4%, Max Input: 1000V DC, Pure Sine Wave Output.',
    },
    {
      id: 5,
      name: 'Heavy Duty Power Cable',
      category: 'Wiring Access',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1Kx0_mFSqGniVrgjOxmz7me2dDYINGgrDqNMAT6Zcxl334CwX78E7VN6Owk0D',
      ],
      specs: 'Size: 4-Core 16mm², Insulation: PVC/XLPE, Standard: IEC 60502.',
      description: 'Size: 4-Core 16mm², Insulation: PVC/XLPE, Standard: IEC 60502.',
    },
    {
      id: 6,
      name: 'Digital Energy Meter',
      category: 'Measurement',
      image: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmn58igKgSM5LHp5GTfnG27NNsQUHsIZ9wIFuOpyx3FMQr2-mSlRLzQ549EKYZ',
      ],
      specs: 'LCD Display, RS485 Communication, Accuracy Class 1.0, DIN Rail Mount.',
      description: 'LCD Display, RS485 Communication, Accuracy Class 1.0, DIN Rail Mount.',
    },
    {
      id: 7,
      name: 'Miniature Circuit Breaker (MCB)',
      category: 'Electrical Control',
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hOMfyr8ppQ6LhIi46v9spSR5BZ-NYrdgiNvb_nL-kEZtxbvmNtxB2njLM_JS',
      ],
      specs: 'Current Rating: 10A-63A, Single Pole, Trip Type: B, C, D.',
      description: 'Current Rating: 10A-63A, Single Pole, Trip Type: B, C, D.',
    },
    {
      id: 8,
      name: 'LED Indicator Panel',
      category: 'Control Panel',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0p0n-SYTveEO5jpSAI7IWPD9oxk8Lv7RF3sTovd-MZ3i72mvmKgG79AIQefwe',
      ],
      specs: 'LED Type: RGB, Voltage: 24V DC, Panel Mount, IP54.',
      description: 'LED Type: RGB, Voltage: 24V DC, Panel Mount, IP54.',
    },
    {
      id: 9,
      name: 'Programmable Logic Controller (PLC)',
      category: 'Automation',
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYujEIwX-8cGccmkBR7L2lFLOH0gBYcVt5GHtXI3in8nUznzmnAJdhpUk_Uq5',
      ],
      specs: 'I/O Ports: 24, Communication: Ethernet, Programming: Ladder Logic.',
      description: 'I/O Ports: 24, Communication: Ethernet, Programming: Ladder Logic.',
    },
    {
      id: 10,
      name: 'បំពង់ទុយោអគ្គិសនី',
      category: 'Wiring Access',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQV3O8shYZySA6dCfArT1Y8crmlvq8nHKKfmZRK8Bis-kBEXDGWWppN_Rz_665',
      ],
      specs: 'Material: PVC, Diameter: 25-50mm, ធន់នឹងភ្លើង, ប្រវែង: 3m.',
      description: 'Material: PVC, Diameter: 25-50mm, ធន់នឹងភ្លើង, ប្រវែង: 3m.',
    },
    {
      id: 11,
      name: 'Surge Protection Device (SPD)',
      category: 'Protection Device',
      image: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfVzsAcp1PPt_zvxFDsj4bQ60b39flzkQVhfqBr5iBOOqLplp1vpumazLWPdQJ',
      ],
      specs: 'Max Discharge Current: 40kA, Voltage: 275V AC, 3-Phase.',
    },
    {
      id: 12,
      name: 'AC Contactors',
      category: 'Electrical Control',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQQw3_eHr7T1gh-fdxmo5Chry02QOg4mT224NfH1lnFuuYh2Cb4VtVKVcA-fNM',
      ],
      specs: 'Coil Voltage: 220V AC, Current: 9A-95A, 3-Pole or 4-Pole Options.',
    },
    {
      id: 13,
      name: 'Electrical Junction Box',
      category: 'Wiring Access',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTis2RV_SO62SIx5HmbmRCwEBwTwTR0_8YHW0MwMatUBTNN2rjokqeqFfJON216',
      ],
      specs: 'Material: ABS Plastic, Size: 150x150x80mm, IP Rating: IP66.',
    },
    {
      id: 14,
      name: 'Transformer 1kVA',
      category: 'Power Supply',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRNwcb59LM40UDbiTcYz393r06WOghiEni0r1L3EGlEOpxvX2x1MiHs5jYIejAK',
      ],
      specs: 'Input: 220V AC, Output: 110V AC, Frequency: 50/60Hz, Efficiency: 95%.',
    },
    {
      id: 15,
      name: 'Industrial Socket Outlet',
      category: 'Wiring Access',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQId5RiMXiga2VFWKXMLS25MH4n_hi-mfFGwqRDHz3k-uB1Kwm5Kr3DBMRwszrS',
      ],
      specs: 'Voltage: 400V, Current: 32A, Material: Thermoplastic, IP44.',
    },
    {
      id: 16,
      name: 'Phase Sequence Indicator',
      category: 'Measurement',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9n4o_oBK91iImFaX7rZ26ODXDEURJXTvPciqxOoGIju2za6VTvi34w2EP5P_x',
      ],
      specs: 'Voltage Range: 110-480V, 3-Phase Detection, LED Display.',
    },
    {
      id: 17,
      name: 'Fuse Holder Kit',
      category: 'Protection Device',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAoMWLWNOdLynZ1pnKZMbgGMBO6kkx6GlI-4kJYr_tpnXMKtK987AqMrubL035',
      ],
      specs: 'Rated Current: 6A-32A, Material: Ceramic, Panel Mount.',
    },
    {
      id: 18,
      name: 'Energy Analyzer Meter',
      category: 'Measurement',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfk8cAmGwIsbx7ZWruXSiGEdPa2zfIiI5EH-yaVdgOa8gLW0e1sM4Qgw-K-6gY',
      ],
      specs: '3-Phase Monitoring, LCD Display, Data Logging, RS485 Communication.',
    },
    {
      id: 19,
      name: 'DIN Rail Terminal Block',
      category: 'Electrical Control',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWepmrI-2mtsDPKvDWaD7Ces2afWgEEH50cUGezxvtSOM8RLJHVEztT6bUqas8',
      ],
      specs: 'Rated Voltage: 800V, Current: 32A, Material: Polyamide, Screw Type.',
    },
    {
      id: 20,
      name: 'LED Industrial Work Light',
      category: 'Lighting',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSF7_HLvzEuD7g-qbjvIrXXr5ET-8IburtZcNjhnQNpIbm6-N3UKEU7hEox4nLt',
      ],
      specs: 'Power: 50W, Voltage: 220V, Waterproof IP65, Aluminum Body.',
    },
    {
      id: 21,
      name: 'Magnetic Starter',
      category: 'Electrical Control',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyBle2s0aqApgeMKQh7p7psp4UWi-zHwxfsGNBN3oEsOZxL-7MAd53OJvqGOyM',
      ],
      specs: 'Power: 7.5kW, Voltage: 380V, 3-Phase, Thermal Overload Protection.',
    },
    {
      id: 22,
      name: 'Current Transformer (CT)',
      category: 'Measurement',
      image: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWeed1jLX9GzlN3NuCUWARKL2RHELR80C5t95hrGqatfVb5m3YAue0RA6oHAYY',
      ],
      specs: 'Ratio: 100/5A, Accuracy Class: 0.5, Rated Voltage: 0.66kV.',
    },
    {
      id: 23,
      name: 'Power Factor Controller',
      category: 'Automation',
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREexV8lLdtqVzIInmn13GNi2tX8UNae2fXERnEARV0fbnvZKKvpB0lshyJm84Q',
      ],
      specs: 'Steps: 12-Step, LED Display, Automatic Capacitor Bank Control.',
    },
    {
      id: 24,
      name: 'Capacitor Bank 25kVAR',
      category: 'Power Supply',
      image: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZ86j_INuOlI2Vc8PE54Sdlqf6UH99vJd2W4NCJW6qDfMKMgcKCOLv0We2GpzA',
      ],
      specs: 'Capacity: 25kVAR, Voltage: 440V, Frequency: 50Hz, Heavy Duty.',
    },
    {
      id: 25,
      name: 'Float Switch Pro',
      category: 'Protection Device',
      image: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLmqOsT3__0VZkmlD-4A9bftevci7e1J12_GkOF5Gvbz442BoHOEHi1easd9iN',
      ],
      specs: 'Cable Length: 5m, Material: PP, Rated Current: 10A, Waterproof.',
    },
    {
      id: 26,
      name: 'Distribution Transformer 160kVA',
      category: 'Power Supply',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYTu3UiZJS8G_agaWh-US1Gihg8u8HPLfurYFwB8eoCLxNh0xegeo--AinZiLM',
      ],
      specs: '160kVA, 22kV/400V, Oil-Immersed, Copper Winding.',
    },
    {
      id: 27,
      name: 'Busbar Insulator',
      category: 'Wiring Access',
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZJuyZENym4BEYj4IGTk2C22uNAkgVSofAEkMPsxfbEyDMBkA5EI42Rz7RYhl',
      ],
      specs: 'Material: BMC, Voltage: 600V, Height: 40mm, M8 Thread.',
    },
    {
      id: 28,
      name: 'Star-Delta Starter Panel',
      category: 'Electrical Control',
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5KdD4Fchsd60I0zP6DUltA3dSFLL1fA5uGkAErqxMmrD3ZNNxT57P1IVx6cv',
      ],
      specs: 'Power: 22kW, Component: Schneider, IP54 Metal Enclosure.',
    },
    {
      id: 29,
      name: 'Grounding Rod 5/8"',
      category: 'Protection Device',
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IaL_xGOjNwRIKPFavRy0aXwzc2hDWFAXC7NM_O5ETMEGQylu0YrCaztjOkE7',
      ],
      specs: 'Material: Copper Bonded, Length: 2.4m, Diameter: 16mm.',
    },
    {
      id: 30,
      name: 'Digital Timer Switch',
      category: 'Automation',
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerB-Anu_gTyUl5tR6CFB-P-NigBn9aI-E63HIu6oYI-51gNLT6vvatooEsOwP',
      ],
      specs: 'Voltage: 220V, Programming: 16 On/Off, Battery Backup.',
    },
    {
      id: 31,
      name: 'Limit Switch Box',
      category: 'Automation',
      image: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2sRfdhWTH7jAZIu5JpqgnAlY45gno6DWe9yH6D_0Gn8m62sPmyHpoqgmu6faE',
      ],
      specs: 'Protection: IP67, Contacts: 2xSPDT, Mechanical Position Sensing.',
    },
    {
      id: 32,
      name: 'Industrial Exhaust Fan',
      category: 'Lighting',
      image: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFjrJ9hcksBTsQ3EnLZXinPTXGS1W3tHtO9-PRFotJIlUO7DsxOi65gFYkISvE',
      ],
      specs: 'Size: 24 Inch, Power: 350W, Airflow: 8500m³/h, Low Noise.',
    },
    {
      id: 34,
      name: 'Soft Starter 45kW',
      category: 'Electrical Control',
      image: [
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSciB4Pcx_zHaohYKrowzBjTefrt0svRf3qTofmtr7XQNM4Xoh0vBknp2aJN22P',
      ],
      specs: 'Voltage: 380V-440V, Built-in Bypass, Torque Control.',
    },

    {
      id: 36,
      name: 'Lightning Arrester',
      category: 'Protection Device',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLWE8mA8c0UVzSCOhqWO1vAw5vp9PPWeEAI0YYM10sSUFSjpvMOriIpNACmmRs',
      ],
      specs: 'System: 22kV, Discharge Current: 10kA, Zinc Oxide Type.',
    },
    {
      id: 37,
      name: 'Variable Resistor (Potentiometer)',
      category: 'Automation',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZL_9IIfnujUWLJz8qfhmzkM5oC1HQvOWUF3EVDrlYkBACVNJp9SpDWOJkBdtN',
      ],
      specs: 'Resistance: 10k Ohm, Power: 2W, Precision Control Knob.',
    },
    {
      id: 38,
      name: 'DC Power Supply 24V 10A',
      category: 'Power Supply',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUAEFkkCqIa3RXsBA876AiGhKdTNxKvygtwAFQX-NHRSGIcWZW0zockPy3TBpI',
      ],
      specs: 'Input: 110/220V AC, Output: 24V DC, Efficiency: 88%.',
    },
    {
      id: 39,
      name: 'Handheld Multimeter',
      category: 'Measurement',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTKKijsDAeWGm8qD3V0YNQXWooEHo9A0boxQ5t_JfFy-nLBuvNmQizWTUoKOXU',
      ],
      specs: 'Auto-ranging, CAT III 600V, Backlight LCD, NCV Testing.',
    },
    {
      id: 40,
      name: 'Flame Retardant Tape',
      category: 'Wiring Access',
      image: [
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2KxvHbXs9_3aUJVMaL1U5J_6zwMJB2ZrED5Hm4XyqfusMSIBqIXCkMQd5NHur',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2KxvHbXs9_3aUJVMaL1U5J_6zwMJB2ZrED5Hm4XyqfusMSIBqIXCkMQd5NHur',
      ],
      specs: 'Width: 19mm, Length: 20m, Insulating Voltage: 600V.',
    },
  ]);
  get productslist() {
    return this.products.asReadonly();
  }
}
