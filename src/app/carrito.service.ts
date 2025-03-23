import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

export interface Producto {
  name: string;
  description: string;
  price: number;
  image: string;
  id: number;
  type:string;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosEnCarrito: Producto[] = [];
  private carritoSubject = new BehaviorSubject<Producto[]>([]);

  obtenerProductos(): Observable<Producto[]> {
    return this.carritoSubject.asObservable();
  }

  agregarProducto(producto: Producto): void {
    this.productosEnCarrito.push(producto);
    this.carritoSubject.next(this.productosEnCarrito);
  }

  eliminarProducto(id: number): void {
    // Filtra el producto con el ID proporcionado
    this.productosEnCarrito = this.productosEnCarrito.filter((producto) => producto.id !== id);
    this.carritoSubject.next(this.productosEnCarrito);
  }

  obtenerCantidadProductos(): Observable<number> {
    return this.carritoSubject.asObservable().pipe(
      map((productos) => productos.length)
    );
  }
}
