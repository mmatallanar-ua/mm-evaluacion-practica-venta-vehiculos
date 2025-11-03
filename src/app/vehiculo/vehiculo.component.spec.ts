import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { VehiculoComponent } from './vehiculo.component';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';

describe('VehiculoListComponent', () => {
  let mockVehiculoService: jasmine.SpyObj<VehiculoService>;

  const vehiculosMock: Vehiculo[] = [
    {
      marca: 'Renault',
      linea: 'Kangoo',
      referencia: 'VU Express',
      modelo: 2017,
      kilometraje: 93272,
      color: 'Blanco',
      imagen:
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
    },
    {
      marca: 'Chevrolet',
      linea: 'Aveo',
      referencia: 'GT',
      modelo: 2018,
      kilometraje: 777,
      color: 'Plata',
      imagen: 'https://example.com/spark.jpg'
    },
    {
      marca: 'Nissan',
      linea: 'March',
      referencia: 'Active',
      modelo: 2019,
      kilometraje: 888,
      color: 'Plata',
      imagen: 'https://example.com/march.jpg'
    }
  ];

  beforeEach(async () => {
    mockVehiculoService = jasmine.createSpyObj<VehiculoService>('VehiculoService', [
      'getVehiculos'
    ]);
    mockVehiculoService.getVehiculos.and.returnValue(of(vehiculosMock));

    await TestBed.configureTestingModule({
      imports: [VehiculoComponent],
      providers: [{ provide: VehiculoService, useValue: mockVehiculoService }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VehiculoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render table with header and 3 rows', () => {
    const fixture = TestBed.createComponent(VehiculoComponent);
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
    const headerRows = compiled.querySelectorAll('thead tr');
    const bodyRows = compiled.querySelectorAll('tbody tr');

    expect(headerRows.length).toBe(1);
    expect(bodyRows.length).toBe(3);
  });
});


