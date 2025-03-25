import { Routes} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagoComponent } from './pago/pago.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
{
  path:'inicio',
  component: InicioComponent,

},
{
  path: 'productos',
  component: ProductosComponent,
},
{
  path: 'conocenos',
  component: ConocenosComponent
},
{
  path: 'carrito',
  component: CarritoComponent
},
{
  path: 'pago',
  component: PagoComponent
},





];
