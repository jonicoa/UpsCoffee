import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


  currentIndex = 0;
  backgrounds = [
    'url("UpsCoffee/bagel.png")',
     'url("UpsCoffee/chilaquilesrojos.png")',
    // Agrega más URLs de imágenes según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
    const banner = document.querySelector('.banner');
    this.changeBackground(banner);
    setInterval(() => this.changeBackground(banner), 5000);
  }

  changeBackground(banner: any) {
    this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
    banner.style.backgroundImage = this.backgrounds[this.currentIndex];
  }


}
