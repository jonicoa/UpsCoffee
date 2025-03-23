import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarritoService, Producto } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: Producto[] = [];
  productosAgrupados: { [key: string]: Producto & { cantidad: number } } = {};

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.obtenerProductos().subscribe((productos) => {
      this.productos = productos;
      this.agruparProductos();
    });
  }

  agruparProductos(): void {
    this.productosAgrupados = {}; // Reiniciar el objeto agrupado

    this.productos.forEach((producto) => {
      if (this.productosAgrupados[producto.name]) {
        this.productosAgrupados[producto.name].cantidad++;
      } else {
        this.productosAgrupados[producto.name] = { ...producto, cantidad: 1 };
      }
    });

  }



  calcularTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.price, 0);
  }

  get productosAgrupadosArray(): (Producto & { cantidad: number })[] {
    return Object.values(this.productosAgrupados);
  }

  eliminarProducto(producto: Producto): void {
    // Llama al servicio para eliminar el producto por su ID
    this.carritoService.eliminarProducto(producto.id);

    // Actualiza la lista de productos en el componente
    this.productos = this.productos.filter((p) => p.id !== producto.id);
    this.agruparProductos(); // Reagrupa los productos
  }


}
