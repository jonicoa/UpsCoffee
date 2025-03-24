import { Component } from '@angular/core';
import { CarritoService, Producto } from '../carrito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [
    { "id": 1, "name": "Pizza", "description": "Deliciosa pizza con queso y pepperoni.", "price": 150, "image": "/UpsCoffee/pizza.jpg", "type": "Snack" },
    { "id": 2, "name": "Hamburguesa", "description": "Hamburguesa con carne jugosa", "price": 120, "image": "/UpsCoffee/hamburguesa.jpg", "type": "Snack" },
    { "id": 3, "name": "Frappe", "description": "Frappe muy bueno.", "price": 90, "image": "/UpsCoffee/frappe.jpg", "type": "Bebida" },
    { "id": 4, "name": "Enchiladas", "description": "Enchiladas del tipo a escoger.", "price": 200, "image": "/UpsCoffee/enchiladas.jpg", "type": "Mexicana" },
    { "id": 5, "name": "Ensalada", "description": "Ensalada fresca con ingredientes naturales.", "price": 80, "image": "/UpsCoffee/ensalada.jpg", "type": "Saludable" },
    { "id": 6, "name": "Torta", "description": "Torta rellena con carne, queso y salsa.", "price": 110, "image": "/UpsCoffee/torta.jpg", "type": "Mexicana" },
    { "id": 7, "name": "Chilaquiles", "description": "Chilaquiles con salsa verde o roja.", "price": 130, "image": "/UpsCoffee/chilaquiles.jpg", "type": "Mexicana" },
    { "id": 8, "name": "Tacos", "description": "Tacos al pastor con piña y cebolla.", "price": 70, "image": "/UpsCoffee/tacos.jpg", "type": "Mexicana" },
    { "id": 9, "name": "Sopa", "description": "Sopa de pollo con verduras y fideos.", "price": 85, "image": "/UpsCoffee/sopa.jpg", "type": "Saludable" },
    { "id": 10, "name": "Huevos", "description": "Huevos estrellados muy ricos.", "price": 45, "image": "/UpsCoffee/huevos.jpg", "type": "Desayuno" },
    { "id": 11, "name": "Quesadillas", "description": "Quesadillas con salsa.", "price": 50, "image": "/UpsCoffee/quesadillas.jpg", "type": "Mexicana" },
    { "id": 12, "name": "Baguette Pollo", "description": "Baguette de pollo premium muy sabroso.", "price": 90, "image": "/UpsCoffee/baguette.jpg", "type": "Snack" },
    { "id": 13, "name": "Coca Cola", "description": "Coca Cola lata 355 ml", "price": 20, "image": "/UpsCoffee/coca.jpg", "type": "Bebida" },
    { "id": 14, "name": "Boneless", "description": "Boneless de pollo muy delicioso.", "price": 100, "image": "/UpsCoffee/boneless.jpg", "type": "Snack" },
    { "id": 15, "name": "Tostadas", "description": "Tostadas crujientes con guacamole y salsa.", "price": 60, "image": "/UpsCoffee/tostadas.jpg", "type": "Mexicana" },
    { "id": 16, "name": "Chocomilk", "description": "Chocomilk cremoso con sabor a vainilla.", "price": 80, "image": "/UpsCoffee/milkshake.jpg", "type": "Bebida" },
    { "id": 17, "name": "Ceviche", "description": "Ceviche fresco con camarón y limón.", "price": 180, "image": "/UpsCoffee/ceviche.jpg", "type": "Mexicana" },
    { "id": 18, "name": "Nachos", "description": "Nachos con queso fundido y jalapeños.", "price": 90, "image": "/UpsCoffee/nachos.jpg", "type": "Snack" },
    { "id": 19, "name": "Café", "description": "Café recién preparado, fuerte y delicioso.", "price": 40, "image": "/UpsCoffee/cafe.jpg", "type": "Bebida" },
    { "id": 20, "name": "Tortillas", "description": "Tortillas frescas hechas a mano.", "price": 30, "image": "/UpsCoffee/tortillas.jpg", "type": "Mexicana" }
]
;
  iconosCategorias: { [key: string]: string } = {
    'Snack': 'bi-cup-straw', // Icono para Snack
    'Bebida': 'bi-cup',      // Icono para Bebida
    'Mexicana': 'bi-basket', // Icono para Mexicana
    'Saludable': 'bi-bandaid', // Icono para Saludable
    'Desayuno': 'bi-egg-fried'     // Icono para Desayuno
  };

  productosFiltrados: Producto[] = this.productos; // Inicialmente muestra todos los productos
  categorias: string[] = this.obtenerCategoriasUnicas(); // Obtiene las categorías únicas
  productosAgregados: { [id: number]: boolean } = {};  // Controla si el producto fue agregado
  cantidadSeleccionada: { [id: number]: number } = {}; // Almacena la cantidad seleccionada por producto
  categoriaSeleccionada: string = '';
  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {}


  // Obtener categorías únicas
  obtenerCategoriasUnicas(): string[] {
    const tipos = this.productos.map(producto => producto.type);
    return [...new Set(tipos)];
  }

  // Filtrar productos por categoría
  filtrarPorCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria || 'Categorías';
    if (categoria) {
      this.productosFiltrados = this.productos.filter(producto => producto.type === categoria);
    } else {
      this.productosFiltrados = this.productos; // Si no se selecciona ninguna categoría, muestra todos
    }
  }

  // Agregar producto al carrito
  agregarAlCarrito(producto: Producto, cantidad: number = 1) {
    if (cantidad < 1) cantidad = 1; // Evita cantidades menores a 1

    for (let i = 0; i < cantidad; i++) {
      this.carritoService.agregarProducto(producto);
    }

    this.productosAgregados[producto.id] = true;

    setTimeout(() => {
      this.productosAgregados[producto.id] = false;
    }, 1500);
  }
}
