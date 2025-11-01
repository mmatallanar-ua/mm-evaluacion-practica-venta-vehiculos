import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  standalone: false
})
export class VehiculoComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  totalRenault = 0;
  totalChevrolet = 0;
  totalNissan = 0;

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.getVehiculos();
    

  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      console.log(data);
      this.vehiculos = data;
      this.getTotalMarca();
    });
  }

  getTotalMarca(): void {
    this.totalRenault = this.vehiculos.filter(v => v.marca === 'Renault').length;
    this.totalChevrolet = this.vehiculos.filter(v => v.marca === 'Chevrolet').length;
    this.totalNissan = this.vehiculos.filter(v => v.marca === 'Nissan').length;
  }


}


