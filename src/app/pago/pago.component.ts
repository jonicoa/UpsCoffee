import { Component } from '@angular/core';
import { CarritoService, Producto } from '../carrito.service';

@Component({
  selector: 'app-pago',
  imports: [],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {
productos: Producto[] = [];

constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.obtenerProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }


  calcularTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.price, 0);
  }

}
