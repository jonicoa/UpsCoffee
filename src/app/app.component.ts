import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarritoService } from './carrito.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit  {
  MenuOpen = false;

  toggleMenu() {
    this.MenuOpen = !this.MenuOpen;
  }

  isSticky = false;
  cantidadProductos$: Observable<number> = new Observable<number>();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 45;
  }

  constructor(private carritoService: CarritoService) {}
  ngOnInit(): void {
    this.cantidadProductos$ = this.carritoService.obtenerCantidadProductos();
  }
}
